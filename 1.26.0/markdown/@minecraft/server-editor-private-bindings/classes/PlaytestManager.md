[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / PlaytestManager

# Class: PlaytestManager

## Constructors

### Constructor

> `private` **new PlaytestManager**(): `PlaytestManager`

#### Returns

`PlaytestManager`

## Methods

### beginPlaytest()

> **beginPlaytest**(`options`): `Promise`\<[`PlaytestSessionResult`](../enumerations/PlaytestSessionResult.md)\>

#### Parameters

##### options

[`GameOptions`](../interfaces/GameOptions.md)

#### Returns

`Promise`\<[`PlaytestSessionResult`](../enumerations/PlaytestSessionResult.md)\>

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getPlaytestSessionAvailability()

> **getPlaytestSessionAvailability**(): [`PlaytestSessionResult`](../enumerations/PlaytestSessionResult.md)

#### Returns

[`PlaytestSessionResult`](../enumerations/PlaytestSessionResult.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
