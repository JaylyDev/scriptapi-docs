[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityContainerClosedAfterEventSignal

# Class: EntityContainerClosedAfterEventSignal

**`Beta`**

Manages callbacks that are connected to when an entity
container is closed.

## Source

```ts
export class EntityContainerClosedAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityContainerClosedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerClosedAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntityContainerClosedAfterEventSignal**(): `EntityContainerClosedAfterEventSignal`

#### Returns

`EntityContainerClosedAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`EntityContainerAccessEventOptions`](../interfaces/EntityContainerAccessEventOptions.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an entity container
is closed.

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

Removes a callback from being called when an entity
container is closed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
