[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / executeLargeOperationFromIterator

# Function: executeLargeOperationFromIterator()

> **executeLargeOperationFromIterator**(`blockLocationIterator`, `operation`): `Promise`\<`void`\>

## Parameters

### blockLocationIterator

[`BlockLocationIterator`](../../server/classes/BlockLocationIterator.md)

the selection to iterator over

### operation

(`blockLocation`) => `void`

the operation to apply over each block location

## Returns

`Promise`\<`void`\>

## Remarks

Executes an operation over a BlockLocationIterator via
chunks to allow splitting operation over multiple game ticks

## World Ready

This function can't be called in early-execution mode.
