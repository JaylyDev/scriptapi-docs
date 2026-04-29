[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemComponent

# Class: ItemComponent

Base class for item components.

## Source

```ts
export class ItemComponent extends Component {
    private constructor();
}
```

## Extends

- [`Component`](Component-1.md)

## Extended by

- [`ItemBookComponent`](ItemBookComponent-1.md)
- [`ItemCompostableComponent`](ItemCompostableComponent-1.md)
- [`ItemCooldownComponent`](ItemCooldownComponent-1.md)
- [`ItemCustomComponentInstance`](ItemCustomComponentInstance-1.md)
- [`ItemDurabilityComponent`](ItemDurabilityComponent-1.md)
- [`ItemDyeableComponent`](ItemDyeableComponent-1.md)
- [`ItemEnchantableComponent`](ItemEnchantableComponent-1.md)
- [`ItemFoodComponent`](ItemFoodComponent-1.md)
- [`ItemInventoryComponent`](ItemInventoryComponent-1.md)
- [`ItemPotionComponent`](ItemPotionComponent-1.md)

## Constructors

### Constructor

> `private` **new ItemComponent**(): `ItemComponent`

#### Returns

`ItemComponent`

#### Overrides

[`Component`](Component-1.md).[`constructor`](Component-1.md#constructor)

## Properties

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
