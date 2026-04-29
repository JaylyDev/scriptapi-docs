[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ItemInventoryComponent

# Class: ItemInventoryComponent

This component is added to items with the `Storage Item`
component. Can access and modify this items inventory
container.

## Extends

- [`ItemComponent`](ItemComponent.md)

## Constructors

### Constructor

> `private` **new ItemInventoryComponent**(): `ItemInventoryComponent`

#### Returns

`ItemInventoryComponent`

#### Overrides

[`ItemComponent`](ItemComponent.md).[`constructor`](ItemComponent.md#constructor)

## Properties

### container

> `readonly` **container**: [`Container`](Container.md)

#### Throws

This property can throw when used.

[InvalidContainerError](InvalidContainerError.md)

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

[`ItemComponent`](ItemComponent.md).[`isValid`](ItemComponent.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemComponent`](ItemComponent.md).[`typeId`](ItemComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:inventory"` = `'minecraft:inventory'`
