[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ScriptEventCommandMessageAfterEventSignal

# Class: ScriptEventCommandMessageAfterEventSignal

Allows for registering an event handler that responds to
inbound /scriptevent commands.

## Source

```ts
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg0: ScriptEventCommandMessageAfterEvent) => void;
    unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ScriptEventCommandMessageAfterEventSignal**(): `ScriptEventCommandMessageAfterEventSignal`

#### Returns

`ScriptEventCommandMessageAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`ScriptEventMessageFilterOptions`](../interfaces/ScriptEventMessageFilterOptions-1.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Registers a new ScriptEvent handler.

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

Unsubscribes a particular handler for a ScriptEvent event.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
