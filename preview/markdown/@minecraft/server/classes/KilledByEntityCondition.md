[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / KilledByEntityCondition

# Class: KilledByEntityCondition

Loot item condition that checks whether or not the drop
source was killed by a specific type of entity.

## Source

```ts
export class KilledByEntityCondition extends LootItemCondition {
    private constructor();
    readonly entityType: string;
}
```

## Extends

- [`LootItemCondition`](LootItemCondition.md)

## Constructors

### Constructor

> `private` **new KilledByEntityCondition**(): `KilledByEntityCondition`

#### Returns

`KilledByEntityCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition.md).[`constructor`](LootItemCondition.md#constructor)

## Properties

### entityType

> `readonly` **entityType**: `string`

#### Remarks

The entity type required for this condition to pass.
Example: 'minecraft:skeleton'.

#### World Ready

This property can't be read in early-execution mode.
