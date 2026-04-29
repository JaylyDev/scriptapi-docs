[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockRaycastHit

# Interface: BlockRaycastHit

Contains information for block raycast hit results.

## Source

```ts
export interface BlockRaycastHit {
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

Hit location relative to the bottom north-west corner of the
block.
