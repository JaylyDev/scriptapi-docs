[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / executeLargeOperation

# Function: executeLargeOperation()

> **executeLargeOperation**(`volume`, `operation`): `Promise`\<`void`\>

## Parameters

### volume

[`RelativeVolumeListBlockVolume`](../classes/RelativeVolumeListBlockVolume.md)

### operation

(`blockLocation`) => `void`

the operation to apply over each block location

## Returns

`Promise`\<`void`\>

## Remarks

Executes an operation over a selection via chunks to allow
splitting operation over multiple game ticks

## World Ready

This function can't be called in early-execution mode.
