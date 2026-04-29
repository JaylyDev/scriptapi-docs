[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / PrefabTemplateInstance

# Class: PrefabTemplateInstance

## Constructors

### Constructor

> `private` **new PrefabTemplateInstance**(): `PrefabTemplateInstance`

#### Returns

`PrefabTemplateInstance`

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

***

### location

> **location**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

#### Write Privilege

This property can't be edited in read-only mode.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### bakeInstance()

> **bakeInstance**(): `void`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

Error

[PrefabErrorInvalidInstance](PrefabErrorInvalidInstance.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getStructureRefs()

> **getStructureRefs**(): [`PrefabTemplateInstanceStructure`](PrefabTemplateInstanceStructure.md)[]

#### Returns

[`PrefabTemplateInstanceStructure`](PrefabTemplateInstanceStructure.md)[]

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidInstance](PrefabErrorInvalidInstance.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTemplate()

> **getTemplate**(): [`PrefabTemplate`](PrefabTemplate.md)

#### Returns

[`PrefabTemplate`](PrefabTemplate.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidInstance](PrefabErrorInvalidInstance.md)

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.
