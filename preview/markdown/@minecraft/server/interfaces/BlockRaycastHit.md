[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockRaycastHit

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

> **block**: [`Block`](../classes/Block.md)

#### Remarks

Block that was hit.

***

### face

> **face**: [`Direction`](../enumerations/Direction.md)

#### Remarks

Face of the block that was hit.

***

### faceLocation

> **faceLocation**: [`Vector3`](Vector3.md)

#### Remarks

Hit location relative to the bottom north-west corner of the
block.
