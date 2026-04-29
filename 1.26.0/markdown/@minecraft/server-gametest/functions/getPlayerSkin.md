[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-gametest](../README.md) / getPlayerSkin

# Function: getPlayerSkin()

> **getPlayerSkin**(`player`): [`PlayerSkinData`](../interfaces/PlayerSkinData.md)

## Parameters

### player

[`Player`](../../server/classes/Player.md)

The player who's skin is returned.

## Returns

[`PlayerSkinData`](../interfaces/PlayerSkinData.md)

## Remarks

Returns data about a player's skin.

This function can't be called in restricted-execution mode.

## Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

## World Ready

This function can't be called in early-execution mode.
