[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityHasVariantCondition

# Class: EntityHasVariantCondition

Loot item condition that checks the variant value of a mob
as it drops its loot.

## Source

```ts
export class EntityHasVariantCondition extends LootItemCondition {
    private constructor();
    readonly value: number;
}
```

## Extends

- [`LootItemCondition`](LootItemCondition.md)

## Constructors

### Constructor

> `private` **new EntityHasVariantCondition**(): `EntityHasVariantCondition`

#### Returns

`EntityHasVariantCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition.md).[`constructor`](LootItemCondition.md#constructor)

## Properties

### value

> `readonly` **value**: `number`

#### Remarks

The variant value the mob must have for this condition to
pass.

#### World Ready

This property can't be read in early-execution mode.
