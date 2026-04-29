[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockPrecipitationInteractionsComponent

# Class: BlockPrecipitationInteractionsComponent

Represents a how a block interacts with precipitation (such
as rain or snow).

## Source

```ts
export class BlockPrecipitationInteractionsComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:precipitation_interactions';
    accumulatesSnow(): boolean;
    isSnowLoggable(): boolean;
    obstructsRain(): boolean;
}
```

## Extends

- [`BlockComponent`](BlockComponent-1.md)

## Constructors

### Constructor

> `private` **new BlockPrecipitationInteractionsComponent**(): `BlockPrecipitationInteractionsComponent`

#### Returns

`BlockPrecipitationInteractionsComponent`

#### Overrides

[`BlockComponent`](BlockComponent-1.md).[`constructor`](BlockComponent-1.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

Block instance that this component pertains to.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent-1.md).[`block`](BlockComponent-1.md#block)

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

[`BlockComponent`](BlockComponent-1.md).[`isValid`](BlockComponent-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent-1.md).[`typeId`](BlockComponent-1.md#typeid)

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

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### isSnowLoggable()

> **isSnowLoggable**(): `boolean`

**`Beta`**

#### Returns

`boolean`

#### Remarks

Returns `true` if this block can have snow within it, like a
flower submerged in snow. Returns `false` if this block
cannot have snow within it.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

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

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.
