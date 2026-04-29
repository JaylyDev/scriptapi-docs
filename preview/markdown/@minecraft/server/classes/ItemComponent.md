[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ItemComponent

# Class: ItemComponent

Base class for item components.

## Source

```ts
export class ItemComponent extends Component {
    private constructor();
}
```

## Extends

- [`Component`](Component.md)

## Extended by

- [`ItemBookComponent`](ItemBookComponent.md)
- [`ItemCompostableComponent`](ItemCompostableComponent.md)
- [`ItemCooldownComponent`](ItemCooldownComponent.md)
- [`ItemCustomComponentInstance`](ItemCustomComponentInstance.md)
- [`ItemDurabilityComponent`](ItemDurabilityComponent.md)
- [`ItemDyeableComponent`](ItemDyeableComponent.md)
- [`ItemEnchantableComponent`](ItemEnchantableComponent.md)
- [`ItemFoodComponent`](ItemFoodComponent.md)
- [`ItemInventoryComponent`](ItemInventoryComponent.md)
- [`ItemPotionComponent`](ItemPotionComponent.md)

## Constructors

### Constructor

> `private` **new ItemComponent**(): `ItemComponent`

#### Returns

`ItemComponent`

#### Overrides

[`Component`](Component.md).[`constructor`](Component.md#constructor)

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
