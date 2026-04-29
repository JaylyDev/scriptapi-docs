[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerPlaceBlockBeforeEvent

# Class: PlayerPlaceBlockBeforeEvent

**`Beta`**

Contains information regarding an event before a player
places a block.

## Source

```ts
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    readonly face: Direction;
    readonly faceLocation: Vector3;
    readonly permutationToPlace: BlockPermutation;
    readonly player: Player;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new PlayerPlaceBlockBeforeEvent**(): `PlayerPlaceBlockBeforeEvent`

#### Returns

`PlayerPlaceBlockBeforeEvent`

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

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true, cancels the block place event.

#### World Ready

This property can't be read in early-execution mode.

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

### face

> `readonly` **face**: [`Direction`](../enumerations/Direction-1.md)

#### Remarks

The face of the block that the new block is being placed on.

#### World Ready

This property can't be read in early-execution mode.

***

### faceLocation

> `readonly` **faceLocation**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Location relative to the bottom north-west corner of the
block where the new block is being placed onto.

#### World Ready

This property can't be read in early-execution mode.

***

### permutationToPlace

> `readonly` **permutationToPlace**: [`BlockPermutation`](BlockPermutation-1.md)

#### Remarks

The block permutation that will be placed if the event is
not cancelled.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Player that is placing the block for this event.

#### World Ready

This property can't be read in early-execution mode.
