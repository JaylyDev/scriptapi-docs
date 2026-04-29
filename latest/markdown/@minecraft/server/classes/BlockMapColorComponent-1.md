[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockMapColorComponent

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

- [`BlockComponent`](BlockComponent-1.md)

## Constructors

### Constructor

> `private` **new BlockMapColorComponent**(): `BlockMapColorComponent`

#### Returns

`BlockMapColorComponent`

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

### color

> `readonly` **color**: [`RGBA`](../interfaces/RGBA-1.md)

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

[`BlockComponent`](BlockComponent-1.md).[`isValid`](BlockComponent-1.md#isvalid)

***

### tintedColor

> `readonly` **tintedColor**: [`RGBA`](../interfaces/RGBA-1.md)

#### Remarks

Returns the base color multiplied to the evaluated tint at
the given position.

#### World Ready

This property can't be read in early-execution mode.

***

### tintMethod

> `readonly` **tintMethod**: [`TintMethod`](../enumerations/TintMethod-1.md)

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

[`BlockComponent`](BlockComponent-1.md).[`typeId`](BlockComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:map_color"` = `'minecraft:map_color'`
