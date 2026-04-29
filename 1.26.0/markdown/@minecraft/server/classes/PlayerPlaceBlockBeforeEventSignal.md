[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerPlaceBlockBeforeEventSignal

# Class: PlayerPlaceBlockBeforeEventSignal

**`Beta`**

Manages callbacks that are connected to before a block is
placed by a player.

## Constructors

### Constructor

> `private` **new PlayerPlaceBlockBeforeEventSignal**(): `PlayerPlaceBlockBeforeEventSignal`

#### Returns

`PlayerPlaceBlockBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

##### options?

[`BlockEventOptions`](../interfaces/BlockEventOptions-1.md)

#### Returns

Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called before a block is placed
by a player.

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

Removes a callback from being called before an block is
placed by a player.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
