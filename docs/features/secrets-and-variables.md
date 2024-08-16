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

Then get the value of variables from the API module through `secrets.get()`:

```ts
import { variables, secrets } from "@minecraft/server-admin";
import {
  http,
  HttpRequest,
  HttpRequestMethod,
  HttpHeader,
  HttpResponse,
} from "@minecraft/server-net";

const serverUrl = variables.get("serverEndpoint");

function getPlayerProfile(playerId: string): Promise<HttpResponse> {
  const req = new HttpRequest(serverUrl + "getPlayerProfile");

  req.body = JSON.stringify({
    playerId,
  });

  const authTokenSec = secrets.get("authtoken");

  if (!authTokenSec) {
    throw new Error("authtoken secret not defined.");
  }

  req.method = HttpRequestMethod.Post;
  req.headers = [
    new HttpHeader("Content-Type", "application/json"),
    new HttpHeader("auth", authTokenSec),
  ];

  return http.request(req);
}

getPlayerProfile("dark navi");
```
