[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / SetStewEffectFunction

# Class: SetStewEffectFunction

Loot item function that modifies the effects of a dropped
stew item.

## Source

```ts
export class SetStewEffectFunction extends LootItemFunction {
    private constructor();
    readonly effects: number[];
}
```

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetStewEffectFunction**(): `SetStewEffectFunction`

#### Returns

`SetStewEffectFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### effects

> `readonly` **effects**: `number`[]

#### Remarks

An array of integers corresponding to stew effects to be
randomly chosen from and applied to the dropped item.

#### World Ready

This property can't be read in early-execution mode.
