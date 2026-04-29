[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockMapColorComponent

# Class: BlockMapColorComponent

Represents the color of a block when displayed on a map.

## Source

```ts
export class BlockMapColorComponent extends BlockComponent {
    private constructor();
    readonly color: RGBA;
    readonly tintedColor: RGBA;
    readonly tintMethod: TintMethod;
    static readonly componentId = 'minecraft:map_color';
}
```

## Extends

- [`BlockComponent`](BlockComponent.md)

## Constructors

### Constructor

> `private` **new BlockMapColorComponent**(): `BlockMapColorComponent`

#### Returns

`BlockMapColorComponent`

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

### color

> `readonly` **color**: [`RGBA`](../interfaces/RGBA.md)

#### Remarks

Base map color defined for that block.

#### Throws

This property can throw when used.

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

### tintedColor

> `readonly` **tintedColor**: [`RGBA`](../interfaces/RGBA.md)

#### Remarks

Returns the base color multiplied to the evaluated tint at
the given position.

#### World Ready

This property can't be read in early-execution mode.

***

### tintMethod

> `readonly` **tintMethod**: [`TintMethod`](../enumerations/TintMethod.md)

#### Remarks

Type of tint applied to the color.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

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

> `readonly` `static` **componentId**: `"minecraft:map_color"` = `'minecraft:map_color'`
