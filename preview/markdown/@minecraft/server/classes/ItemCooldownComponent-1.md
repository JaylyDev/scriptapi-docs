[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemCooldownComponent

# Class: ItemCooldownComponent

When present on an item, this item has a cooldown effect
when used by entities.

## Source

```ts
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    readonly cooldownCategory: string;
    readonly cooldownTicks: number;
    static readonly componentId = 'minecraft:cooldown';
    getCooldownTicksRemaining(player: Player): number;
    isCooldownCategory(cooldownCategory: string): boolean;
    startCooldown(player: Player): void;
}
```

## Extends

- [`ItemComponent`](ItemComponent-1.md)

## Constructors

### Constructor

> `private` **new ItemCooldownComponent**(): `ItemCooldownComponent`

#### Returns

`ItemCooldownComponent`

#### Overrides

[`ItemComponent`](ItemComponent-1.md).[`constructor`](ItemComponent-1.md#constructor)

## Properties

### cooldownCategory

> `readonly` **cooldownCategory**: `string`

#### Remarks

Represents the cooldown category that this item is
associated with.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### cooldownTicks

> `readonly` **cooldownTicks**: `number`

#### Remarks

Amount of time, in ticks, it will take this item to
cooldown.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemComponent`](ItemComponent-1.md).[`isValid`](ItemComponent-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemComponent`](ItemComponent-1.md).[`typeId`](ItemComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:cooldown"` = `'minecraft:cooldown'`

## Methods

### getCooldownTicksRemaining()

> **getCooldownTicksRemaining**(`player`): `number`

#### Parameters

##### player

[`Player`](Player-1.md)

#### Returns

`number`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isCooldownCategory()

> **isCooldownCategory**(`cooldownCategory`): `boolean`

#### Parameters

##### cooldownCategory

`string`

The cooldown category that might be associated with this
item.

#### Returns

`boolean`

True if the item is the given cooldown category.

#### Remarks

Will return true if the item is the cooldown category passed
in and false otherwise.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### startCooldown()

> **startCooldown**(`player`): `void`

#### Parameters

##### player

[`Player`](Player-1.md)

#### Returns

`void`

#### Remarks

Starts a new cooldown period for this item.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
