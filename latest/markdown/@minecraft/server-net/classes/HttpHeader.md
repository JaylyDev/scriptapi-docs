[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-net](../README.md) / HttpHeader

# Class: HttpHeader

Represents an HTTP header - a key/value pair of
meta-information about a request.

## Example

```typescript
import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';

async function updateScore() {
    const req = new HttpRequest('http://localhost:3000/updateScore');

    req.body = JSON.stringify({
        score: 22,
    });

    req.method = HttpRequestMethod.Post;
    req.headers = [
        new HttpHeader('Content-Type', 'application/json'),
        new HttpHeader('auth', 'my-auth-token'),
    ];

    await http.request(req);
}
```

## Source

```ts
export class HttpHeader {
    key: string;
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}
```

## Constructors

### Constructor

> **new HttpHeader**(`key`, `value`): `HttpHeader`

#### Parameters

##### key

`string`

##### value

`string` \| [`SecretString`](../../server-admin/classes/SecretString.md)

#### Returns

`HttpHeader`

## Properties

### key

> **key**: `string`

#### Remarks

Key of the HTTP header.

This property can be edited in early-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### value

> **value**: `string` \| [`SecretString`](../../server-admin/classes/SecretString.md)

#### Remarks

Value of the HTTP header.

This property can be edited in early-execution mode.

#### World Ready

This property can't be read in early-execution mode.
