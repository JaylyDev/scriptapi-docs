[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / FillContainerFunction

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

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new FillContainerFunction**(): `FillContainerFunction`

#### Returns

`FillContainerFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### lootTable

> `readonly` **lootTable**: `string`

#### Remarks

The path to the loot table with which the container will be
filled.

#### World Ready

This property can't be read in early-execution mode.
