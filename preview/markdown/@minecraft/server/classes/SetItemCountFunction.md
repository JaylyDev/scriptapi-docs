[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / SetItemCountFunction

# Class: SetItemCountFunction

Loot item function that modifies the number items that drop
from the loot pool entry.

## Source

```ts
export class SetItemCountFunction extends LootItemFunction {
    private constructor();
    readonly count: minecraftcommon.NumberRange;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetItemCountFunction**(): `SetItemCountFunction`

#### Returns

`SetItemCountFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### count

> `readonly` **count**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The value range from which the function randomly chooses the
number of items to drop. Contains minimum and maximum
values.

#### World Ready

This property can't be read in early-execution mode.
