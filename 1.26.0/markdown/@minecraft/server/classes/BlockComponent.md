[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / BlockComponent

# Class: BlockComponent

Base type for components associated with blocks.

## Extends

- [`Component`](Component.md)

## Extended by

- [`BlockCustomComponentInstance`](BlockCustomComponentInstance.md)
- [`BlockFluidContainerComponent`](BlockFluidContainerComponent.md)
- [`BlockInventoryComponent`](BlockInventoryComponent.md)
- [`BlockMapColorComponent`](BlockMapColorComponent.md)
- [`BlockMovableComponent`](BlockMovableComponent.md)
- [`BlockPistonComponent`](BlockPistonComponent.md)
- [`BlockPrecipitationInteractionsComponent`](BlockPrecipitationInteractionsComponent.md)
- [`BlockRecordPlayerComponent`](BlockRecordPlayerComponent.md)
- [`BlockRedstoneProducerComponent`](BlockRedstoneProducerComponent.md)
- [`BlockSignComponent`](BlockSignComponent.md)

## Constructors

### Constructor

> `private` **new BlockComponent**(): `BlockComponent`

#### Returns

`BlockComponent`

#### Overrides

[`Component`](Component.md).[`constructor`](Component.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

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

[`Component`](Component.md).[`isValid`](Component.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Component`](Component.md).[`typeId`](Component.md#typeid)
