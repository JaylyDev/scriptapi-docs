[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / PrefabTemplateInstanceStructure

# Class: PrefabTemplateInstanceStructure

## Constructors

### Constructor

> `private` **new PrefabTemplateInstanceStructure**(): `PrefabTemplateInstanceStructure`

#### Returns

`PrefabTemplateInstanceStructure`

## Properties

### instanceMirror

> **instanceMirror**: [`StructureMirrorAxis`](../../server/enumerations/StructureMirrorAxis.md)

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

## Methods

### getTemplateStructure()

> **getTemplateStructure**(): [`PrefabTemplateStructure`](PrefabTemplateStructure.md)

#### Returns

[`PrefabTemplateStructure`](PrefabTemplateStructure.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidInstance](PrefabErrorInvalidInstance.md)

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

[PrefabErrorInvalidTemplateStructure](PrefabErrorInvalidTemplateStructure.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.
