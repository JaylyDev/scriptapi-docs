[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ClipboardWriteOptions

# Interface: ClipboardWriteOptions

Interface used to specify the options when a clipboard item
is being written to the world

## Source

```ts
export interface ClipboardWriteOptions {
    excludeAirBlocks?: boolean;
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    offset?: minecraftserver.Vector3;
    rotation?: minecraftserver.StructureRotation;
}
```

## Properties

### excludeAirBlocks?

> `optional` **excludeAirBlocks?**: `boolean`

***

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
