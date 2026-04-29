[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / DataStoreActionBarContainer

# Class: DataStoreActionBarContainer

## Constructors

### Constructor

> `private` **new DataStoreActionBarContainer**(): `DataStoreActionBarContainer`

#### Returns

`DataStoreActionBarContainer`

## Methods

### getItemPayload()

> **getItemPayload**(`id`): `string`

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

### getItemProperty()

> **getItemProperty**(`id`, `property`): `string` \| `number` \| `boolean` \| `undefined`

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

### hasItemPayload()

> **hasItemPayload**(`id`): `boolean`

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

### hasItemProperty()

> **hasItemProperty**(`id`, `property`): `boolean`

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

### registerItem()

> **registerItem**(`id`, `payload`): `void`

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

### unregisterItem()

> **unregisterItem**(`id`): `void`

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

### updateRegisteredItem()

> **updateRegisteredItem**(`id`, `payload`): `void`

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

### updateRegisteredItemProperty()

> **updateRegisteredItemProperty**(`id`, `payload`, `property`): `void`

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
