[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ExplorationMapFunction

# Class: ExplorationMapFunction

Loot item function that modifies a dropped treasure map to
mark a location.

## Source

```ts
export class ExplorationMapFunction extends LootItemFunction {
    private constructor();
    readonly destination: string;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new ExplorationMapFunction**(): `ExplorationMapFunction`

#### Returns

`ExplorationMapFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### destination

> `readonly` **destination**: `string`

#### Remarks

Determines which type of treasure map will drop.

#### World Ready

This property can't be read in early-execution mode.
