[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / DataTransferManager

# Class: DataTransferManager

## Constructors

### Constructor

> `private` **new DataTransferManager**(): `DataTransferManager`

#### Returns

`DataTransferManager`

## Methods

### changeBiomeMapping()

> **changeBiomeMapping**(`biomeIdentifier`, `collectionUniqueId`, `identifier`): `void`

#### Parameters

##### biomeIdentifier

`string`

##### collectionUniqueId

`string`

##### identifier

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### closeSession()

> **closeSession**(`collectionUniqueId`): `void`

#### Parameters

##### collectionUniqueId

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### createSetting()

> **createSetting**(`collectionUniqueId`, `identifier`, `jsonData`, `lockToBiome`): `Promise`\<[`DataTransferCreateSettingResponse`](DataTransferCreateSettingResponse.md)\>

#### Parameters

##### collectionUniqueId

`string`

##### identifier

`string`

##### jsonData

`string`

##### lockToBiome

`boolean`

#### Returns

`Promise`\<[`DataTransferCreateSettingResponse`](DataTransferCreateSettingResponse.md)\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getRegisteredAccessors()

> **getRegisteredAccessors**(): [`DataTransferCollectionNameData`](../interfaces/DataTransferCollectionNameData.md)[]

#### Returns

[`DataTransferCollectionNameData`](../interfaces/DataTransferCollectionNameData.md)[]

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### openSession()

> **openSession**(`collectionUniqueId`): `void`

#### Parameters

##### collectionUniqueId

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### requestBiomeConfig()

> **requestBiomeConfig**(`biomeIdentifier`): `Promise`\<[`DataTransferBiomeConfigData`](DataTransferBiomeConfigData.md)\>

#### Parameters

##### biomeIdentifier

`string`

#### Returns

`Promise`\<[`DataTransferBiomeConfigData`](DataTransferBiomeConfigData.md)\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### requestData()

> **requestData**(`collectionUniqueId`, `options?`): `Promise`\<[`DataTransferRequestResponse`](DataTransferRequestResponse.md)\>

#### Parameters

##### collectionUniqueId

`string`

##### options?

[`DataTransferRequestDataOptions`](../interfaces/DataTransferRequestDataOptions.md)

#### Returns

`Promise`\<[`DataTransferRequestResponse`](DataTransferRequestResponse.md)\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### requestIdentifiers()

> **requestIdentifiers**(`collectionUniqueId`): `Promise`\<[`DataTransferRequestIdentifiersResponse`](DataTransferRequestIdentifiersResponse.md)\>

#### Parameters

##### collectionUniqueId

`string`

#### Returns

`Promise`\<[`DataTransferRequestIdentifiersResponse`](DataTransferRequestIdentifiersResponse.md)\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### sendData()

> **sendData**(`collectionUniqueId`, `jsonData`, `options?`): `void`

#### Parameters

##### collectionUniqueId

`string`

##### jsonData

`string`

##### options?

[`DataTransferSendDataOptions`](../interfaces/DataTransferSendDataOptions.md)

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### sendDataToClipboard()

> **sendDataToClipboard**(`jsonData`): `void`

#### Parameters

##### jsonData

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
