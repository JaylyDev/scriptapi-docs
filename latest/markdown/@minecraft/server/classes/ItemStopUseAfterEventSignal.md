[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ItemStopUseAfterEventSignal

# Class: ItemStopUseAfterEventSignal

Manages callbacks that are connected to the stopping of
charging for an item that has a registered
minecraft:chargeable component.

## Source

```ts
export class ItemStopUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ItemStopUseAfterEventSignal**(): `ItemStopUseAfterEventSignal`

#### Returns

`ItemStopUseAfterEventSignal`

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
stops charging.

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
stops charging.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
