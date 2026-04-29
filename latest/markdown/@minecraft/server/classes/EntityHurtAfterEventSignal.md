[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityHurtAfterEventSignal

# Class: EntityHurtAfterEventSignal

Manages callbacks that are connected to when an entity is
hurt.

## Source

```ts
export class EntityHurtAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityHurtAfterEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntityHurtAfterEventSignal**(): `EntityHurtAfterEventSignal`

#### Returns

`EntityHurtAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`EntityHurtAfterEventOptions`](../interfaces/EntityHurtAfterEventOptions.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an entity is hurt.

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

Removes a callback from being called when an entity is hurt.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
