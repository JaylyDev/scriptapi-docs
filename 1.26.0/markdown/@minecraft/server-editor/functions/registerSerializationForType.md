[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / registerSerializationForType

# Function: registerSerializationForType()

> **registerSerializationForType**\<`T`\>(`typeConstructor`, `name`, `serializer`, `deserializer`): `void`

## Type Parameters

### T

`T`

## Parameters

### typeConstructor

`Function`

### name

`string`

### serializer

(`obj`) => `Record`\<`string`, `unknown`\>

### deserializer

(`vals`) => `T`

## Returns

`void`

## Remarks

Register a type to have custom serialization/deserialization
when using [serialize](serialize.md) and [deserialize](deserialize.md).

## World Ready

This function can't be called in early-execution mode.
