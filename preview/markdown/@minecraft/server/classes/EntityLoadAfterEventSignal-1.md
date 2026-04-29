[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityLoadAfterEventSignal

# Class: EntityLoadAfterEventSignal

Registers a script-based event handler for handling what
happens when an entity loads.

## Source

```ts
export class EntityLoadAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntityLoadAfterEventSignal**(): `EntityLoadAfterEventSignal`

#### Returns

`EntityLoadAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

Function that handles the load event.

#### Returns

(`arg0`) => `void`

#### Remarks

Method to register an event handler for what happens when an
entity loads.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

Original function that was passed into the subscribe event,
that is to be unregistered.

#### Returns

`void`

#### Remarks

Unregisters a method that was previously subscribed to the
subscription event.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
