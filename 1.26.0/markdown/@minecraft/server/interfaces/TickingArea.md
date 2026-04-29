[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / TickingArea

# Interface: TickingArea

**`Beta`**

A context which provides information about a specific
ticking area.

## Properties

### boundingBox

> **boundingBox**: [`BlockBoundingBox`](BlockBoundingBox-1.md)

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

> **dimension**: [`Dimension`](../classes/Dimension-1.md)

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
