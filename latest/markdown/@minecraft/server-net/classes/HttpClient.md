[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-net](../README.md) / HttpClient

# Class: HttpClient

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
export class HttpClient {
    private constructor();
    cancelAll(reason: string): void;
    get(uri: string): Promise<HttpResponse>;
    request(config: HttpRequest): Promise<HttpResponse>;
}
```

## Constructors

### Constructor

> `private` **new HttpClient**(): `HttpClient`

#### Returns

`HttpClient`

## Methods

### cancelAll()

> **cancelAll**(`reason`): `void`

#### Parameters

##### reason

`string`

#### Returns

`void`

#### Remarks

Cancels all pending requests.

This function can be called in early-execution mode.

***

### get()

> **get**(`uri`): `Promise`\<[`HttpResponse`](HttpResponse.md)\>

#### Parameters

##### uri

`string`

URL to make an HTTP Request to.

#### Returns

`Promise`\<[`HttpResponse`](HttpResponse.md)\>

An awaitable promise that contains the HTTP response.

#### Remarks

Performs a simple HTTP get request.

This function can be called in early-execution mode.

***

### request()

> **request**(`config`): `Promise`\<[`HttpResponse`](HttpResponse.md)\>

#### Parameters

##### config

[`HttpRequest`](HttpRequest.md)

Contains an HTTP Request object with configuration data on
the HTTP request.

#### Returns

`Promise`\<[`HttpResponse`](HttpResponse.md)\>

An awaitable promise that contains the HTTP response.

#### Remarks

Performs an HTTP request.

This function can be called in early-execution mode.

#### Example

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
