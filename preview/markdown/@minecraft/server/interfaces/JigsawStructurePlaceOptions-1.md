[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / JigsawStructurePlaceOptions

# Interface: JigsawStructurePlaceOptions

Provides additional options for [StructureManager.placeJigsawStructure](../classes/StructureManager-1.md#placejigsawstructure).

## Source

```ts
export interface JigsawStructurePlaceOptions {
    ignoreStartHeight?: boolean;
    includeEntities?: boolean;
    keepJigsaws?: boolean;
    liquidSettings?: LiquidSettings;
}
```

## Properties

### ignoreStartHeight?

> `optional` **ignoreStartHeight?**: `boolean`

#### Remarks

Whether the start height defined in the jigsaw structure
definition should be ignored and overridden with the
specified y coordinate. Defaults to false.

***

### includeEntities?

> `optional` **includeEntities?**: `boolean`

#### Remarks

Whether entities should be included in the structure.
Defaults to true.

***

### keepJigsaws?

> `optional` **keepJigsaws?**: `boolean`

#### Remarks

Whether the jigsaw blocks should be kept when generating the
structure. Defaults to false.

***

### liquidSettings?

> `optional` **liquidSettings?**: [`LiquidSettings`](../enumerations/LiquidSettings-1.md)

#### Remarks

Specifies how to handle waterloggable blocks overlapping
with existing liquid. Defaults to `ApplyWaterlogging`.
