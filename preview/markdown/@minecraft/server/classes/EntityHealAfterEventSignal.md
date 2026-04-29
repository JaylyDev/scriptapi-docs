[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityHealAfterEventSignal

# Class: EntityHealAfterEventSignal

Manages callbacks that are connected to when an entity is
healed.

## Source

```ts
export class EntityHealAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityHealAfterEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntityHealAfterEventSignal**(): `EntityHealAfterEventSignal`

#### Returns

`EntityHealAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`EntityHealEventOptions`](../interfaces/EntityHealEventOptions.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an entity is
healed.

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

Removes a callback from being called when an entity is
healed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
