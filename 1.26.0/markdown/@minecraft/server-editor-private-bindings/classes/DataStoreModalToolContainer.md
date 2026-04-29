[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / DataStoreModalToolContainer

# Class: DataStoreModalToolContainer

## Constructors

### Constructor

> `private` **new DataStoreModalToolContainer**(): `DataStoreModalToolContainer`

#### Returns

`DataStoreModalToolContainer`

## Properties

### toolActivationChanged

> `readonly` **toolActivationChanged**: [`DataStoreModalToolActivationChangedEventSignal`](DataStoreModalToolActivationChangedEventSignal.md)

## Methods

### getSelectedTool()

> **getSelectedTool**(): `string` \| `undefined`

#### Returns

`string` \| `undefined`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getToolPayload()

> **getToolPayload**(`id`): `string`

#### Parameters

##### id

`string`

#### Returns

`string`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getToolProperty()

> **getToolProperty**(`id`, `property`): `string` \| `number` \| `boolean` \| `undefined`

#### Parameters

##### id

`string`

##### property

`string`

#### Returns

`string` \| `number` \| `boolean` \| `undefined`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### hasToolPayload()

> **hasToolPayload**(`id`): `boolean`

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### hasToolProperty()

> **hasToolProperty**(`id`, `property`): `boolean`

#### Parameters

##### id

`string`

##### property

`string`

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### registerTool()

> **registerTool**(`id`, `payload`): `void`

#### Parameters

##### id

`string`

##### payload

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

### unregisterTool()

> **unregisterTool**(`id`): `void`

#### Parameters

##### id

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

### updateRegisteredTool()

> **updateRegisteredTool**(`id`, `payload`): `void`

#### Parameters

##### id

`string`

##### payload

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

### updateRegisteredToolProperty()

> **updateRegisteredToolProperty**(`id`, `payload`, `property`): `void`

#### Parameters

##### id

`string`

##### payload

`string`

##### property

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

### updateSelectedTool()

> **updateSelectedTool**(`toolId?`): `void`

#### Parameters

##### toolId?

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
