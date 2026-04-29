[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / EditorStructureManager

# Class: EditorStructureManager

## Constructors

### Constructor

> `private` **new EditorStructureManager**(): `EditorStructureManager`

#### Returns

`EditorStructureManager`

## Methods

### createEmpty()

> **createEmpty**(`fullName`, `size`): [`EditorStructure`](EditorStructure.md)

#### Parameters

##### fullName

`string`

##### size

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`EditorStructure`](EditorStructure.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### createFromClipboardItem()

> **createFromClipboardItem**(`item`, `fullName`): [`EditorStructure`](EditorStructure.md)

#### Parameters

##### item

[`ClipboardItem`](ClipboardItem.md)

##### fullName

`string`

#### Returns

[`EditorStructure`](EditorStructure.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### deleteStructure()

> **deleteStructure**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getExistingTags()

> **getExistingTags**(): `string`[]

#### Returns

`string`[]

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getStructure()

> **getStructure**(`id`): [`EditorStructure`](EditorStructure.md)

#### Parameters

##### id

`string`

#### Returns

[`EditorStructure`](EditorStructure.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### searchStructures()

> **searchStructures**(`options?`): [`EditorStructure`](EditorStructure.md)[]

#### Parameters

##### options?

[`EditorStructureSearchOptions`](../interfaces/EditorStructureSearchOptions.md)

#### Returns

[`EditorStructure`](EditorStructure.md)[]

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
