[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerLeaveAfterEvent

# Class: PlayerLeaveAfterEvent

Contains information regarding a player that has left the
world.

## Source

```ts
export class PlayerLeaveAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}
```

## Constructors

### Constructor

> `private` **new PlayerLeaveAfterEvent**(): `PlayerLeaveAfterEvent`

#### Returns

`PlayerLeaveAfterEvent`

## Properties

### playerId

> `readonly` **playerId**: `string`

#### Remarks

Opaque string identifier of the player that has left the
event.

#### World Ready

This property can't be read in early-execution mode.

***

### playerName

> `readonly` **playerName**: `string`

#### Remarks

Player that has left the world.

#### World Ready

This property can't be read in early-execution mode.
