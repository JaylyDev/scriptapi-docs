[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ProjectileHitBlockAfterEventSignal

# Class: ProjectileHitBlockAfterEventSignal

Manages callbacks that are connected to when a projectile
hits a block.

## Source

```ts
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ProjectileHitBlockAfterEventSignal**(): `ProjectileHitBlockAfterEventSignal`

#### Returns

`ProjectileHitBlockAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a projectile hits a
block.

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

Removes a callback from being called when a projectile hits
a block.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
