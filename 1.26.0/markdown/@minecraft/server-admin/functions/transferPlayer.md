[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-admin](../README.md) / transferPlayer

# Function: transferPlayer()

> **transferPlayer**(`player`, `options`): `void`

## Parameters

### player

[`Player`](../../server/classes/Player.md)

Player to transfer.

### options

[`TransferPlayerIpPortOptions`](../interfaces/TransferPlayerIpPortOptions.md) \| [`TransferPlayerNetherNetOptions`](../interfaces/TransferPlayerNetherNetOptions.md)

Options for where to send the player.

## Returns

`void`

## Remarks

Transfer player to another server.

This function can't be called in restricted-execution mode.

## Throws

This function can throw errors.

## World Ready

This function can't be called in early-execution mode.
