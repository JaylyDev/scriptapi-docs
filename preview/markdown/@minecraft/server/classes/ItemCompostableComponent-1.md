[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemCompostableComponent

# Class: ItemCompostableComponent

When present, the item can be composted in the composter
block if the composting chance is in the range [1 - 100].

## Source

```ts
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}
```

## Extends

- [`ItemComponent`](ItemComponent-1.md)

## Constructors

### Constructor

> `private` **new ItemCompostableComponent**(): `ItemCompostableComponent`

#### Returns

`ItemCompostableComponent`

#### Overrides

[`ItemComponent`](ItemComponent-1.md).[`constructor`](ItemComponent-1.md#constructor)

## Properties

### compostingChance

> `readonly` **compostingChance**: `number`

#### Remarks

This is the percent chance of the item composting in the
composter block and generating a compost layer. Note this
api will also return the composting chance for vanilla items
that are compostable but do not use the compostable item
component.

#### Throws

Throws if value outside the range [1 - 100]

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

[`ItemComponent`](ItemComponent-1.md).[`isValid`](ItemComponent-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemComponent`](ItemComponent-1.md).[`typeId`](ItemComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:compostable"` = `'minecraft:compostable'`
