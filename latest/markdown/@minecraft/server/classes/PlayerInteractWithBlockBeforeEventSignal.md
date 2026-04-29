[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / PlayerInteractWithBlockBeforeEventSignal

# Class: PlayerInteractWithBlockBeforeEventSignal

Manages callbacks that are connected to before a player
interacts with a block.

## Source

```ts
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg0: PlayerInteractWithBlockBeforeEvent) => void;
    unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerInteractWithBlockBeforeEventSignal**(): `PlayerInteractWithBlockBeforeEventSignal`

#### Returns

`PlayerInteractWithBlockBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

#### Returns

Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called before a player
interacts with a block.

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

Removes a callback from being called before a player
interacts with a block.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
