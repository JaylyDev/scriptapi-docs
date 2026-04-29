[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-admin](../README.md) / opPlayer

# Function: opPlayer()

> **opPlayer**(`player`): `void`

## Parameters

### player

[`Player`](../../server/classes/Player.md)

Player to add permissions to.

## Returns

`void`

## Remarks

Gives the player op permissions.

This function can't be called in restricted-execution mode.

## Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[PlayerAlreadyOpError](../classes/PlayerAlreadyOpError.md)

## World Ready

This function can't be called in early-execution mode.
