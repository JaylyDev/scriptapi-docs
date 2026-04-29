[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerInputModeChangeAfterEvent

# Class: PlayerInputModeChangeAfterEvent

Event data for when a player input mode changes.

## Constructors

### Constructor

> `private` **new PlayerInputModeChangeAfterEvent**(): `PlayerInputModeChangeAfterEvent`

#### Returns

`PlayerInputModeChangeAfterEvent`

## Properties

### newInputModeUsed

> `readonly` **newInputModeUsed**: [`InputMode`](../enumerations/InputMode.md)

#### Remarks

The new input mode used by the player.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player.md)

#### Remarks

The player that had an input mode change.

#### World Ready

This property can't be read in early-execution mode.

***

### previousInputModeUsed

> `readonly` **previousInputModeUsed**: [`InputMode`](../enumerations/InputMode.md)

#### Remarks

The previous input mode used by the player.

#### World Ready

This property can't be read in early-execution mode.
