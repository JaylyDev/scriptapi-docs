[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / BlockPrecipitationInteractionsComponent

# Class: BlockPrecipitationInteractionsComponent

Represents a how a block interacts with precipitation (such
as rain or snow).

## Extends

- [`BlockComponent`](BlockComponent.md)

## Constructors

### Constructor

> `private` **new BlockPrecipitationInteractionsComponent**(): `BlockPrecipitationInteractionsComponent`

#### Returns

`BlockPrecipitationInteractionsComponent`

#### Overrides

[`BlockComponent`](BlockComponent.md).[`constructor`](BlockComponent.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

Block instance that this component pertains to.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent.md).[`block`](BlockComponent.md#block)

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent.md).[`isValid`](BlockComponent.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent.md).[`typeId`](BlockComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:precipitation_interactions"` = `'minecraft:precipitation_interactions'`

## Methods

### accumulatesSnow()

> **accumulatesSnow**(): `boolean`

#### Returns

`boolean`

#### Remarks

Returns `true` if falling snow will accumulate naturally on
the block. Returns `false` if snow will not accumulate on
the block.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### obstructsRain()

> **obstructsRain**(): `boolean`

#### Returns

`boolean`

#### Remarks

Returns `true` if rain will not go through the block.
Returns `false` if rain should go through the block.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError.md)

#### World Ready

This function can't be called in early-execution mode.
