[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / serialize

# Function: serialize()

> **serialize**(`obj`): `string`

## Parameters

### obj

`unknown`

## Returns

`string`

## Remarks

Serialize anything, defaults to the same behavior as
JSON.stringify but will use custom serializers passed into
[registerSerializationForType](registerSerializationForType.md).

## World Ready

This function can't be called in early-execution mode.
