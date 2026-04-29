[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / DataStoreMenuContainer

# Class: DataStoreMenuContainer

## Constructors

### Constructor

> `private` **new DataStoreMenuContainer**(): `DataStoreMenuContainer`

#### Returns

`DataStoreMenuContainer`

## Methods

### createItem()

> **createItem**(`id`, `payload`): `void`

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

### destroyItem()

> **destroyItem**(`id`): `void`

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

### getPayload()

> **getPayload**(`id`): `string`

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

### getProperty()

> **getProperty**(`id`, `property`): `string` \| `number` \| `boolean` \| `undefined`

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

### hasPayload()

> **hasPayload**(`id`): `boolean`

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

### hasProperty()

> **hasProperty**(`id`, `property`): `boolean`

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

### updateItem()

> **updateItem**(`id`, `payload`): `void`

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
