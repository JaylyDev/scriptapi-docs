[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityHitBlockAfterEventSignal

# Class: EntityHitBlockAfterEventSignal

Manages callbacks that are connected to when an entity hits
a block.

## Source

```ts
export class EntityHitBlockAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitBlockAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntityHitBlockAfterEventSignal**(): `EntityHitBlockAfterEventSignal`

#### Returns

`EntityHitBlockAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`EntityEventOptions`](../interfaces/EntityEventOptions.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an entity hits a
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

Removes a callback from being called when an entity hits a
block.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
