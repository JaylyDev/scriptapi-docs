[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / PlayerSpawnAfterEvent

# Class: PlayerSpawnAfterEvent

An event that contains more information about a player
spawning.

## Source

```ts
export class PlayerSpawnAfterEvent {
    private constructor();
    initialSpawn: boolean;
    player: Player;
}
```

## Constructors

### Constructor

> `private` **new PlayerSpawnAfterEvent**(): `PlayerSpawnAfterEvent`

#### Returns

`PlayerSpawnAfterEvent`

## Properties

### initialSpawn

> **initialSpawn**: `boolean`

#### Remarks

If true, this is the initial spawn of a player after joining
the game.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> **player**: [`Player`](Player.md)

#### Remarks

Object that represents the player that joined the game.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.
