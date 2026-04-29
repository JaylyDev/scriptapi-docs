[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityKilledCondition

# Class: EntityKilledCondition

Loot item condition that checks the entity type of the
entity dropping its loot.

## Source

```ts
export class EntityKilledCondition extends LootItemCondition {
    private constructor();
    readonly entityType: string;
}
```

## Extends

- [`LootItemCondition`](LootItemCondition-1.md)

## Constructors

### Constructor

> `private` **new EntityKilledCondition**(): `EntityKilledCondition`

#### Returns

`EntityKilledCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition-1.md).[`constructor`](LootItemCondition-1.md#constructor)

## Properties

### entityType

> `readonly` **entityType**: `string`

#### Remarks

The entity type required for this condition to pass.
Example: 'minecraft:skeleton'.

#### World Ready

This property can't be read in early-execution mode.
