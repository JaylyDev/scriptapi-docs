[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemReleaseUseAfterEventSignal

# Class: ItemReleaseUseAfterEventSignal

Manages callbacks that are connected to the releasing of
charging for a chargeable item.

## Constructors

### Constructor

> `private` **new ItemReleaseUseAfterEventSignal**(): `ItemReleaseUseAfterEventSignal`

#### Returns

`ItemReleaseUseAfterEventSignal`

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
is released from charging.

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
is released from charging.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
