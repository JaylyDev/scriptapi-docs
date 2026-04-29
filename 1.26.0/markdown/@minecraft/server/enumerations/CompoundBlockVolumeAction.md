[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / CompoundBlockVolumeAction

# Enumeration: CompoundBlockVolumeAction

**`Beta`**

The Action enum determines how the CompoundBlockVolume
considers the associated CompoundBlockVolumeItem when
performing inside/outside calculations.

## Enumeration Members

### Add

> **Add**: `0`

#### Remarks

The associated BlockVolume is considered a positive space,
and any intersection tests are considered hits

***

### Subtract

> **Subtract**: `1`

#### Remarks

The associated BlockVolume is considered a negative or void
space, and any intersection tests are considered misses.
Using the Subtract action, it is possible to `punch holes`
in block volumes so that any intersection tests may pass
through such spaces
