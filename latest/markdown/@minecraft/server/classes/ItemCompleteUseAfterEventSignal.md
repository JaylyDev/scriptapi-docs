[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ItemCompleteUseAfterEventSignal

# Class: ItemCompleteUseAfterEventSignal

Manages callbacks that are connected to the completion of
charging for a chargeable item.

## Source

```ts
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ItemCompleteUseAfterEventSignal**(): `ItemCompleteUseAfterEventSignal`

#### Returns

`ItemCompleteUseAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a chargeable item
completes charging.

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

Removes a callback from being called when a chargeable item
completes charging.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
