[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IModalToolContainer

# Interface: IModalToolContainer

## Properties

### currentTools

> `readonly` **currentTools**: [`IModalTool`](IModalTool.md)[]

#### Remarks

Tools within this container.

***

### onSelectedToolChanged

> **onSelectedToolChanged**: [`EventSink`](EventSink.md)\<[`SelectedModalToolChangedEventPayload`](../type-aliases/SelectedModalToolChangedEventPayload.md)\>

#### Remarks

Provides events when the selected modal tool changes.

## Methods

### addTool()

> **addTool**(`id`, `params`): [`IModalTool`](IModalTool.md)

#### Parameters

##### id

`string`

Unique identifier for the tool

##### params

[`ModalToolCreationParameters`](ModalToolCreationParameters.md)

Construction parameters for the new tool

#### Returns

[`IModalTool`](IModalTool.md)

#### Remarks

Create a new tool in the modal tool container represented
via button on the tool rail.

***

### focusToolInputContext()

> **focusToolInputContext**(): `void`

#### Returns

`void`

#### Remarks

Activates input bindings for the selected tool by enabling
viewport focus

***

### getSelectedToolId()

> **getSelectedToolId**(): `string` \| `undefined`

#### Returns

`string` \| `undefined`

#### Remarks

Returns identifier of the selected tool.

***

### removeTool()

> **removeTool**(`id`): `void`

#### Parameters

##### id

`string`

Name of the tool to remove.

#### Returns

`void`

#### Remarks

Remove an existing tool by id from the tool container

***

### setSelectedToolId()

> **setSelectedToolId**(`id`): `void`

#### Parameters

##### id

`string` \| `undefined`

Identifier of the tool

#### Returns

`void`

#### Remarks

Selects a tool in the container.
