[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / MinecraftEditorInternal

# Class: MinecraftEditorInternal

## Constructors

### Constructor

> `private` **new MinecraftEditorInternal**(): `MinecraftEditorInternal`

#### Returns

`MinecraftEditorInternal`

## Properties

### isNewLevel

> `readonly` **isNewLevel**: `boolean`

***

### regionManager

> `readonly` **regionManager**: [`ProjectRegionManager`](ProjectRegionManager.md)

## Methods

### fireTelemetryEvent()

> **fireTelemetryEvent**(`player`, `source`, `eventName`, `metadata`): `void`

#### Parameters

##### player

[`Player`](../../server/classes/Player.md)

##### source

`string`

##### eventName

`string`

##### metadata

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getPlayerServices()

> **getPlayerServices**(`player`): [`InternalPlayerServiceContext`](InternalPlayerServiceContext.md)

#### Parameters

##### player

[`Player`](../../server/classes/Player.md)

#### Returns

[`InternalPlayerServiceContext`](InternalPlayerServiceContext.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### registerExtension()

> **registerExtension**(`extensionName`, `activationFunction`, `shutdownFunction`, `options?`): [`Extension`](Extension.md)

#### Parameters

##### extensionName

`string`

##### activationFunction

(`arg0`) => `void`

##### shutdownFunction

(`arg0`) => `void`

##### options?

[`ExtensionOptionalParameters`](../interfaces/ExtensionOptionalParameters.md)

#### Returns

[`Extension`](Extension.md)

#### Remarks

This function can be called in early-execution mode.

#### Write Privilege

This function can't be called in read-only mode.
