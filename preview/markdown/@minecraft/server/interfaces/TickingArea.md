[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / TickingArea

# Interface: TickingArea

A context which provides information about a specific
ticking area.

## Source

```ts
export interface TickingArea {
    boundingBox: BlockBoundingBox;
    chunkCount: number;
    dimension: Dimension;
    identifier: string;
    isFullyLoaded: boolean;
}
```

## Properties

### boundingBox

> **boundingBox**: [`BlockBoundingBox`](BlockBoundingBox.md)

#### Remarks

The box which contains all the ticking blocks in the ticking
area.

***

### chunkCount

> **chunkCount**: `number`

#### Remarks

The number of chunks that the ticking area contains.

***

### dimension

> **dimension**: [`Dimension`](../classes/Dimension.md)

#### Remarks

The dimension the ticking area is located.

***

### identifier

> **identifier**: `string`

#### Remarks

The unique identifier of the ticking area.

***

### isFullyLoaded

> **isFullyLoaded**: `boolean`

#### Remarks

Will be true if all the ticking areas chunks are loaded in
ticking and false otherwise.
