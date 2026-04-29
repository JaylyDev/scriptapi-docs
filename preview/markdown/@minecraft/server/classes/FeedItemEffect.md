[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / FeedItemEffect

# Class: FeedItemEffect

Represents an effect that is applied as a result of a food
item being fed to an entity.

## Source

```ts
export class FeedItemEffect {
    private constructor();
    readonly amplifier: number;
    readonly chance: number;
    readonly duration: number;
    readonly name: string;
}
```

## Constructors

### Constructor

> `private` **new FeedItemEffect**(): `FeedItemEffect`

#### Returns

`FeedItemEffect`

## Properties

### amplifier

> `readonly` **amplifier**: `number`

#### Remarks

Gets an amplifier that may have been applied to this effect.
Valid values are integers starting at 0 and up - but usually
ranging between 0 and 4.

#### World Ready

This property can't be read in early-execution mode.

***

### chance

> `readonly` **chance**: `number`

#### Remarks

Chance that this effect is applied as a result of the entity
being fed this item. Valid values range between 0 and 1.

#### World Ready

This property can't be read in early-execution mode.

***

### duration

> `readonly` **duration**: `number`

#### Remarks

Gets the duration, in ticks, of this effect.

#### World Ready

This property can't be read in early-execution mode.

***

### name

> `readonly` **name**: `string`

#### Remarks

Gets the identifier of the effect to apply. Example values
include 'fire_resistance' or 'regeneration'.

#### World Ready

This property can't be read in early-execution mode.
