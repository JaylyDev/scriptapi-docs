[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-admin](../README.md) / deopPlayer

# Function: deopPlayer()

> **deopPlayer**(`player`): `void`

## Parameters

### player

[`Player`](../../server/classes/Player.md)

Player to remove permissions from.

## Returns

`void`

## Remarks

Removes the player's op permissions.

This function can't be called in restricted-execution mode.

## Throws

This function can throw errors.

[CannotDeopPlayerError](../classes/CannotDeopPlayerError.md)

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

## World Ready

This function can't be called in early-execution mode.
