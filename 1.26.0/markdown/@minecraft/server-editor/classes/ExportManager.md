[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / ExportManager

# Class: ExportManager

## Constructors

### Constructor

> `private` **new ExportManager**(): `ExportManager`

#### Returns

`ExportManager`

## Methods

### beginExportProject()

> **beginExportProject**(`options`): `Promise`\<[`ExportResult`](../enumerations/ExportResult.md)\>

#### Parameters

##### options

[`GameOptions`](../interfaces/GameOptions.md)

#### Returns

`Promise`\<[`ExportResult`](../enumerations/ExportResult.md)\>

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### canExportProject()

> **canExportProject**(): `boolean`

#### Returns

`boolean`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getGameOptions()

> **getGameOptions**(`useDefault?`): [`GameOptions`](../interfaces/GameOptions.md)

#### Parameters

##### useDefault?

`boolean`

#### Returns

[`GameOptions`](../interfaces/GameOptions.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getGameVersion()

> **getGameVersion**(): `string`

#### Returns

`string`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
