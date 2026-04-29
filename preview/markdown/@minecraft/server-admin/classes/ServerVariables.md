[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-admin](../README.md) / ServerVariables

# Class: ServerVariables

A collection of server variables defined in dedicated server
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
export class ServerVariables {
    private constructor();
    readonly names: string[];
    get(name: string): unknown | undefined;
}
```

## Constructors

### Constructor

> `private` **new ServerVariables**(): `ServerVariables`

#### Returns

`ServerVariables`

## Properties

### names

> `readonly` **names**: `string`[]

#### Remarks

A list of available, configured server variables.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### get()

> **get**(`name`): `unknown`

#### Parameters

##### name

`string`

#### Returns

`unknown`

#### Remarks

Returns the value of variable that has been configured in a
dedicated server configuration JSON file.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
