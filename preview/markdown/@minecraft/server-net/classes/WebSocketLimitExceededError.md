[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-net](../README.md) / WebSocketLimitExceededError

# Class: WebSocketLimitExceededError

An error that is thrown when the maximum number of connected
WebSockets is reached.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new WebSocketLimitExceededError**(): `WebSocketLimitExceededError`

#### Returns

`WebSocketLimitExceededError`

#### Overrides

`Error.constructor`

## Properties

### connectedSockets

> `readonly` **connectedSockets**: `number`

#### Remarks

Number of WebSocket connections already active when
rejected.

This property can be read in early-execution mode.

***

### maxConcurrentConnections

> `readonly` **maxConcurrentConnections**: `number`

#### Remarks

Configured maximum active WebSocket connections.

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
