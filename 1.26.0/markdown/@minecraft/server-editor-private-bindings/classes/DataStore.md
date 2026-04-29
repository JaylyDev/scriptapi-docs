[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / DataStore

# Class: DataStore

## Constructors

### Constructor

> `private` **new DataStore**(): `DataStore`

#### Returns

`DataStore`

## Properties

### actionBarContainer

> `readonly` **actionBarContainer**: [`DataStoreActionBarContainer`](DataStoreActionBarContainer.md)

***

### actionContainer

> `readonly` **actionContainer**: [`DataStoreActionContainer`](DataStoreActionContainer.md)

***

### afterEvents

> `readonly` **afterEvents**: [`DataStoreAfterEvents`](DataStoreAfterEvents.md)

***

### menuContainer

> `readonly` **menuContainer**: [`DataStoreMenuContainer`](DataStoreMenuContainer.md)

***

### modalToolContainer

> `readonly` **modalToolContainer**: [`DataStoreModalToolContainer`](DataStoreModalToolContainer.md)

***

### paneContainer

> `readonly` **paneContainer**: [`DataStorePaneContainer`](DataStorePaneContainer.md)

## Methods

### sendNotificationEvent()

> **sendNotificationEvent**(`dataTag`, `payload`): `void`

#### Parameters

##### dataTag

`string`

##### payload

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.
