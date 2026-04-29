[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / FillContainerFunction

# Class: FillContainerFunction

Loot item function that populates a dropped container item
using another loot table.

## Source

```ts
export class FillContainerFunction extends LootItemFunction {
    private constructor();
    readonly lootTable: string;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new FillContainerFunction**(): `FillContainerFunction`

#### Returns

`FillContainerFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### lootTable

> `readonly` **lootTable**: `string`

#### Remarks

The path to the loot table with which the container will be
filled.

#### World Ready

This property can't be read in early-execution mode.
