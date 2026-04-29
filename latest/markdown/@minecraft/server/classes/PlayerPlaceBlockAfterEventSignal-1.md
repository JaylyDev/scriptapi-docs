[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerPlaceBlockAfterEventSignal

# Class: PlayerPlaceBlockAfterEventSignal

Manages callbacks that are connected to when a block is
placed by a player.

## Source

```ts
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerPlaceBlockAfterEventSignal**(): `PlayerPlaceBlockAfterEventSignal`

#### Returns

`PlayerPlaceBlockAfterEventSignal`

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

Adds a callback that will be called when a block is placed
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

Removes a callback from being called when an block is placed
by a player.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
