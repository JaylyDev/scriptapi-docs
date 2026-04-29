[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityColor2Component

# Class: EntityColor2Component

Defines the entity's secondary color. Only works on certain
entities that have secondary predefined color values (e.g.,
tropical fish).

## Source

```ts
export class EntityColor2Component extends EntityComponent {
    private constructor();
    readonly value: PaletteColor;
    static readonly componentId = 'minecraft:color2';
}
```

## Extends

- [`EntityComponent`](EntityComponent.md)

## Constructors

### Constructor

> `private` **new EntityColor2Component**(): `EntityColor2Component`

#### Returns

`EntityColor2Component`

#### Overrides

[`EntityComponent`](EntityComponent.md).[`constructor`](EntityComponent.md#constructor)

## Properties

### entity

> `readonly` **entity**: [`Entity`](Entity.md)

#### Remarks

The entity that owns this component. The entity will be
undefined if it has been removed.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent.md).[`entity`](EntityComponent.md#entity)

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

[`EntityComponent`](EntityComponent.md).[`isValid`](EntityComponent.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent.md).[`typeId`](EntityComponent.md#typeid)

***

### value

> `readonly` **value**: [`PaletteColor`](../enumerations/PaletteColor.md)

#### Remarks

Value of this particular color.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:color2"` = `'minecraft:color2'`
