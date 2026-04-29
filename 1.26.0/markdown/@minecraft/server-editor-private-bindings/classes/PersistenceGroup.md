[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / PersistenceGroup

# Class: PersistenceGroup

## Constructors

### Constructor

> `private` **new PersistenceGroup**(): `PersistenceGroup`

#### Returns

`PersistenceGroup`

## Methods

### createItem()

> **createItem**(`itemName`, `defaultJsonValue?`): [`PersistenceGroupItem`](PersistenceGroupItem.md)

#### Parameters

##### itemName

`string`

##### defaultJsonValue?

`string`

#### Returns

[`PersistenceGroupItem`](PersistenceGroupItem.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### deleteItem()

> **deleteItem**(`itemName`): `void`

#### Parameters

##### itemName

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

### dispose()

> **dispose**(): `boolean`

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### disposeAllGroupItems()

> **disposeAllGroupItems**(): `void`

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

### disposeGroupItem()

> **disposeGroupItem**(`key`): `boolean`

#### Parameters

##### key

`string`

#### Returns

`boolean`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### fetchItem()

> **fetchItem**(`itemName`): [`PersistenceGroupItem`](PersistenceGroupItem.md) \| `undefined`

#### Parameters

##### itemName

`string`

#### Returns

[`PersistenceGroupItem`](PersistenceGroupItem.md) \| `undefined`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getOrCreateItem()

> **getOrCreateItem**(`itemName`, `defaultJsonValue?`): [`PersistenceGroupItem`](PersistenceGroupItem.md)

#### Parameters

##### itemName

`string`

##### defaultJsonValue?

`string`

#### Returns

[`PersistenceGroupItem`](PersistenceGroupItem.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### listItems()

> **listItems**(): `string`[]

#### Returns

`string`[]

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
