[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityItemPickupAfterEventSignal

# Class: EntityItemPickupAfterEventSignal

Manages callbacks that are connected to when an entity has
picked up items.

## Source

```ts
export class EntityItemPickupAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityItemPickupAfterEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityItemPickupAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntityItemPickupAfterEventSignal**(): `EntityItemPickupAfterEventSignal`

#### Returns

`EntityItemPickupAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`EntityItemPickupEventOptions`](../interfaces/EntityItemPickupEventOptions.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an entity has
picked up items.

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

Removes a callback from being called when an entity has
picked up items.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
