[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ItemFoodComponent

# Class: ItemFoodComponent

When present on an item, this item is consumable by
entities. Note that this component only applies to
data-driven items.

## Source

```ts
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    readonly canAlwaysEat: boolean;
    readonly nutrition: number;
    readonly saturationModifier: number;
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}
```

## Extends

- [`ItemComponent`](ItemComponent.md)

## Constructors

### Constructor

> `private` **new ItemFoodComponent**(): `ItemFoodComponent`

#### Returns

`ItemFoodComponent`

#### Overrides

[`ItemComponent`](ItemComponent.md).[`constructor`](ItemComponent.md#constructor)

## Properties

### canAlwaysEat

> `readonly` **canAlwaysEat**: `boolean`

#### Remarks

If true, the player can always eat this item (even when not
hungry).

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

[`ItemComponent`](ItemComponent.md).[`isValid`](ItemComponent.md#isvalid)

***

### nutrition

> `readonly` **nutrition**: `number`

#### Remarks

Represents how much nutrition this food item will give an
entity when eaten.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### saturationModifier

> `readonly` **saturationModifier**: `number`

#### Remarks

When an item is eaten, this value is used according to this
formula (nutrition * saturation_modifier * 2) to apply a
saturation buff.

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

[`ItemComponent`](ItemComponent.md).[`typeId`](ItemComponent.md#typeid)

***

### usingConvertsTo

> `readonly` **usingConvertsTo**: `string`

#### Remarks

When specified, converts the active item to the one
specified by this property.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:food"` = `'minecraft:food'`
