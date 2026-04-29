[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ServerMessageAfterEventSignal

# Class: ServerMessageAfterEventSignal

**`Beta`**

Manages callbacks that are message passing to a server. This
event is not currently fully implemented, and should not be
used.

## Source

```ts
export class ServerMessageAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ServerMessageAfterEventSignal**(): `ServerMessageAfterEventSignal`

#### Returns

`ServerMessageAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an internal message
is passed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

Removes a callback from being called when an internal
message is passed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
