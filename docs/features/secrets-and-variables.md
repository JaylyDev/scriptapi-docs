---
title: Secrets and Variables
description: Guides related to configuration of variables and secrets in JSON files in the Bedrock Dedicated Server folder via the @minecraft/server-admin module.
---

# Secrets and Variables

Guides related to configuration of variables and secrets in JSON files in the Bedrock Dedicated Server folder via the `@minecraft/server-admin` module.

::: warning
This feature is only available to [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock), and it cannot be used on Minecraft clients.
:::

## Variables

Variables are properties that has been configured in a dedicated server configuration JSON file.

### Storing Variables

JSON format for `variables.json` is `Record<string, any>`. The file is located in `config/<pack_id>/variables.json`.

```jsonc
{
  "myVariable": "Foo bar", // string to any
  "myVariable2": {
    "bar": "baz"
  }
}
```

### Loading Variables

To load the variables in Minecraft, first add `@minecraft/server-admin` module to `manifest.json` dependency:

```json
{
  "module_name": "@minecraft/server-admin",
  "version": "1.0.0-beta"
}
```

Then get the value of variables from the API module through `varaibles.get()`:

```js
import { variables } from "@minecraft/server-admin";

// A list of available, configured server variables.
console.warn(variables.names);

// Returns the value of variable that has been configured in a dedicated server configuration JSON file.
console.warn(variables.get("myVariables")); // Foo bar
console.warn(variables.get("myVariable2")); // { "bar": "baz" }
```

## Secrets

Secrets defined in dedicated server configuration, it's value is not available to view in script environment.

### Storing Secrets

JSON format for `secrets.json` is `Record<string, string>`:

```jsonc
{
  "secretToken": "jayly123" // string to string only
}
```

The file is located in `config/<pack_id>/secrets.json`.

### Loading Secrets

Secrets are used in HTTP requests via `@minecraft/server-net`.

To load the secrets in Minecraft, first add `@minecraft/server-admin` and `@minecraft/server-net` module to `manifest.json` dependency:

```json
{
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
},
{
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
}
```

Then get the value of variables from the API module through `secrets.get()`.

### Discord API Example Usage

I figured a lot of users here use Discord, so why not make Minecraft sends a message to Discord using your Discord bot.

The following code below sends a message to a Discord channel from Minecraft, using Discord HTTP API.

1. Imports all the neccessary variables and methods.

```ts
import { secrets, SecretString, variables } from "@minecraft/server-admin";
import {
  http,
  HttpHeader,
  HttpRequest,
  HttpRequestMethod,
} from "@minecraft/server-net";
```

2. Retrieves all neccessary variables and secrets from JSON files, in your Bedrock Dedicated Server folder.

```js
// Gets bot token, in format "BOT <token>"
const BOT_TOKEN = secrets.get("BOT_TOKEN") as SecretString;
// Retrives Discord's API base URL
const BASE_URL: string = variables.get("BASE_URL");
// Add-On homepage URL - required in User Agent in HTTP requests to Discord APIs
const HOMEPAGE: string = variables.get("HOMEPAGE");
// Add-On version - required in User Agent in HTTP requests to Discord APIs
const VERSION: string = variables.get("VERSION");
// Channel ID
const channelId: string = variables.get("CHANNEL_ID");
// User agent
const UserAgent = { agent: "cpprestsdk", version: "2.9.0" };
// Response status
const successResponseStatus: number[] = [200, 201, 204];
```

Variable definitions:

