[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockHitInformation

# Interface: BlockHitInformation

Contains more information for events where a block is hit.

## Source

```ts
export interface BlockHitInformation {
    block: Block;
    face: Direction;
    faceLocation: Vector3;
}
```

## Properties

### block

> **block**: [`Block`](../classes/Block-1.md)

#### Remarks

Block that was hit.

***

### face

> **face**: [`Direction`](../enumerations/Direction-1.md)

#### Remarks

Face of the block that was hit.

***

### faceLocation

> **faceLocation**: [`Vector3`](Vector3-1.md)

#### Remarks

Location relative to the bottom north-west corner of the
block.
