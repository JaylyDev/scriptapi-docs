[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / StructurePlaceOptions

# Interface: StructurePlaceOptions

Provides additional options for [StructureManager.place](../classes/StructureManager-1.md#place)

## Source

```ts
export interface StructurePlaceOptions {
    animationMode?: StructureAnimationMode;
    animationSeconds?: number;
    includeBlocks?: boolean;
    includeEntities?: boolean;
    integrity?: number;
    integritySeed?: string;
    mirror?: StructureMirrorAxis;
    rotation?: StructureRotation;
    waterlogged?: boolean;
}
```

## Properties

### animationMode?

> `optional` **animationMode?**: [`StructureAnimationMode`](../enumerations/StructureAnimationMode-1.md)

#### Remarks

How the Structure should be animated when placed.

***

### animationSeconds?

> `optional` **animationSeconds?**: `number`

#### Remarks

How many seconds the animation should take.

***

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

### integrity?

> `optional` **integrity?**: `number`

#### Remarks

What percentage of blocks should be placed. A value of 1
will place 100% of the blocks while a value of 0 will place
none. The blocks are chosen randomly based on the [StructurePlaceOptions.integritySeed](#integrityseed).

***

### integritySeed?

> `optional` **integritySeed?**: `string`

#### Remarks

Seed that determines which blocks are randomly chosen to be
placed. Defaults to a random seed.

***

### mirror?

> `optional` **mirror?**: [`StructureMirrorAxis`](../enumerations/StructureMirrorAxis-1.md)

#### Remarks

Which axes the Structure should be mirrored on when placed.
Defaults to StructureMirrorAxis.None.

***

### rotation?

> `optional` **rotation?**: [`StructureRotation`](../enumerations/StructureRotation-1.md)

#### Remarks

How the Structure should be rotated when placed. Defaults to
AxisAlignedRotation.None.

***

### waterlogged?

> `optional` **waterlogged?**: `boolean`

#### Remarks

Whether the structure should be waterlogged when placed.
Defaults to false. If true, blocks will become waterlogged
when placed in water.
