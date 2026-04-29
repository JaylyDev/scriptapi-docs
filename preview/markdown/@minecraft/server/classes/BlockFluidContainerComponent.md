[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockFluidContainerComponent

# Class: BlockFluidContainerComponent

Represents the fluid container of a block in the world. Used
with blocks like cauldrons.

## Source

```ts
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    fillLevel: number;
    fluidColor: RGBA;
    static readonly componentId = 'minecraft:fluid_container';
    addDye(dye: ItemType): void;
    getFluidType(): FluidType;
    setFluidType(fluidType: FluidType): void;
    setPotion(itemStack: ItemStack): void;
}
```

## Extends

- [`BlockComponent`](BlockComponent.md)

## Constructors

### Constructor

> `private` **new BlockFluidContainerComponent**(): `BlockFluidContainerComponent`

#### Returns

`BlockFluidContainerComponent`

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

### fillLevel

> **fillLevel**: `number`

#### Remarks

Relative fill level of the fluid container.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### fluidColor

> **fluidColor**: [`RGBA`](../interfaces/RGBA.md)

#### Remarks

Custom color of the fluid in the container.

This property can't be edited in restricted-execution mode.

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

> `readonly` `static` **componentId**: `"minecraft:fluid_container"` = `'minecraft:fluid_container'`

## Methods

### addDye()

> **addDye**(`dye`): `void`

#### Parameters

##### dye

[`ItemType`](ItemType.md)

#### Returns

`void`

#### Remarks

Adds a dye to the fluid. The dye color is combined with any
existing custom color.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getFluidType()

> **getFluidType**(): [`FluidType`](../enumerations/FluidType.md)

#### Returns

[`FluidType`](../enumerations/FluidType.md)

#### Remarks

Gets the current fluid type in the container.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setFluidType()

> **setFluidType**(`fluidType`): `void`

#### Parameters

##### fluidType

[`FluidType`](../enumerations/FluidType.md)

#### Returns

`void`

#### Remarks

Sets the current fluid type in the container.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setPotion()

> **setPotion**(`itemStack`): `void`

#### Parameters

##### itemStack

[`ItemStack`](ItemStack.md)

#### Returns

`void`

#### Remarks

Sets a potion item in the container. Changes the container's
fluid type to potion.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
