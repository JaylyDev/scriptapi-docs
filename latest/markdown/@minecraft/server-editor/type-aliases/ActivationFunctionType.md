[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ActivationFunctionType

# Type Alias: ActivationFunctionType\<PerPlayerStorageType\>

> **ActivationFunctionType**\<`PerPlayerStorageType`\> = (`uiSession`) => [`IDisposable`](../interfaces/IDisposable.md)[]

Callback type when an extension instance is activated for a
given player. It is expected to return an array of
disposables that will automatically be cleaned up on
shutdown.

## Type Parameters

### PerPlayerStorageType

`PerPlayerStorageType`

## Parameters

### uiSession

[`IPlayerUISession`](IPlayerUISession.md)\<`PerPlayerStorageType`\>

## Returns

[`IDisposable`](../interfaces/IDisposable.md)[]
