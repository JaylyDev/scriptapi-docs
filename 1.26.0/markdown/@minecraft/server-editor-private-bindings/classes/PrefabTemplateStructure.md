[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / PrefabTemplateStructure

# Class: PrefabTemplateStructure

## Constructors

### Constructor

> `private` **new PrefabTemplateStructure**(): `PrefabTemplateStructure`

#### Returns

`PrefabTemplateStructure`

## Properties

### id

> `readonly` **id**: `string`

#### Throws

This property can throw errors.

[PrefabErrorInvalidTemplateStructure](PrefabErrorInvalidTemplateStructure.md)

#### World Ready

This property can't be read in early-execution mode.

***

### instanceMirror

> **instanceMirror**: [`StructureMirrorAxis`](../../server/enumerations/StructureMirrorAxis.md)

#### Remarks

#### Write Privilege

This property can't be edited in read-only mode.

#### World Ready

This property can't be read in early-execution mode.

***

### instanceOffset

> **instanceOffset**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

#### Write Privilege

This property can't be edited in read-only mode.

#### World Ready

This property can't be read in early-execution mode.

***

### instanceRotation

> **instanceRotation**: [`StructureRotation`](../../server/enumerations/StructureRotation.md)

#### Remarks

#### Write Privilege

This property can't be edited in read-only mode.

#### World Ready

This property can't be read in early-execution mode.

***

### structureNormalizedOrigin

> `readonly` **structureNormalizedOrigin**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Throws

This property can throw errors.

[PrefabErrorInvalidTemplateStructure](PrefabErrorInvalidTemplateStructure.md)

#### World Ready

This property can't be read in early-execution mode.

***

### structureOffset

> `readonly` **structureOffset**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Throws

This property can throw errors.

[PrefabErrorInvalidTemplateStructure](PrefabErrorInvalidTemplateStructure.md)

#### World Ready

This property can't be read in early-execution mode.

***

### structureSize

> `readonly` **structureSize**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Throws

This property can throw errors.

[PrefabErrorInvalidTemplateStructure](PrefabErrorInvalidTemplateStructure.md)

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getStructure()

> **getStructure**(): [`EditorStructure`](EditorStructure.md)

#### Returns

[`EditorStructure`](EditorStructure.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidStructure](PrefabErrorInvalidStructure.md)

[PrefabErrorInvalidTemplateStructure](PrefabErrorInvalidTemplateStructure.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.
