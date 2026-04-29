[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / InternalPersistenceManager

# Class: InternalPersistenceManager

## Constructors

### Constructor

> `private` **new InternalPersistenceManager**(): `InternalPersistenceManager`

#### Returns

`InternalPersistenceManager`

## Methods

### createGroup()

> **createGroup**(`namespacedName`, `options`): [`PersistenceGroup`](PersistenceGroup.md)

#### Parameters

##### namespacedName

`string`

##### options

[`PersistenceGroupCreationOptions`](../interfaces/PersistenceGroupCreationOptions.md)

#### Returns

[`PersistenceGroup`](PersistenceGroup.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### deleteGroup()

> **deleteGroup**(`namespacedName`, `options`): `void`

#### Parameters

##### namespacedName

`string`

##### options

[`PersistenceGroupCreationOptions`](../interfaces/PersistenceGroupCreationOptions.md)

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

### disposeAllGroups()

> **disposeAllGroups**(): `void`

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

### fetchGroups()

> **fetchGroups**(`options`): [`PersistenceGroup`](PersistenceGroup.md)[]

#### Parameters

##### options

[`PersistenceQueryGroupOptions`](../interfaces/PersistenceQueryGroupOptions.md)

#### Returns

[`PersistenceGroup`](PersistenceGroup.md)[]

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getGroup()

> **getGroup**(`namespacedName`, `options`): [`PersistenceGroup`](PersistenceGroup.md) \| `undefined`

#### Parameters

##### namespacedName

`string`

##### options

[`PersistenceGroupCreationOptions`](../interfaces/PersistenceGroupCreationOptions.md)

#### Returns

[`PersistenceGroup`](PersistenceGroup.md) \| `undefined`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getOrCreateGroup()

> **getOrCreateGroup**(`namespacedName`, `options`): [`PersistenceGroup`](PersistenceGroup.md)

#### Parameters

##### namespacedName

`string`

##### options

[`PersistenceGroupCreationOptions`](../interfaces/PersistenceGroupCreationOptions.md)

#### Returns

[`PersistenceGroup`](PersistenceGroup.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### requestClientGroup()

> **requestClientGroup**(`namespacedName`, `options`, `callback`): `void`

#### Parameters

##### namespacedName

`string`

##### options

[`PersistenceGroupCreationOptions`](../interfaces/PersistenceGroupCreationOptions.md)

##### callback

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
