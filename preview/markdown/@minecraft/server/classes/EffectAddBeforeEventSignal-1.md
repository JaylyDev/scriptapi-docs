[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EffectAddBeforeEventSignal

# Class: EffectAddBeforeEventSignal

Manages callbacks that are connected to when an effect is
added to an entity.

## Source

```ts
export class EffectAddBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EffectAddBeforeEventSignal**(): `EffectAddBeforeEventSignal`

#### Returns

`EffectAddBeforeEventSignal`

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

Adds a callback that will be called when an effect is added
to an entity.

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

Removes a callback from being called when an effect is added
to an entity.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
