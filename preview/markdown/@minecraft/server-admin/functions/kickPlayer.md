[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-admin](../README.md) / kickPlayer

# Function: kickPlayer()

> **kickPlayer**(`player`, `reason?`): `void`

## Parameters

### player

[`Player`](../../server/classes/Player.md)

Player to kick.

### reason?

`string`

Reason for kicking the player.

## Returns

`void`

## Remarks

Kicks a player from the server.

This function can't be called in restricted-execution mode.

## Throws

This function can throw errors.

[CannotKickPlayerError](../classes/CannotKickPlayerError.md)

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

## World Ready

This function can't be called in early-execution mode.
