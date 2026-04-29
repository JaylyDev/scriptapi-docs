[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / RandomAuxValueFunction

# Class: RandomAuxValueFunction

Loot item function that randomly modifies the data value of
the item dropped.

## Source

```ts
export class RandomAuxValueFunction extends LootItemFunction {
    private constructor();
    readonly values: minecraftcommon.NumberRange;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new RandomAuxValueFunction**(): `RandomAuxValueFunction`

#### Returns

`RandomAuxValueFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### values

> `readonly` **values**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The value range from which the function randomly chooses the
data value to assign. Contains minimum and maximum values.

#### World Ready

This property can't be read in early-execution mode.
