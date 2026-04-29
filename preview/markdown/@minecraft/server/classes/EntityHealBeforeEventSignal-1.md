[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHealBeforeEventSignal

# Class: EntityHealBeforeEventSignal

Manages callbacks that are connected to when an entity will
be healed.

## Source

```ts
export class EntityHealBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityHealBeforeEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealBeforeEvent) => void;
    unsubscribe(callback: (arg0: EntityHealBeforeEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntityHealBeforeEventSignal**(): `EntityHealBeforeEventSignal`

#### Returns

`EntityHealBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

##### options?

[`EntityHealEventOptions`](../interfaces/EntityHealEventOptions-1.md)

#### Returns

Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an entity will be
healed.

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

Removes a callback from being called when an entity will be
healed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
