[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / SetItemDataFunction

# Class: SetItemDataFunction

Loot item function that modifies the data value of the item
dropped.

## Source

```ts
export class SetItemDataFunction extends LootItemFunction {
    private constructor();
    readonly data: minecraftcommon.NumberRange;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetItemDataFunction**(): `SetItemDataFunction`

#### Returns

`SetItemDataFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### data

> `readonly` **data**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The value range from which the function randomly chooses the
data value to assign. Contains minimum and maximum values.

#### World Ready

This property can't be read in early-execution mode.
