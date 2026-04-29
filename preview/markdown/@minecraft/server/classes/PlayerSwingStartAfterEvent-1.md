[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerSwingStartAfterEvent

# Class: PlayerSwingStartAfterEvent

Contains information regarding a player starting to swing
their arm.

## Source

```ts
export class PlayerSwingStartAfterEvent {
    private constructor();
    readonly heldItemStack?: ItemStack;
    readonly player: Player;
    readonly swingSource: EntitySwingSource;
}
```

## Constructors

### Constructor

> `private` **new PlayerSwingStartAfterEvent**(): `PlayerSwingStartAfterEvent`

#### Returns

`PlayerSwingStartAfterEvent`

## Properties

### heldItemStack?

> `readonly` `optional` **heldItemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The item stack being held by the player at the start of
their swing.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Source Player for this event.

#### World Ready

This property can't be read in early-execution mode.

***

### swingSource

> `readonly` **swingSource**: [`EntitySwingSource`](../enumerations/EntitySwingSource-1.md)

#### Remarks

The source of the Player swing, see [EntitySwingSource](../enumerations/EntitySwingSource-1.md).

#### World Ready

This property can't be read in early-execution mode.
