[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerPlaceBlockAfterEvent

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

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new PlayerPlaceBlockAfterEvent**(): `PlayerPlaceBlockAfterEvent`

#### Returns

`PlayerPlaceBlockAfterEvent`

#### Overrides

[`BlockEvent`](BlockEvent-1.md).[`constructor`](BlockEvent-1.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

Block currently in the world at the location of this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockEvent`](BlockEvent-1.md).[`block`](BlockEvent-1.md#block)

***

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension-1.md)

#### Remarks

Dimension that contains the block that is the subject of
this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockEvent`](BlockEvent-1.md).[`dimension`](BlockEvent-1.md#dimension)

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Player that placed the block for this event.

#### World Ready

This property can't be read in early-execution mode.
