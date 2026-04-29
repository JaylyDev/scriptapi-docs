[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / GameRuleChangeAfterEvent

# Class: GameRuleChangeAfterEvent

Contains information regarding a changed world.gameRules
property.

## Constructors

### Constructor

> `private` **new GameRuleChangeAfterEvent**(): `GameRuleChangeAfterEvent`

#### Returns

`GameRuleChangeAfterEvent`

## Properties

### rule

> `readonly` **rule**: [`GameRule`](../enumerations/GameRule-1.md)

#### Remarks

The rule identifier pertaining to the changed
world.gameRules property.

#### World Ready

This property can't be read in early-execution mode.

***

### value

> `readonly` **value**: `number` \| `boolean`

#### Remarks

The value of the world.gameRules property after being
changed.

#### World Ready

This property can't be read in early-execution mode.
