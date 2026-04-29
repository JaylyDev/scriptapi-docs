[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / RealmsService

# Class: RealmsService

## Constructors

### Constructor

> `private` **new RealmsService**(): `RealmsService`

#### Returns

`RealmsService`

## Methods

### beginDownloadFromRealms()

> **beginDownloadFromRealms**(`realmsWorldId`, `slotId`): `Promise`\<`string`\>

#### Parameters

##### realmsWorldId

`string`

##### slotId

`number`

#### Returns

`Promise`\<`string`\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### beginUploadToRealms()

> **beginUploadToRealms**(`realmsWorldId`, `slotId`, `gameOptions`): `Promise`\<[`RealmsWorldUploadResult`](../enumerations/RealmsWorldUploadResult.md)\>

#### Parameters

##### realmsWorldId

`string`

##### slotId

`number`

##### gameOptions

[`GameOptions`](../interfaces/GameOptions.md)

#### Returns

`Promise`\<[`RealmsWorldUploadResult`](../enumerations/RealmsWorldUploadResult.md)\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### canUploadWorld()

> **canUploadWorld**(): `boolean`

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getRealmWorldlist()

> **getRealmWorldlist**(): `Promise`\<[`EditorRealmsWorld`](../interfaces/EditorRealmsWorld.md)[]\>

#### Returns

`Promise`\<[`EditorRealmsWorld`](../interfaces/EditorRealmsWorld.md)[]\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getServiceStatus()

> **getServiceStatus**(): [`RealmsServiceStatus`](../enumerations/RealmsServiceStatus.md)

#### Returns

[`RealmsServiceStatus`](../enumerations/RealmsServiceStatus.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getSlots()

> **getSlots**(`worldId`): `Promise`\<[`EditorRealmsWorldSlot`](../interfaces/EditorRealmsWorldSlot.md)[]\>

#### Parameters

##### worldId

`string`

#### Returns

`Promise`\<[`EditorRealmsWorldSlot`](../interfaces/EditorRealmsWorldSlot.md)[]\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isRealmsServiceAvailable()

> **isRealmsServiceAvailable**(): [`EditorRealmsServiceAvailability`](../enumerations/EditorRealmsServiceAvailability.md)

#### Returns

[`EditorRealmsServiceAvailability`](../enumerations/EditorRealmsServiceAvailability.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.
