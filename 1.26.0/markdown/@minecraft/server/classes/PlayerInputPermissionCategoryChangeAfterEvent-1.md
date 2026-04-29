[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerInputPermissionCategoryChangeAfterEvent

# Class: PlayerInputPermissionCategoryChangeAfterEvent

Contains information regarding an event after a players
input permissions change.

## Constructors

### Constructor

> `private` **new PlayerInputPermissionCategoryChangeAfterEvent**(): `PlayerInputPermissionCategoryChangeAfterEvent`

#### Returns

`PlayerInputPermissionCategoryChangeAfterEvent`

## Properties

### category

> `readonly` **category**: [`InputPermissionCategory`](../enumerations/InputPermissionCategory-1.md)

#### Remarks

The category of input permissions that have changed.

#### World Ready

This property can't be read in early-execution mode.

***

### enabled

> `readonly` **enabled**: `boolean`

#### Remarks

The enabled/disabled state of the players input permissions.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

The player that has had their input permissions changed.

#### World Ready

This property can't be read in early-execution mode.
