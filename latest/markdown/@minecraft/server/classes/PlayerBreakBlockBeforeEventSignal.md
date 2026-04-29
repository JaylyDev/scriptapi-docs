[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / PlayerBreakBlockBeforeEventSignal

# Class: PlayerBreakBlockBeforeEventSignal

Manages callbacks that are connected to before a player
breaks a block.

## Source

```ts
export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockBeforeEvent) => void;
    unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerBreakBlockBeforeEventSignal**(): `PlayerBreakBlockBeforeEventSignal`

#### Returns

`PlayerBreakBlockBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

##### options?

[`BlockEventOptions`](../interfaces/BlockEventOptions.md)

#### Returns

Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called before a block is broken
by a player.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

#### Returns

`void`

#### Remarks

Removes a callback from being called before a player breaks
a block.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
