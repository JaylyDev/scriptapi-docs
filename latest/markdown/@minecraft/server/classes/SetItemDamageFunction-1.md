[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / SetItemDamageFunction

# Class: SetItemDamageFunction

Loot item function that modifies the durability value of the
item dropped.

## Source

```ts
export class SetItemDamageFunction extends LootItemFunction {
    private constructor();
    readonly damage: minecraftcommon.NumberRange;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new SetItemDamageFunction**(): `SetItemDamageFunction`

#### Returns

`SetItemDamageFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### damage

> `readonly` **damage**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The value range from which the function randomly chooses the
durability value to assign. Contains minimum and maximum
values. Must always be between 0.0 and 1.0.

#### World Ready

This property can't be read in early-execution mode.
