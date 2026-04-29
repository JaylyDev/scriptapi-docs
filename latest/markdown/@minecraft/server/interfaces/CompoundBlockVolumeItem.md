[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / CompoundBlockVolumeItem

# Interface: CompoundBlockVolumeItem

**`Beta`**

This interface defines an entry into the [CompoundBlockVolume](../classes/CompoundBlockVolume.md) which represents a volume of positive
or negative space.

## Source

```ts
export interface CompoundBlockVolumeItem {
    action?: CompoundBlockVolumeAction;
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    volume: BlockVolume;
}
```

## Properties

### action?

> `optional` **action?**: [`CompoundBlockVolumeAction`](../enumerations/CompoundBlockVolumeAction.md)

#### Remarks

The 'action' defines how the block volume is represented in
the compound block volume stack.
'Add' creates a block volume which is positively selected
'Subtract' creates a block volume which represents a hole or
negative space in the overall compound block volume.

***

### locationRelativity?

> `optional` **locationRelativity?**: [`CompoundBlockVolumePositionRelativity`](../enumerations/CompoundBlockVolumePositionRelativity.md)

#### Remarks

The relativity enumeration determines whether the
BlockVolume specified is positioned relative to the parent
compound block volume origin, or in absolute world space.

***

### volume

> **volume**: [`BlockVolume`](../classes/BlockVolume-1.md)

#### Remarks

The volume of space