- `BOT_TOKEN`: Discord's bot token. Example: `BOT XXXXXXXXXXXXXXXX`
- `BASE_URL`: Discord's API base URL, like `https://discord.com/api/v{version_number}`
  ::: info
  Please check [Discord's API Reference](https://discord.com/developers/docs/reference#api-versioning-api-versions) for a list of available API Versions.
  :::
- `HOMEPAGE`: Your project's homepage. Example: `https://jaylydev.github.io`
- `VERSION`: Your project's version. Example: `0.1.0`
- `channelId`: Discord's channel ID to send the message to.
- `UserAgent`: A computer program representing a person. We're using Minecraft's HTTP user agent in this example.
- `successResponseStatus`: List of success HTTP response status sent by Discord API.

3. Implement a HTTP request function that sends a request to Discord's API
   ::: info
   Please check [Discord's API Reference](https://discord.com/developers/docs/) for more infomation.
   :::

```ts
export default async function request(
  url: string,
  method: HttpRequestMethod,
  body?: object
): Promise<string>;
```

Parameters:

- `url`: Discord API endpoint.
- `method`: HTTP request method
- `body`: Request body

Returns:

- `Promise<string>`: Raw HTTP response

4. Simple wrapper to send a message to Discord

```ts
async function sendMessage(message: string) {
  if (typeof message === "string") {
    // Request object
    const requestOptions: object = {
      content: message,
    };
    const method = HttpRequestMethod.Post;
    const path = `/channels/${channelId}/messages`;
    const response = await request(path, method, requestOptions);
    return JSON.parse(response);
  }
}

sendMessage("Hello World");
```

Entire script example and configuration are shown below:

::: details sendRequest.ts

```ts
import { secrets, SecretString, variables } from "@minecraft/server-admin";
import {
  http,
  HttpHeader,
  HttpRequest,
  HttpRequestMethod,
} from "@minecraft/server-net";

const BOT_TOKEN = secrets.get("BOT_TOKEN") as SecretString;
const BASE_URL: string = variables.get("BASE_URL");
const HOMEPAGE: string = variables.get("HOMEPAGE");
const VERSION: string = variables.get("VERSION");
const channelId: string = variables.get("CHANNEL_ID");
const UserAgent = { agent: "cpprestsdk", version: "2.9.0" };
const successResponseStatus: number[] = [200, 201, 204];

export default async function request(
  url: string,
  method: HttpRequestMethod,
  body?: object
): Promise<string> {
  // Define the base URL and combine it with a specific endpoint URL
  const fetchUrl = BASE_URL + url;

  // Create a new HTTP request object using the fetch URL
  const options = new HttpRequest(fetchUrl);

  // Define headers to include with the request
  const headers: HttpHeader[] = [
    // Authorization header using a bot token for authentication
    new HttpHeader("Authorization", BOT_TOKEN),

    // User-Agent header with bot information (required for Discord API requests)
    new HttpHeader(
      "User-Agent",
      `DiscordBot (${HOMEPAGE}, ${VERSION}) ${UserAgent.agent}/${UserAgent.version}`
    ),

    // Specify the content type as JSON for the request body
    new HttpHeader("Content-Type", "application/json"),

    // Specify the accepted encoding format for the response
    new HttpHeader("Accept-Encoding", "utf-8"),

    // Specify the acceptable response format
    new HttpHeader("Accept", "text/plain"),
  ];

  // Assign the defined headers to the request options
  options.headers = headers;

  // Set the HTTP method (e.g., GET, POST, DELETE, etc.)
  options.method = method;

  // If the request body is an object, stringify it to JSON format
  if (typeof body === "object") options.body = JSON.stringify(body);

  // Perform the HTTP request and await the response
  const response = await http.request(options);

  // Check if the response status is considered a success
  if (successResponseStatus.includes(response.status)) {
    // If the response is not successful, log an error message
    console.error(
      `Failed to ${options.method} ${options.uri}. Response: ${JSON.stringify(
        response.body
      )}`
    );
    // Throw an error to signal the failure
    throw new Error(`Failed to ${options.method} ${options.uri}`);
  } else {
    // If successful, log the HTTP method and URI
    console.log(`${options.method} ${options.uri}`);

    // Return the response body
    return response.body;
  }
}

async function sendMessage(message: string) {
  if (typeof message === "string") {
    const requestOptions: object = {
      content: message,
    };
    const method = HttpRequestMethod.Post;
    const path = `/channels/${channelId}/messages`;
    const response = await request(path, method, requestOptions);
    return JSON.parse(response);
  }
}

sendMessage("Hello World");
```

:::

::: details config/<pack_id>/variables.json

```json
{
  "BASE_URL": "https://discord.com/api/v{version_number}",
  "HOMEPAGE": "https://jaylydev.github.io/",
  "VERSION": "0.1.0",
  "CHANNEL_ID": "000000000000000000"
}
```

:::

::: details config/<pack_id>/secrets.json

```json
{
  "BOT_TOKEN": "BOT {token}"
}
```

:::
