[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerHotbarSelectedSlotChangeAfterEventSignal

# Class: PlayerHotbarSelectedSlotChangeAfterEventSignal

Manages callbacks that are connected after a player selected
hotbar slot is changed.

## Constructors

### Constructor

> `private` **new PlayerHotbarSelectedSlotChangeAfterEventSignal**(): `PlayerHotbarSelectedSlotChangeAfterEventSignal`

#### Returns

`PlayerHotbarSelectedSlotChangeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

Function callback that is called when this event fires.

##### options?

[`HotbarEventOptions`](../interfaces/HotbarEventOptions.md)

Additional filtering options for the event subscription.

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after a player selected
hotbar slot is changed.

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

Removes a callback from being called after a player selected
hotbar slot is changed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
