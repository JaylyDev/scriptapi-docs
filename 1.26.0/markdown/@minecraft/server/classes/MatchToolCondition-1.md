[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / MatchToolCondition

# Class: MatchToolCondition

Loot item condition that checks whether an appropriate tool
was used to trigger the loot event. Can describe item type,
count, durability, enchantments, or arrays of item tags to
compare against.

## Extends

- [`LootItemCondition`](LootItemCondition-1.md)

## Constructors

### Constructor

> `private` **new MatchToolCondition**(): `MatchToolCondition`

#### Returns

`MatchToolCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition-1.md).[`constructor`](LootItemCondition-1.md#constructor)

## Properties

### count

> `readonly` **count**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The stack size, or count, required for this condition to
pass.

#### World Ready

This property can't be read in early-execution mode.

***

### durability

> `readonly` **durability**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The durability value required for this condition to pass.

#### World Ready

This property can't be read in early-execution mode.

***

### enchantments

> `readonly` **enchantments**: [`EnchantInfo`](EnchantInfo-1.md)[]

#### Remarks

Array of enchantments required for this condition to pass.

#### World Ready

This property can't be read in early-execution mode.

***

### itemName

> `readonly` **itemName**: `string`

#### Remarks

The name of the tool item required for this condition to
pass.

#### World Ready

This property can't be read in early-execution mode.

***

### itemTagsAll

> `readonly` **itemTagsAll**: `string`[]

#### Remarks

Array of item tags which ALL must be matched for this
condition to pass.

#### World Ready

This property can't be read in early-execution mode.

***

### itemTagsAny

> `readonly` **itemTagsAny**: `string`[]

#### Remarks

Array of item tags, from which at least 1 must be matched
for this condition to pass.

#### World Ready

This property can't be read in early-execution mode.

***

### itemTagsNone

> `readonly` **itemTagsNone**: `string`[]

#### Remarks

Array of item tags, from which exactly zero must match for
this condition to pass.

#### World Ready

This property can't be read in early-execution mode.
