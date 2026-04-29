[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-gametest](../README.md) / setAfterBatchCallback

# Function: setAfterBatchCallback()

> **setAfterBatchCallback**(`batchName`, `batchCallback`): `void`

## Parameters

### batchName

`string`

Name of the batch of tests the callback will run after.

### batchCallback

() => `void`

## Returns

`void`

## Remarks

Sets a callback that is called after the batch gets called.
This will overwrite previously set callbacks for this batch.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

## Throws

This function can throw errors.

[GameTestError](../classes/GameTestError.md)
