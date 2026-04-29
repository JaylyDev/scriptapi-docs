[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerLeaveBeforeEvent

# Class: PlayerLeaveBeforeEvent

Contains information regarding a player that is leaving the
world.

## Source

```ts
export class PlayerLeaveBeforeEvent {
    private constructor();
    readonly player: Player;
}
```

## Constructors

### Constructor

> `private` **new PlayerLeaveBeforeEvent**(): `PlayerLeaveBeforeEvent`

#### Returns

`PlayerLeaveBeforeEvent`

## Properties

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

The leaving player.

#### World Ready

This property can't be read in early-execution mode.
