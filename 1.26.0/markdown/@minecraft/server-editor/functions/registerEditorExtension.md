[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / registerEditorExtension

# Function: registerEditorExtension()

> **registerEditorExtension**\<`PerPlayerStorageType`\>(`extensionName`, `activationFunction`, `shutdownFunction`, `options?`): [`Extension`](../classes/Extension.md)

## Type Parameters

### PerPlayerStorageType

`PerPlayerStorageType` = `Record`\<`string`, `never`\>

## Parameters

### extensionName

`string`

### activationFunction

[`ActivationFunctionType`](../type-aliases/ActivationFunctionType.md)\<`PerPlayerStorageType`\>

### shutdownFunction

[`ShutdownFunctionType`](../type-aliases/ShutdownFunctionType.md)\<`PerPlayerStorageType`\>

### options?

[`IRegisterExtensionOptionalParameters`](../interfaces/IRegisterExtensionOptionalParameters.md)

## Returns

[`Extension`](../classes/Extension.md)

## Remarks

Registers an editor extension into Minecraft. This function
calls underlying functionality to register an extension but
provides helpful and contextual wrappers for individual
client lifetimes. The onActivation function is called
whenever a client joins a session, while the shutdown is
called when a client leaves. There may be other
circumstances in which these are called as well based on
client state that is an implementation detail of the system.

## World Ready

This function can't be called in early-execution mode.
