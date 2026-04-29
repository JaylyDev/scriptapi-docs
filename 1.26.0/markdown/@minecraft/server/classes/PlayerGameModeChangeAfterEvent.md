[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerGameModeChangeAfterEvent

# Class: PlayerGameModeChangeAfterEvent

Contains information regarding an event after a players game
mode is changed.

## Constructors

### Constructor

> `private` **new PlayerGameModeChangeAfterEvent**(): `PlayerGameModeChangeAfterEvent`

#### Returns

`PlayerGameModeChangeAfterEvent`

## Properties

### fromGameMode

> `readonly` **fromGameMode**: [`GameMode`](../enumerations/GameMode.md)

#### Remarks

The previous game mode before the change.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player.md)

#### Remarks

Source Player for this event.

#### World Ready

This property can't be read in early-execution mode.

***

### toGameMode

> `readonly` **toGameMode**: [`GameMode`](../enumerations/GameMode.md)

#### Remarks

The current game mode after the change.

#### World Ready

This property can't be read in early-execution mode.
