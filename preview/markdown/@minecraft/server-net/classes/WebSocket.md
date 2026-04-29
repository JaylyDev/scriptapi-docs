[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-net](../README.md) / WebSocket

# Class: WebSocket

Used to manage WebSocket connections.

## Source

```ts
export class WebSocket {
    private constructor();
    connect(uri: string): Promise<WebSocketClient>;
}
```

## Constructors

### Constructor

> `private` **new WebSocket**(): `WebSocket`

#### Returns

`WebSocket`

## Methods

### connect()

> **connect**(`uri`): `Promise`\<[`WebSocketClient`](WebSocketClient.md)\>

#### Parameters

##### uri

`string`

URL to make connection to.

#### Returns

`Promise`\<[`WebSocketClient`](WebSocketClient.md)\>

An awaitable promise that contains the WebSocket client that
was connected.

#### Remarks

Attempts to connect a WebSocket client.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.
