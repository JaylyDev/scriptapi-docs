[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-net](../README.md) / HttpRequest

# Class: HttpRequest

Main object for structuring a request.

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

## Constructors

### Constructor

> **new HttpRequest**(`uri`): `HttpRequest`

#### Parameters

##### uri

`string`

#### Returns

`HttpRequest`

## Properties

### body

> **body**: `string`

#### Remarks

Content of the body of the HTTP request.

This property can be edited in early-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### headers

> **headers**: [`HttpHeader`](HttpHeader.md)[]

#### Remarks

A collection of HTTP headers to add to the outbound request.

This property can be edited in early-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### method

> **method**: [`HttpRequestMethod`](../enumerations/HttpRequestMethod.md)

#### Remarks

HTTP method (e.g., GET or PUT or PATCH) to use for making
the request.

This property can be edited in early-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### timeout

> **timeout**: `number`

#### Remarks

Amount of time, in seconds, before the request times out and
is abandoned.

This property can be edited in early-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### uri

> **uri**: `string`

#### Remarks

The HTTP resource to access.

This property can be edited in early-execution mode.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### addHeader()

> **addHeader**(`key`, `value`): `HttpRequest`

#### Parameters

##### key

`string`

##### value

`string` \| [`SecretString`](../../server-admin/classes/SecretString.md)

#### Returns

`HttpRequest`

#### Remarks

Adds an additional header to the overall list of headers
used in the corresponding HTTP request.

This function can be called in early-execution mode.

***

### setBody()

> **setBody**(`body`): `HttpRequest`

#### Parameters

##### body

`string`

#### Returns

`HttpRequest`

#### Remarks

Updates the content of the body of the HTTP request.

This function can be called in early-execution mode.

***

### setHeaders()

> **setHeaders**(`headers`): `HttpRequest`

#### Parameters

##### headers

[`HttpHeader`](HttpHeader.md)[]

#### Returns

`HttpRequest`

#### Remarks

Replaces and applies a set of HTTP Headers for the request.

This function can be called in early-execution mode.

***

### setMethod()

> **setMethod**(`method`): `HttpRequest`

#### Parameters

##### method

[`HttpRequestMethod`](../enumerations/HttpRequestMethod.md)

#### Returns

`HttpRequest`

#### Remarks

Sets the desired HTTP method (e.g., GET or PUT or PATCH) to
use for making the request.

This function can be called in early-execution mode.

***

### setTimeout()

> **setTimeout**(`timeout`): `HttpRequest`

#### Parameters

##### timeout

`number`

#### Returns

`HttpRequest`

#### Remarks

This function can be called in early-execution mode.
