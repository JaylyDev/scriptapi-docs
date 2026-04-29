[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-gametest](../README.md) / setBeforeBatchCallback

# Function: setBeforeBatchCallback()

> **setBeforeBatchCallback**(`batchName`, `batchCallback`): `void`

## Parameters

### batchName

`string`

Name of the batch of tests the callback will run before.

### batchCallback

() => `void`

## Returns

`void`

## Remarks

Sets a callback that is called before the batch gets called.
This will overwrite previously set callbacks for this batch.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

## Throws

This function can throw errors.

[GameTestError](../classes/GameTestError.md)
