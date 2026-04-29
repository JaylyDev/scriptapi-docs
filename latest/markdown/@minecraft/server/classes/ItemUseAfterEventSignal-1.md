[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemUseAfterEventSignal

# Class: ItemUseAfterEventSignal

Manages callbacks that are connected to an item use event.

## Source

```ts
export class ItemUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ItemUseAfterEventSignal**(): `ItemUseAfterEventSignal`

#### Returns

`ItemUseAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an item is used.

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

Removes a callback from being called when an item is used.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
