[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / PlayerProjectRegionManager

# Class: PlayerProjectRegionManager

## Constructors

### Constructor

> `private` **new PlayerProjectRegionManager**(): `PlayerProjectRegionManager`

#### Returns

`PlayerProjectRegionManager`

## Methods

### disposeAllRegions()

> **disposeAllRegions**(): `void`

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

### disposeRegion()

> **disposeRegion**(`id`): `boolean`

#### Parameters

##### id

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

### getCursorRegion()

> **getCursorRegion**(): [`ProjectRegion`](ProjectRegion.md)

#### Returns

[`ProjectRegion`](ProjectRegion.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getSelectionRegion()

> **getSelectionRegion**(): [`ProjectRegion`](ProjectRegion.md)

#### Returns

[`ProjectRegion`](ProjectRegion.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### leaseRegion()

> **leaseRegion**(`options`): [`ProjectRegion`](ProjectRegion.md)

#### Parameters

##### options

[`ProjectRegionOptions`](../interfaces/ProjectRegionOptions.md)

#### Returns

[`ProjectRegion`](ProjectRegion.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
