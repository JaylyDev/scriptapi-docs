[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockComponent

# Class: BlockComponent

Base type for components associated with blocks.

## Extends

- [`Component`](Component-1.md)

## Extended by

- [`BlockCustomComponentInstance`](BlockCustomComponentInstance-1.md)
- [`BlockFluidContainerComponent`](BlockFluidContainerComponent-1.md)
- [`BlockInventoryComponent`](BlockInventoryComponent-1.md)
- [`BlockMapColorComponent`](BlockMapColorComponent-1.md)
- [`BlockMovableComponent`](BlockMovableComponent-1.md)
- [`BlockPistonComponent`](BlockPistonComponent-1.md)
- [`BlockPrecipitationInteractionsComponent`](BlockPrecipitationInteractionsComponent-1.md)
- [`BlockRecordPlayerComponent`](BlockRecordPlayerComponent-1.md)
- [`BlockRedstoneProducerComponent`](BlockRedstoneProducerComponent-1.md)
- [`BlockSignComponent`](BlockSignComponent-1.md)

## Constructors

### Constructor

> `private` **new BlockComponent**(): `BlockComponent`

#### Returns

`BlockComponent`

#### Overrides

[`Component`](Component-1.md).[`constructor`](Component-1.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

Block instance that this component pertains to.

#### World Ready

This property can't be read in early-execution mode.

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

[`Component`](Component-1.md).[`isValid`](Component-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Component`](Component-1.md).[`typeId`](Component-1.md#typeid)
