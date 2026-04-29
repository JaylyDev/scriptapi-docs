[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityDieAfterEventSignal

# Class: EntityDieAfterEventSignal

Supports registering for an event that fires after an entity
has died.

## Source

```ts
export class EntityDieAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntityDieAfterEventSignal**(): `EntityDieAfterEventSignal`

#### Returns

`EntityDieAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

Function to call when an entity dies.

##### options?

[`EntityEventOptions`](../interfaces/EntityEventOptions.md)

Additional filtering options for when the subscription
fires.

#### Returns

Returns the closure that can be used in future downstream
calls to unsubscribe.

(`arg0`) => `void`

#### Remarks

Subscribes to an event that fires when an entity dies.

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

Stops this event from calling your function when an entity
dies.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
