[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / Enchantment

# Interface: Enchantment

This interface represents a specific leveled enchantment
that is applied to an item.

## Source

```ts
export interface Enchantment {
    level: number;
    type: EnchantmentType;
}
```

## Properties

### level

> **level**: `number`

#### Remarks

The level of this enchantment instance.

***

### type

> **type**: [`EnchantmentType`](../classes/EnchantmentType.md)

#### Remarks

The enchantment type of this instance.
