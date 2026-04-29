[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerGameModeChangeAfterEvent

# Class: PlayerGameModeChangeAfterEvent

Contains information regarding an event after a players game
mode is changed.

## Source

```ts
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    readonly fromGameMode: GameMode;
    readonly player: Player;
    readonly toGameMode: GameMode;
}
```

## Constructors

### Constructor

> `private` **new PlayerGameModeChangeAfterEvent**(): `PlayerGameModeChangeAfterEvent`

#### Returns

`PlayerGameModeChangeAfterEvent`

## Properties

### fromGameMode

> `readonly` **fromGameMode**: [`GameMode`](../enumerations/GameMode-1.md)

#### Remarks

The previous game mode before the change.

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

### toGameMode

> `readonly` **toGameMode**: [`GameMode`](../enumerations/GameMode-1.md)

#### Remarks

The current game mode after the change.

#### World Ready

This property can't be read in early-execution mode.
