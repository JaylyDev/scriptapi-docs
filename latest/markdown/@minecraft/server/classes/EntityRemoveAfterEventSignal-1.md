[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityRemoveAfterEventSignal

# Class: EntityRemoveAfterEventSignal

Allows registration for an event that fires when an entity
is removed from  the game (for example, unloaded, or a few
seconds after they are dead.)

## Source

```ts
export class EntityRemoveAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntityRemoveAfterEventSignal**(): `EntityRemoveAfterEventSignal`

#### Returns

`EntityRemoveAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

Function to call.

##### options?

[`EntityEventOptions`](../interfaces/EntityEventOptions-1.md)

Additional filtering options for this event.

#### Returns

Returns a closure that can be used in subsequent unsubscribe
operations.

(`arg0`) => `void`

#### Remarks

Will call your function every time an entity is removed from
the game.

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

Unsubscribes your function from subsequent calls when an
entity is removed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
