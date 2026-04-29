[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityHasMarkVariantCondition

# Class: EntityHasMarkVariantCondition

Loot item condition that checks the value of the mark
variant of a mob as it drops its loot.

## Source

```ts
export class EntityHasMarkVariantCondition extends LootItemCondition {
    private constructor();
    readonly value: number;
}
```

## Extends

- [`LootItemCondition`](LootItemCondition.md)

## Constructors

### Constructor

> `private` **new EntityHasMarkVariantCondition**(): `EntityHasMarkVariantCondition`

#### Returns

`EntityHasMarkVariantCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition.md).[`constructor`](LootItemCondition.md#constructor)

## Properties

### value

> `readonly` **value**: `number`

#### Remarks

The mark variant value the mob must have for this condition
to pass.

#### World Ready

This property can't be read in early-execution mode.
