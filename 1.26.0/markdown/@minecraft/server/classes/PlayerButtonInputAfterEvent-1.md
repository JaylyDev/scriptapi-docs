[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerButtonInputAfterEvent

# Class: PlayerButtonInputAfterEvent

Event data for when a player presses a button.

## Constructors

### Constructor

> `private` **new PlayerButtonInputAfterEvent**(): `PlayerButtonInputAfterEvent`

#### Returns

`PlayerButtonInputAfterEvent`

## Properties

### button

> `readonly` **button**: [`InputButton`](../enumerations/InputButton-1.md)

#### Remarks

The button this event is about.

#### World Ready

This property can't be read in early-execution mode.

***

### newButtonState

> `readonly` **newButtonState**: [`ButtonState`](../enumerations/ButtonState-1.md)

#### Remarks

The state that this button transferred to.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

The player that performed the input event.

#### World Ready

This property can't be read in early-execution mode.
