[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-net](../README.md) / HttpRequestLimitExceededError

# Class: HttpRequestLimitExceededError

An error thrown when the maximum number of concurrent HTTP
requests has been reached.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new HttpRequestLimitExceededError**(): `HttpRequestLimitExceededError`

#### Returns

`HttpRequestLimitExceededError`

#### Overrides

`Error.constructor`

## Properties

### inFlightRequests

> `readonly` **inFlightRequests**: `number`

#### Remarks

Number of requests already in flight when rejected.

This property can be read in early-execution mode.

***

### maxConcurrentRequests

> `readonly` **maxConcurrentRequests**: `number`

#### Remarks

Configured maximum concurrent HTTP requests.

This property can be read in early-execution mode.

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`
