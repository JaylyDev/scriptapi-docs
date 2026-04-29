[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / SetArmorTrimFunction

# Class: SetArmorTrimFunction

Loot item function that modifies the trim on a dropped armor
item.

## Source

```ts
export class SetArmorTrimFunction extends LootItemFunction {
    private constructor();
    readonly material: string;
    readonly pattern: string;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetArmorTrimFunction**(): `SetArmorTrimFunction`

#### Returns

`SetArmorTrimFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### material

> `readonly` **material**: `string`

#### Remarks

The material to apply to the armor trim.

#### World Ready

This property can't be read in early-execution mode.

***

### pattern

> `readonly` **pattern**: `string`

#### Remarks

The pattern to apply to the armor trim.

#### World Ready

This property can't be read in early-execution mode.
