[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / ProjectRegionManager

# Class: ProjectRegionManager

## Constructors

### Constructor

> `private` **new ProjectRegionManager**(): `ProjectRegionManager`

#### Returns

`ProjectRegionManager`

## Properties

### isProcessingChunks

> `readonly` **isProcessingChunks**: `boolean`

#### Throws

This property can throw errors.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getChunkProcessingState()

> **getChunkProcessingState**(): [`ProjectRegionManagerChunkProcessingState`](../interfaces/ProjectRegionManagerChunkProcessingState.md) \| `undefined`

#### Returns

[`ProjectRegionManagerChunkProcessingState`](../interfaces/ProjectRegionManagerChunkProcessingState.md) \| `undefined`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### pruneRegion()

> **pruneRegion**(`dimensionId`, `boundsList`): `Promise`\<[`ProjectRegionManagerChunkProcessingState`](../interfaces/ProjectRegionManagerChunkProcessingState.md)\>

#### Parameters

##### dimensionId

`string`

##### boundsList

[`ProjectRegionExtents`](../interfaces/ProjectRegionExtents.md)[]

#### Returns

`Promise`\<[`ProjectRegionManagerChunkProcessingState`](../interfaces/ProjectRegionManagerChunkProcessingState.md)\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### regenerateRegion()

> **regenerateRegion**(`dimensionId`, `boundsList`, `areBoundsExcluded`): `Promise`\<[`ProjectRegionManagerChunkProcessingState`](../interfaces/ProjectRegionManagerChunkProcessingState.md)\>

#### Parameters

##### dimensionId

`string`

##### boundsList

[`ProjectRegionExtents`](../interfaces/ProjectRegionExtents.md)[]

##### areBoundsExcluded

`boolean`

#### Returns

`Promise`\<[`ProjectRegionManagerChunkProcessingState`](../interfaces/ProjectRegionManagerChunkProcessingState.md)\>

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
