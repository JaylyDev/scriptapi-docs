[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / SetBannerDetailsFunction

# Class: SetBannerDetailsFunction

Loot item function that modifies the type of a banner that
drops.

## Source

```ts
export class SetBannerDetailsFunction extends LootItemFunction {
    private constructor();
    readonly baseColor: string;
    readonly patterns: BannerPattern[];
    readonly 'type': number;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new SetBannerDetailsFunction**(): `SetBannerDetailsFunction`

#### Returns

`SetBannerDetailsFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### baseColor

> `readonly` **baseColor**: `string`

**`Beta`**

#### Remarks

The base color for the dropped banner.

#### World Ready

This property can't be read in early-execution mode.

***

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### patterns

> `readonly` **patterns**: [`BannerPattern`](BannerPattern.md)[]

**`Beta`**

#### Remarks

An array of [BannerPattern](BannerPattern.md) objects used to decorate
the banner, including color and pattern type.

#### World Ready

This property can't be read in early-execution mode.

***

### type

> `readonly` **type**: `number`

#### Remarks

The type of banner to drop.

#### World Ready

This property can't be read in early-execution mode.
