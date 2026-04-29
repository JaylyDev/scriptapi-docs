[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / ProjectRegion

# Class: ProjectRegion

## Constructors

### Constructor

> `private` **new ProjectRegion**(): `ProjectRegion`

#### Returns

`ProjectRegion`

## Properties

### availabilityMode

> `readonly` **availabilityMode**: [`ProjectRegionAvailabilityMode`](../enumerations/ProjectRegionAvailabilityMode.md)

#### Throws

This property can throw errors.

#### World Ready

This property can't be read in early-execution mode.

***

### id

> `readonly` **id**: `string`

***

### isValid

> `readonly` **isValid**: `boolean`

## Methods

### dispose()

> **dispose**(): `boolean`

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getAvailableLocationFromRay()

> **getAvailableLocationFromRay**(`location`, `direction`, `options?`): [`Vector3`](../../server/interfaces/Vector3.md) \| `undefined`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### direction

[`Vector3`](../../server/interfaces/Vector3.md)

##### options?

[`BlockRaycastOptions`](../../server/interfaces/BlockRaycastOptions.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md) \| `undefined`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlock()

> **getBlock**(`location`): [`Block`](../../server/classes/Block.md) \| `undefined`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Block`](../../server/classes/Block.md) \| `undefined`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockMapColor()

> **getBlockMapColor**(`location`): [`RGBA`](../../server/interfaces/RGBA.md)

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`RGBA`](../../server/interfaces/RGBA.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockPermutation()

> **getBlockPermutation**(`location`): [`BlockPermutation`](../../server/classes/BlockPermutation.md)

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`BlockPermutation`](../../server/classes/BlockPermutation.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockTypeId()

> **getBlockTypeId**(`location`): `string`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`string`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBounds()

> **getBounds**(): [`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Returns

[`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isAirBlock()

> **isAirBlock**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isAreaAvailable()

> **isAreaAvailable**(`boundingBox`): `boolean`

#### Parameters

##### boundingBox

[`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isAvailable()

> **isAvailable**(): `boolean`

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isBlockWaterLogged()

> **isBlockWaterLogged**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isLiquidBlock()

> **isLiquidBlock**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isLocationAvailable()

> **isLocationAvailable**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isSolidBlock()

> **isSolidBlock**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### requestBlockOperationArea()

> **requestBlockOperationArea**(`volume`, `callback`): `Promise`\<`void`\>

#### Parameters

##### volume

[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

##### callback

(`arg0`) => `void`

#### Returns

`Promise`\<`void`\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### requestExpandToContain()

> **requestExpandToContain**(`extentX`, `extentZ`): `Promise`\<`void`\>

#### Parameters

##### extentX

[`NumberRange`](../../common/interfaces/NumberRange.md)

##### extentZ

[`NumberRange`](../../common/interfaces/NumberRange.md)

#### Returns

`Promise`\<`void`\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### requestExtentsUpdate()

> **requestExtentsUpdate**(`extentX`, `extentZ`): `Promise`\<`void`\>

#### Parameters

##### extentX

[`NumberRange`](../../common/interfaces/NumberRange.md)

##### extentZ

[`NumberRange`](../../common/interfaces/NumberRange.md)

#### Returns

`Promise`\<`void`\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### requestMove()

> **requestMove**(`center`): `Promise`\<`void`\>

#### Parameters

##### center

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`Promise`\<`void`\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setBlockType()

> **setBlockType**(`location`, `blockType`): `void`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### blockType

`string` \| [`BlockType`](../../server/classes/BlockType.md)

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

### setBlockWaterlogged()

> **setBlockWaterlogged**(`location`, `isWaterlogged`): `void`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### isWaterlogged

`boolean`

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

### spawnEntity()

> **spawnEntity**(`identifier`, `location`, `rotation?`): [`Entity`](../../server/classes/Entity.md)

#### Parameters

##### identifier

`string` \| [`EntityType`](../../server/classes/EntityType.md)

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### rotation?

`number`

#### Returns

[`Entity`](../../server/classes/Entity.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[minecraftserver.EntitySpawnError](../../server/classes/EntitySpawnError.md)

Error

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### waitUntilAvailable()

> **waitUntilAvailable**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### waitUntilBoundsAvailable()

> **waitUntilBoundsAvailable**(`boundingBox`): `Promise`\<`void`\>

#### Parameters

##### boundingBox

[`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Returns

`Promise`\<`void`\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
