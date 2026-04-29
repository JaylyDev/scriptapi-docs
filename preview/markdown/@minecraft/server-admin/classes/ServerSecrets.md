[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-admin](../README.md) / ServerSecrets

# Class: ServerSecrets

A collection of server secrets defined in dedicated server
configuration.

## Example

```typescript
import { variables, secrets } from '@minecraft/server-admin';
import { http, HttpRequest, HttpRequestMethod, HttpHeader, HttpResponse } from '@minecraft/server-net';

const serverUrl = variables.get('serverEndpoint');

function getPlayerProfile(playerId: string): Promise<HttpResponse> {
  const req = new HttpRequest(serverUrl + 'getPlayerProfile');

  req.body = JSON.stringify({
    playerId,
  });

  const authTokenSec = secrets.get('authtoken');

  if (!authTokenSec) {
    throw new Error('authtoken secret not defined.');
  }

  req.method = HttpRequestMethod.Post;
  req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', authTokenSec)];

  return http.request(req);
}
```

## Source

```ts
export class ServerSecrets {
    private constructor();
    readonly names: string[];
    get(name: string): SecretString | undefined;
}
```

## Constructors

### Constructor

> `private` **new ServerSecrets**(): `ServerSecrets`

#### Returns

`ServerSecrets`

## Properties

### names

> `readonly` **names**: `string`[]

#### Remarks

A list of available, configured server secrets.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### get()

> **get**(`name`): [`SecretString`](SecretString.md) \| `undefined`

#### Parameters

##### name

`string`

#### Returns

[`SecretString`](SecretString.md) \| `undefined`

#### Remarks

Returns a SecretString that is a placeholder for a secret
configured in a JSON file. In certain objects, like an
HttpHeader, this Secret is resolved at the time of execution
but is not made available to the script environment.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
