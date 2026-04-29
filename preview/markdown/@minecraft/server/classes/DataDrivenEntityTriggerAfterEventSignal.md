[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / DataDrivenEntityTriggerAfterEventSignal

# Class: DataDrivenEntityTriggerAfterEventSignal

Contains event registration related to firing of a data
driven entity event - for example, the
minecraft:ageable_grow_up event on a chicken.

## Source

```ts
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new DataDrivenEntityTriggerAfterEventSignal**(): `DataDrivenEntityTriggerAfterEventSignal`

#### Returns

`DataDrivenEntityTriggerAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`EntityDataDrivenTriggerEventOptions`](../interfaces/EntityDataDrivenTriggerEventOptions.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after a data driven
entity event is triggered.

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

Removes a callback that will be called after a data driven
entity event is triggered.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
