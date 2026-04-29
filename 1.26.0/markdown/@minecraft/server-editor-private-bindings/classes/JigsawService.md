[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / JigsawService

# Class: JigsawService

## Constructors

### Constructor

> `private` **new JigsawService**(): `JigsawService`

#### Returns

`JigsawService`

## Methods

### generateJigsaw()

> **generateJigsaw**(`registryName`, `startingPool`, `startTarget`, `seed`, `depth`, `maxHorizontalDistanceFromCenter`, `validateRegistry`, `clipboardItem`): `Promise`\<[`EditorJigsawSection`](../interfaces/EditorJigsawSection.md)[]\>

#### Parameters

##### registryName

`string`

##### startingPool

`string`

##### startTarget

`string`

##### seed

[`Vector3`](../../server/interfaces/Vector3.md)

##### depth

`number`

##### maxHorizontalDistanceFromCenter

`number`

##### validateRegistry

`boolean`

##### clipboardItem

[`ClipboardItem`](ClipboardItem.md)

#### Returns

`Promise`\<[`EditorJigsawSection`](../interfaces/EditorJigsawSection.md)[]\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getEmptyRegistryFiles()

> **getEmptyRegistryFiles**(): `Record`\<`string`, `string`\>

#### Returns

`Record`\<`string`, `string`\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getExportLocation()

> **getExportLocation**(): `string`

#### Returns

`string`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getJigsawBlockData()

> **getJigsawBlockData**(`pos`): [`JigsawBlockData`](../interfaces/JigsawBlockData.md)

#### Parameters

##### pos

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`JigsawBlockData`](../interfaces/JigsawBlockData.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getRegistryData()

> **getRegistryData**(`registryName`): `Record`\<`string`, [`EditorRegistryFile`](../interfaces/EditorRegistryFile.md)[]\>

#### Parameters

##### registryName

`string`

#### Returns

`Record`\<`string`, [`EditorRegistryFile`](../interfaces/EditorRegistryFile.md)[]\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getRegistryList()

> **getRegistryList**(): `string`[]

#### Returns

`string`[]

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setJigsawBlockData()

> **setJigsawBlockData**(`pos`, `jigsawData`): `void`

#### Parameters

##### pos

[`Vector3`](../../server/interfaces/Vector3.md)

##### jigsawData

[`JigsawBlockData`](../interfaces/JigsawBlockData.md)

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setRegistryData()

> **setRegistryData**(`registryName`, `processorData`, `structureData`, `structureSetData`, `templatePoolData`): `Promise`\<`string`[]\>

#### Parameters

##### registryName

`string`

##### processorData

[`EditorRegistryFile`](../interfaces/EditorRegistryFile.md)[]

##### structureData

[`EditorRegistryFile`](../interfaces/EditorRegistryFile.md)[]

##### structureSetData

[`EditorRegistryFile`](../interfaces/EditorRegistryFile.md)[]

##### templatePoolData

[`EditorRegistryFile`](../interfaces/EditorRegistryFile.md)[]

#### Returns

`Promise`\<`string`[]\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
