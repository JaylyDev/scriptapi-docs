[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerGameModeChangeBeforeEvent

# Class: PlayerGameModeChangeBeforeEvent

Contains information regarding an event before a player
interacts with an entity.

## Constructors

### Constructor

> `private` **new PlayerGameModeChangeBeforeEvent**(): `PlayerGameModeChangeBeforeEvent`

#### Returns

`PlayerGameModeChangeBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true the game mode change will be cancelled.

#### World Ready

This property can't be read in early-execution mode.

***

### fromGameMode

> `readonly` **fromGameMode**: [`GameMode`](../enumerations/GameMode.md)

#### Remarks

The current game mode.

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

> **toGameMode**: [`GameMode`](../enumerations/GameMode.md)

#### Remarks

The game mode being changed to.

#### World Ready

This property can't be read in early-execution mode.
