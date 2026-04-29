[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / PrefabTemplate

# Class: PrefabTemplate

## Constructors

### Constructor

> `private` **new PrefabTemplate**(): `PrefabTemplate`

#### Returns

`PrefabTemplate`

## Properties

### description

> **description**: `string`

#### Remarks

#### Write Privilege

This property can't be edited in read-only mode.

#### World Ready

This property can't be read in early-execution mode.

***

### displayName

> **displayName**: `string`

#### Remarks

#### Write Privilege

This property can't be edited in read-only mode.

#### World Ready

This property can't be read in early-execution mode.

***

### instanceCount

> `readonly` **instanceCount**: `number`

#### Throws

This property can throw errors.

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### name

> `readonly` **name**: `string`

#### Throws

This property can throw errors.

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

#### World Ready

This property can't be read in early-execution mode.

***

### notes

> **notes**: `string`

#### Remarks

#### Write Privilege

This property can't be edited in read-only mode.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`PrefabSource`](../enumerations/PrefabSource.md)

#### Throws

This property can throw errors.

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

#### World Ready

This property can't be read in early-execution mode.

## Methods

### addStructure()

> **addStructure**(`structure`, `options?`): [`PrefabTemplateStructure`](PrefabTemplateStructure.md)

#### Parameters

##### structure

[`EditorStructure`](EditorStructure.md)

##### options?

[`PrefabTemplateAddStructureOptions`](../interfaces/PrefabTemplateAddStructureOptions.md)

#### Returns

[`PrefabTemplateStructure`](PrefabTemplateStructure.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

Error

[PrefabErrorInvalidStructure](PrefabErrorInvalidStructure.md)

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

[PrefabErrorValueOutOfBounds](PrefabErrorValueOutOfBounds.md)

#### World Ready

This function can't be called in early-execution mode.

***

### createInstance()

> **createInstance**(`location`, `options?`): [`PrefabTemplateInstance`](PrefabTemplateInstance.md)

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### options?

[`PrefabTemplateCreateInstanceOptions`](../interfaces/PrefabTemplateCreateInstanceOptions.md)

#### Returns

[`PrefabTemplateInstance`](PrefabTemplateInstance.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

Error

[PrefabErrorInvalidInstance](PrefabErrorInvalidInstance.md)

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getMetadata()

> **getMetadata**(): [`PrefabTemplateMetadata`](../interfaces/PrefabTemplateMetadata.md)

#### Returns

[`PrefabTemplateMetadata`](../interfaces/PrefabTemplateMetadata.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTags()

> **getTags**(): `string`[]

#### Returns

`string`[]

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTemplateStructures()

> **getTemplateStructures**(): [`PrefabTemplateStructure`](PrefabTemplateStructure.md)[]

#### Returns

[`PrefabTemplateStructure`](PrefabTemplateStructure.md)[]

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

Error

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

#### World Ready

This function can't be called in early-execution mode.

***

### removeStructure()

> **removeStructure**(`templateStructure`): `void`

#### Parameters

##### templateStructure

[`PrefabTemplateStructure`](PrefabTemplateStructure.md)

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

[PrefabErrorInvalidTemplateStructure](PrefabErrorInvalidTemplateStructure.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setName()

> **setName**(`newName`): `void`

#### Parameters

##### newName

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidName](PrefabErrorInvalidName.md)

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

[PrefabServiceError](PrefabServiceError.md)

[PrefabTemplateExists](PrefabTemplateExists.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setTags()

> **setTags**(`newTags`): `void`

#### Parameters

##### newTags

`string`[]

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

[PrefabErrorStringInvalidLength](PrefabErrorStringInvalidLength.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.
