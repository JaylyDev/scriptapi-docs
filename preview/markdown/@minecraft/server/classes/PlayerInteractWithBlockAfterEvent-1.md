[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerInteractWithBlockAfterEvent

# Class: PlayerInteractWithBlockAfterEvent

Contains information regarding an event after a player
successfully interacts with a block.

## Source

```ts
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    readonly beforeItemStack?: ItemStack;
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly isFirstEvent: boolean;
    readonly itemStack?: ItemStack;
    readonly player: Player;
}
```

## Constructors

### Constructor

> `private` **new PlayerInteractWithBlockAfterEvent**(): `PlayerInteractWithBlockAfterEvent`

#### Returns

`PlayerInteractWithBlockAfterEvent`

## Properties

### beforeItemStack?

> `readonly` `optional` **beforeItemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The ItemStack before the interaction succeeded, or undefined
if hand is empty.

#### World Ready

This property can't be read in early-execution mode.

***

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

The block that will be interacted with.

#### World Ready

This property can't be read in early-execution mode.

***

### blockFace

> `readonly` **blockFace**: [`Direction`](../enumerations/Direction-1.md)

#### Remarks

The face of the block that is being interacted with.

#### World Ready

This property can't be read in early-execution mode.

***

### faceLocation

> `readonly` **faceLocation**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Location relative to the bottom north-west corner of the
block where the item is placed.

#### World Ready

This property can't be read in early-execution mode.

***

### isFirstEvent

> `readonly` **isFirstEvent**: `boolean`

#### Remarks

This value will be true if the event was triggered on
players initial interaction button press and false on events
triggered from holding the interaction button.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The ItemStack after the interaction succeeded, or undefined
if hand is empty.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Source Player for this event.

#### World Ready

This property can't be read in early-execution mode.
