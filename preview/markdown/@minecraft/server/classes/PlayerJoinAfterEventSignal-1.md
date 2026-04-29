[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerJoinAfterEventSignal

# Class: PlayerJoinAfterEventSignal

Manages callbacks that are connected to a player joining the
world.

## Source

```ts
export class PlayerJoinAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerJoinAfterEventSignal**(): `PlayerJoinAfterEventSignal`

#### Returns

`PlayerJoinAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a player joins the
world.

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

Removes a callback from being called when a player joins the
world.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
