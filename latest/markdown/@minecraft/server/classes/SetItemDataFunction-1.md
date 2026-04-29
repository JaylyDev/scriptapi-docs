[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / SetItemDataFunction

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

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new SetItemDataFunction**(): `SetItemDataFunction`

#### Returns

`SetItemDataFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### data

> `readonly` **data**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The value range from which the function randomly chooses the
data value to assign. Contains minimum and maximum values.

#### World Ready

This property can't be read in early-execution mode.
