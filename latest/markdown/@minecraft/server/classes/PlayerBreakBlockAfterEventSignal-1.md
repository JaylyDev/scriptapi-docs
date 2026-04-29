[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerBreakBlockAfterEventSignal

# Class: PlayerBreakBlockAfterEventSignal

Manages callbacks that are connected to when a player breaks
a block.

## Source

```ts
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerBreakBlockAfterEventSignal**(): `PlayerBreakBlockAfterEventSignal`

#### Returns

`PlayerBreakBlockAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`BlockEventOptions`](../interfaces/BlockEventOptions-1.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a block is broken
by a player.

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

Removes a callback from being called when a player breaks a
block.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
