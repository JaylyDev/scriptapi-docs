[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / EditorStructure

# Class: EditorStructure

## Constructors

### Constructor

> `private` **new EditorStructure**(): `EditorStructure`

#### Returns

`EditorStructure`

## Properties

### description

> `readonly` **description**: `string`

#### Throws

This property can throw when used.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### displayName

> `readonly` **displayName**: `string`

#### Throws

This property can throw when used.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### id

> `readonly` **id**: `string`

***

### isValid

> `readonly` **isValid**: `boolean`

***

### normalizedOrigin

> `readonly` **normalizedOrigin**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Throws

This property can throw when used.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### notes

> `readonly` **notes**: `string`

#### Throws

This property can throw when used.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### offset

> `readonly` **offset**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Throws

This property can throw when used.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### originalWorldLocation

> `readonly` **originalWorldLocation**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Throws

This property can throw when used.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### size

> `readonly` **size**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Throws

This property can throw when used.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### structureFullName

> `readonly` **structureFullName**: `string`

#### Throws

This property can throw when used.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### structureName

> `readonly` **structureName**: `string`

#### Throws

This property can throw when used.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### structureNamespace

> `readonly` **structureNamespace**: `string`

#### Throws

This property can throw when used.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getBlockPermutation()

> **getBlockPermutation**(`location`): [`BlockPermutation`](../../server/classes/BlockPermutation.md) \| `undefined`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`BlockPermutation`](../../server/classes/BlockPermutation.md) \| `undefined`

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getIsWaterlogged()

> **getIsWaterlogged**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`boolean`

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTags()

> **getTags**(): `string`[]

#### Returns

`string`[]

#### Throws

This function can throw errors.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setBlockPermutation()

> **setBlockPermutation**(`location`, `blockPermutation`, `waterlogged?`): `void`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### blockPermutation

[`BlockPermutation`](../../server/classes/BlockPermutation.md)

##### waterlogged?

`boolean`

Defaults to: false

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setTags()

> **setTags**(`tags`): `void`

#### Parameters

##### tags

`string`[]

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftserver.InvalidStructureError](../../server/classes/InvalidStructureError.md)

#### World Ready

This function can't be called in early-execution mode.
