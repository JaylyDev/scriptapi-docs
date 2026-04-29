[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / JigsawPlaceOptions

# Interface: JigsawPlaceOptions

Provides additional options for [StructureManager.placeJigsaw](../classes/StructureManager.md#placejigsaw).

## Source

```ts
export interface JigsawPlaceOptions {
    includeEntities?: boolean;
    keepJigsaws?: boolean;
    liquidSettings?: LiquidSettings;
}
```

## Properties

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

> `optional` **liquidSettings?**: [`LiquidSettings`](../enumerations/LiquidSettings.md)

#### Remarks

Specifies how to handle waterloggable blocks overlapping
with existing liquid. Defaults to `ApplyWaterlogging`.
