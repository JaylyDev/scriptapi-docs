[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / getDefaultAllowBlockList

# Function: getDefaultAllowBlockList()

> **getDefaultAllowBlockList**(): `string`[]

## Returns

`string`[]

Default allowed block list

## Remarks

Returns a string array of the default block types for editor
operations. Can be used to further filter blocks. This will
throw if called in early execution.

## World Ready

This function can't be called in early-execution mode.
