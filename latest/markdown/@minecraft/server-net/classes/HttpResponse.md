[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-net](../README.md) / HttpResponse

# Class: HttpResponse

Main object that contains result information from a request.

## Source

```ts
export class HttpResponse {
    private constructor();
    readonly body: string;
    readonly headers: HttpHeader[];
    readonly request: HttpRequest;
    readonly status: number;
}
```

## Constructors

### Constructor

> `private` **new HttpResponse**(): `HttpResponse`

#### Returns

`HttpResponse`

## Properties

### body

> `readonly` **body**: `string`

#### Remarks

Body content of the HTTP response.

#### World Ready

This property can't be read in early-execution mode.

***

### headers

> `readonly` **headers**: [`HttpHeader`](HttpHeader.md)[]

#### Remarks

A collection of HTTP response headers returned from the
request.

#### World Ready

This property can't be read in early-execution mode.

***

### request

> `readonly` **request**: [`HttpRequest`](HttpRequest.md)

#### Remarks

Information that was used to formulate the HTTP response
that this object represents.

#### World Ready

This property can't be read in early-execution mode.

***

### status

> `readonly` **status**: `number`

#### Remarks

HTTP response code for the request. For example, 404
represents resource not found, and 500 represents an
internal server error.

#### World Ready

This property can't be read in early-execution mode.
