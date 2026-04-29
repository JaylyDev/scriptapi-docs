[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerUseNameTagAfterEvent

# Class: PlayerUseNameTagAfterEvent

**`Beta`**

Contains information related to when a player successfully
names an Entity with a named Name Tag item.

## Constructors

### Constructor

> `private` **new PlayerUseNameTagAfterEvent**(): `PlayerUseNameTagAfterEvent`

#### Returns

`PlayerUseNameTagAfterEvent`

## Properties

### entityNamed

> **entityNamed**: [`Entity`](Entity-1.md)

#### Remarks

The entity that was named by the player.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### newName

> **newName**: `string`

#### Remarks

The new name that the player has given to the entity.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> **player**: [`Player`](Player-1.md)

#### Remarks

Handle to the player that used the name tag.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### previousName?

> `optional` **previousName?**: `string`

#### Remarks

The previous name of the entity before the player used the
name tag. This will be undefined if the entity was not
previously named.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.
