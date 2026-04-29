[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-net](../README.md) / WebSocketClient

# Class: WebSocketClient

An active WebSocket client.

## Source

```ts
export class WebSocketClient {
    private constructor();
    readonly afterEvents: WebSocketClientAfterEvents;
    readonly isOpen: boolean;
    close(): void;
    send(payload: string): void;
}
```

## Constructors

### Constructor

> `private` **new WebSocketClient**(): `WebSocketClient`

#### Returns

`WebSocketClient`

## Properties

### afterEvents

> `readonly` **afterEvents**: [`WebSocketClientAfterEvents`](WebSocketClientAfterEvents.md)

#### Remarks

Contains a set of events related to this WebSocket client.

#### World Ready

This property can't be read in early-execution mode.

***

### isOpen

> `readonly` **isOpen**: `boolean`

#### Remarks

Set to true if the socket is current connected to the
server.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Remarks

Closes the connection with the server.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[WebSocketNotConnectedError](WebSocketNotConnectedError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### send()

> **send**(`payload`): `void`

#### Parameters

##### payload

`string`

The payload that will be included in the network packet.

#### Returns

`void`

#### Remarks

Sends the provided payload to the server.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[RequestBodyTooLargeError](RequestBodyTooLargeError.md)

[WebSocketNotConnectedError](WebSocketNotConnectedError.md)

#### World Ready

This function can't be called in early-execution mode.
