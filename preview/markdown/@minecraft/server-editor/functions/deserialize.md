[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / deserialize

# Function: deserialize()

> **deserialize**(`s`): `unknown`

## Parameters

### s

`string`

## Returns

`unknown`

## Remarks

Deserialize anything, defaults to the same behavior as
JSON.parse but will use custom deserializers passed into
[registerSerializationForType](registerSerializationForType.md).

## World Ready

This function can't be called in early-execution mode.
