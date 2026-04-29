[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / StructureCreateOptions

# Interface: StructureCreateOptions

Provides additional options for [StructureManager.createFromWorld](../classes/StructureManager-1.md#createfromworld)

## Source

```ts
export interface StructureCreateOptions {
    includeBlocks?: boolean;
    includeEntities?: boolean;
    saveMode?: StructureSaveMode;
}
```

## Properties

### includeBlocks?

> `optional` **includeBlocks?**: `boolean`

#### Remarks

Whether blocks should be included in the structure. Defaults
to true.

***

### includeEntities?

> `optional` **includeEntities?**: `boolean`

#### Remarks

Whether entities should be included in the structure.
Defaults to true.

***

### saveMode?

> `optional` **saveMode?**: [`StructureSaveMode`](../enumerations/StructureSaveMode-1.md)

#### Remarks

How the Structure should be saved. Defaults to
StructureSaveMode.World.
