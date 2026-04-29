[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-bindings](../README.md) / ClipboardWriteOptions

# Interface: ClipboardWriteOptions

Interface used to specify the options when a clipboard item
is being written to the world

## Properties

### mirror?

> `optional` **mirror?**: [`StructureMirrorAxis`](../../server/enumerations/StructureMirrorAxis.md)

#### Remarks

An enum which represents the axis (or combination of axis')
along which the item should be mirrored
- X
- Z
- XZ

***

### normalizedOrigin?

> `optional` **normalizedOrigin?**: [`Vector3`](../../server/interfaces/Vector3.md)

***

### offset?

> `optional` **offset?**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

A position offset which should be applied to the paste
location while the clipboard item is being written

***

### rotation?

> `optional` **rotation?**: [`StructureRotation`](../../server/enumerations/StructureRotation.md)

#### Remarks

An enum representing the rotation around the Y-Axis which
should be applied while the clipboard item is being written
