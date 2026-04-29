[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerInventoryItemChangeAfterEventSignal

# Class: PlayerInventoryItemChangeAfterEventSignal

Manages callbacks that are connected after a player's
inventory item is changed.

## Source

```ts
export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void,
        options?: InventoryItemEventOptions,
    ): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerInventoryItemChangeAfterEventSignal**(): `PlayerInventoryItemChangeAfterEventSignal`

#### Returns

`PlayerInventoryItemChangeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

Function callback that is called when this event fires.

##### options?

[`InventoryItemEventOptions`](../interfaces/InventoryItemEventOptions-1.md)

Additional filtering options for the event subscription.

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after a player's
inventory item is changed.

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

Removes a callback from being called after a player's
inventory item is changed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
