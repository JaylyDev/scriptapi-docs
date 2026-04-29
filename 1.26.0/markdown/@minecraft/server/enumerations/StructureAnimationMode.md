[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / StructureAnimationMode

# Enumeration: StructureAnimationMode

Specifies how structure blocks should be animated when a
structure is placed.

## Enumeration Members

### Blocks

> **Blocks**: `"Blocks"`

#### Remarks

Blocks will be randomly placed one at at time. Use
@minecraft/server.StructurePlaceOptions.animationSeconds to
control how long it takes for all blocks to be placed.

***

### Layers

> **Layers**: `"Layers"`

#### Remarks

Blocks will be placed one layer at a time from bottom to
top. Use
@minecraft/server.StructurePlaceOptions.animationSeconds to
control how long it takes for all blocks to be placed.

***

### None

> **None**: `"None"`

#### Remarks

All blocks will be placed immediately.
