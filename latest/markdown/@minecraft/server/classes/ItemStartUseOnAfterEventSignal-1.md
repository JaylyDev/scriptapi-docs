[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemStartUseOnAfterEventSignal

# Class: ItemStartUseOnAfterEventSignal

Manages callbacks that are connected to an item starting
being used on a block event.

## Source

```ts
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ItemStartUseOnAfterEventSignal**(): `ItemStartUseOnAfterEventSignal`

#### Returns

`ItemStartUseOnAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an item is used on
a block.

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

Removes a callback from being called when an item is used on
a block.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
