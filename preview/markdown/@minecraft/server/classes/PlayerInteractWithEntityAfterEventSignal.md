[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / PlayerInteractWithEntityAfterEventSignal

# Class: PlayerInteractWithEntityAfterEventSignal

Manages callbacks that are connected to after a player
interacts with an entity.

## Source

```ts
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg0: PlayerInteractWithEntityAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerInteractWithEntityAfterEventSignal**(): `PlayerInteractWithEntityAfterEventSignal`

#### Returns

`PlayerInteractWithEntityAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after a player interacts
with an entity.

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

Removes a callback from being called after a player
interacts with an entity.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
