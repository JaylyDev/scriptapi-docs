[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ItemUseBeforeEventSignal

# Class: ItemUseBeforeEventSignal

Manages callbacks that fire before an item is used.

## Constructors

### Constructor

> `private` **new ItemUseBeforeEventSignal**(): `ItemUseBeforeEventSignal`

#### Returns

`ItemUseBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

#### Returns

Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called before an item is used.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

#### Returns

`void`

#### Remarks

Removes a callback from being called before an item is used.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
