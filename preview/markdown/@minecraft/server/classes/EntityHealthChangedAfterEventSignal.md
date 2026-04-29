[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityHealthChangedAfterEventSignal

# Class: EntityHealthChangedAfterEventSignal

Manages callbacks that are connected to when the health of
an entity changes.

## Source

```ts
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHealthChangedAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntityHealthChangedAfterEventSignal**(): `EntityHealthChangedAfterEventSignal`

#### Returns

`EntityHealthChangedAfterEventSignal`

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

Adds a callback that will be called when the health of an
entity changes.

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

Removes a callback from being called when the health of an
entity changes.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
