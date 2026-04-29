[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerJoinAfterEvent

# Class: PlayerJoinAfterEvent

Contains information regarding a player that has joined.
See the playerSpawn event for more detailed information that
could be returned after the first time a player has spawned
within the game.

## Constructors

### Constructor

> `private` **new PlayerJoinAfterEvent**(): `PlayerJoinAfterEvent`

#### Returns

`PlayerJoinAfterEvent`

## Properties

### playerId

> `readonly` **playerId**: `string`

#### Remarks

Opaque string identifier of the player that joined the game.

#### World Ready

This property can't be read in early-execution mode.

***

### playerName

> `readonly` **playerName**: `string`

#### Remarks

Name of the player that has joined.

#### World Ready

This property can't be read in early-execution mode.
