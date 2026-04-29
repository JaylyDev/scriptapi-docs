[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / PlayerPlaceBlockAfterEvent

# Class: PlayerPlaceBlockAfterEvent

Contains information regarding an event where a player
places a block.

## Source

```ts
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly player: Player;
}
```

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new PlayerPlaceBlockAfterEvent**(): `PlayerPlaceBlockAfterEvent`

#### Returns

`PlayerPlaceBlockAfterEvent`

#### Overrides

[`BlockEvent`](BlockEvent.md).[`constructor`](BlockEvent.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

Block currently in the world at the location of this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockEvent`](BlockEvent.md).[`block`](BlockEvent.md#block)

***

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension.md)

#### Remarks

Dimension that contains the block that is the subject of
this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockEvent`](BlockEvent.md).[`dimension`](BlockEvent.md#dimension)

***

### player

> `readonly` **player**: [`Player`](Player.md)

#### Remarks

Player that placed the block for this event.

#### World Ready

This property can't be read in early-execution mode.
