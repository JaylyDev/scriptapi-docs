[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / SetSpawnEggFunction

# Class: SetSpawnEggFunction

Loot item function that assigns an entity type to a dropped
spawn egg. Does not work on any items other than spawn eggs.

## Source

```ts
export class SetSpawnEggFunction extends LootItemFunction {
    private constructor();
    readonly id: string;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new SetSpawnEggFunction**(): `SetSpawnEggFunction`

#### Returns

`SetSpawnEggFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### id

> `readonly` **id**: `string`

#### Remarks

The entity to be assigned to the dropped egg.

#### World Ready

This property can't be read in early-execution mode.
