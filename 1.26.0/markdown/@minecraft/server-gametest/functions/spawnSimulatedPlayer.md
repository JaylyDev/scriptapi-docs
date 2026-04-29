[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-gametest](../README.md) / spawnSimulatedPlayer

# Function: spawnSimulatedPlayer()

> **spawnSimulatedPlayer**(`location`, `name`, `gameMode`): [`SimulatedPlayer`](../classes/SimulatedPlayer.md)

## Parameters

### location

[`DimensionLocation`](../../server/interfaces/DimensionLocation.md)

The location in which to spawn the player.

### name

`string`

The name for the player.

### gameMode

[`GameMode`](../../server/enumerations/GameMode.md)

The game mode for the player.

## Returns

[`SimulatedPlayer`](../classes/SimulatedPlayer.md)

## Remarks

Spawns a simulated player that isn't associated to a
specific [Test](../classes/Test.md).  You can use [SimulatedPlayer.remove](../classes/SimulatedPlayer.md#remove) to remove the player from the world.

This function can't be called in restricted-execution mode.

## Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

## World Ready

This function can't be called in early-execution mode.
