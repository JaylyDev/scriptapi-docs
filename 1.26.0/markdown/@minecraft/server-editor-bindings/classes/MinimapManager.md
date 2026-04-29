[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-bindings](../README.md) / MinimapManager

# Class: MinimapManager

Manage minimap instances within the editor, providing
functionality to create, destroy, and retrieve minimap
displays.

## Constructors

### Constructor

> `private` **new MinimapManager**(): `MinimapManager`

#### Returns

`MinimapManager`

## Methods

### createMinimap()

> **createMinimap**(`viewType`, `mapWidth`, `mapHeight`): [`MinimapItem`](MinimapItem.md)

#### Parameters

##### viewType

[`BlockView`](../enumerations/MinimapViewType.md#blockview)

##### mapWidth

`number`

##### mapHeight

`number`

#### Returns

[`MinimapItem`](MinimapItem.md)

#### Remarks

Create a new minimap instance with the specified view type
and dimensions.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### destroyMinimap()

> **destroyMinimap**(`minimapId`): `void`

#### Parameters

##### minimapId

`string`

#### Returns

`void`

#### Remarks

Remove an existing minimap instance from the manager using
its unique identifier.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getAllMinimapIds()

> **getAllMinimapIds**(): `string`[]

#### Returns

`string`[]

#### Remarks

Retrieve a list of all active minimap identifiers currently
managed by the system.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getMinimap()

> **getMinimap**(`minimapId`): [`MinimapItem`](MinimapItem.md)

#### Parameters

##### minimapId

`string`

#### Returns

[`MinimapItem`](MinimapItem.md)

#### Remarks

Retrieve a specific minimap instance using its unique
identifier.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
