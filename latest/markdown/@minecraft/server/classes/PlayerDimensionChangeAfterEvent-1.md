[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerDimensionChangeAfterEvent

# Class: PlayerDimensionChangeAfterEvent

Contains information related to changes to a player's
dimension having been changed.

## Source

```ts
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    readonly fromDimension: Dimension;
    readonly fromLocation: Vector3;
    readonly player: Player;
    readonly toDimension: Dimension;
    readonly toLocation: Vector3;
}
```

## Constructors

### Constructor

> `private` **new PlayerDimensionChangeAfterEvent**(): `PlayerDimensionChangeAfterEvent`

#### Returns

`PlayerDimensionChangeAfterEvent`

## Properties

### fromDimension

> `readonly` **fromDimension**: [`Dimension`](Dimension-1.md)

#### Remarks

The dimension the player is changing from.

#### World Ready

This property can't be read in early-execution mode.

***

### fromLocation

> `readonly` **fromLocation**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

The location the player was at before changing dimensions.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Handle to the player that is changing dimensions.

#### World Ready

This property can't be read in early-execution mode.

***

### toDimension

> `readonly` **toDimension**: [`Dimension`](Dimension-1.md)

#### Remarks

The dimension that the player is changing to.

#### World Ready

This property can't be read in early-execution mode.

***

### toLocation

> `readonly` **toLocation**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

The location the player will spawn to after changing
dimensions.

#### World Ready

This property can't be read in early-execution mode.
