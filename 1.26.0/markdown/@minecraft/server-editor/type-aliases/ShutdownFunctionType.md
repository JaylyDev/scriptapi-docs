[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / ShutdownFunctionType

# Type Alias: ShutdownFunctionType\<PerPlayerStorageType\>

> **ShutdownFunctionType**\<`PerPlayerStorageType`\> = (`uiSession`) => `void`

Callback type when an extension instance is shutdown for a
given player. Used for performing any final work or clean up
that can't be handled automatically via Disposables.

## Type Parameters

### PerPlayerStorageType

`PerPlayerStorageType`

## Parameters

### uiSession

[`IPlayerUISession`](IPlayerUISession.md)\<`PerPlayerStorageType`\>

## Returns

`void`
