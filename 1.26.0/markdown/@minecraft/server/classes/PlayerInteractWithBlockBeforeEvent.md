[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerInteractWithBlockBeforeEvent

# Class: PlayerInteractWithBlockBeforeEvent

Contains information regarding an event before a player
interacts with a block.

## Constructors

### Constructor

> `private` **new PlayerInteractWithBlockBeforeEvent**(): `PlayerInteractWithBlockBeforeEvent`

#### Returns

`PlayerInteractWithBlockBeforeEvent`

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

The block that will be interacted with.

#### World Ready

This property can't be read in early-execution mode.

***

### blockFace

> `readonly` **blockFace**: [`Direction`](../enumerations/Direction.md)

#### Remarks

The face of the block that is being interacted with.

#### World Ready

This property can't be read in early-execution mode.

***

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true the interaction will be cancelled.

#### World Ready

This property can't be read in early-execution mode.

***

### faceLocation

> `readonly` **faceLocation**: [`Vector3`](../interfaces/Vector3.md)

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

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack that is being used in the interaction, or
undefined if empty hand.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player.md)

#### Remarks

Source Player for this event.

#### World Ready

This property can't be read in early-execution mode.
