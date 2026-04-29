[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-net](../README.md) / WebSocketConnectionFailedError

# Class: WebSocketConnectionFailedError

An error thrown when the connection with the WebSocket
server has failed.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new WebSocketConnectionFailedError**(): `WebSocketConnectionFailedError`

#### Returns

`WebSocketConnectionFailedError`

#### Overrides

`Error.constructor`

## Properties

### errorCode

> `readonly` **errorCode**: `number`

#### Remarks

The error code received when attempting to connect with the
server.

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

***

### uri

> `readonly` **uri**: `string`

#### Remarks

The URI provided to make this connection attempt that
failed.

This property can be read in early-execution mode.
