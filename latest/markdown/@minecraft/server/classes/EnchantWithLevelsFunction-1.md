[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EnchantWithLevelsFunction

# Class: EnchantWithLevelsFunction

Loot item function that applies a random enchant to the
dropped item.

## Source

```ts
export class EnchantWithLevelsFunction extends LootItemFunction {
    private constructor();
    readonly levels: minecraftcommon.NumberRange;
    readonly treasure: boolean;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new EnchantWithLevelsFunction**(): `EnchantWithLevelsFunction`

#### Returns

`EnchantWithLevelsFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### levels

> `readonly` **levels**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The value range from which the function randomly chooses the
level of enchantment to apply. Contains minimum and maximum
values.

#### World Ready

This property can't be read in early-execution mode.

***

### treasure

> `readonly` **treasure**: `boolean`

#### Remarks

Value that determines whether or not treasure enchants
should be included in the random enchant selection.

#### World Ready

This property can't be read in early-execution mode.
