[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerInputModeChangeAfterEvent

# Class: PlayerInputModeChangeAfterEvent

Event data for when a player input mode changes.

## Source

```ts
export class PlayerInputModeChangeAfterEvent {
    private constructor();
    readonly newInputModeUsed: InputMode;
    readonly player: Player;
    readonly previousInputModeUsed: InputMode;
}
```

## Constructors

### Constructor

> `private` **new PlayerInputModeChangeAfterEvent**(): `PlayerInputModeChangeAfterEvent`

#### Returns

`PlayerInputModeChangeAfterEvent`

## Properties

### newInputModeUsed

> `readonly` **newInputModeUsed**: [`InputMode`](../enumerations/InputMode-1.md)

#### Remarks

The new input mode used by the player.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

The player that had an input mode change.

#### World Ready

This property can't be read in early-execution mode.

***

### previousInputModeUsed

> `readonly` **previousInputModeUsed**: [`InputMode`](../enumerations/InputMode-1.md)

#### Remarks

The previous input mode used by the player.

#### World Ready

This property can't be read in early-execution mode.
