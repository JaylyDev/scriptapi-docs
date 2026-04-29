[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockComponentRedstoneUpdateEvent

# Class: BlockComponentRedstoneUpdateEvent

Contains information regarding a specific block redstone
update event.

## Source

```ts
export class BlockComponentRedstoneUpdateEvent extends BlockEvent {
    private constructor();
    readonly powerLevel: number;
    readonly previousPowerLevel: number;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new BlockComponentRedstoneUpdateEvent**(): `BlockComponentRedstoneUpdateEvent`

#### Returns

`BlockComponentRedstoneUpdateEvent`

#### Overrides

[`BlockEvent`](BlockEvent-1.md).[`constructor`](BlockEvent-1.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

Block currently in the world at the location of this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockEvent`](BlockEvent-1.md).[`block`](BlockEvent-1.md#block)

***

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension-1.md)

#### Remarks

Dimension that contains the block that is the subject of
this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockEvent`](BlockEvent-1.md).[`dimension`](BlockEvent-1.md#dimension)

***

### powerLevel

> `readonly` **powerLevel**: `number`

#### Remarks

The redstone signal strength passing through this block. It
is guaranteed to be >= the `min_power` of the block's
'minecraft:redstone_consumer' component.

#### World Ready

This property can't be read in early-execution mode.

***

### previousPowerLevel

> `readonly` **previousPowerLevel**: `number`

#### Remarks

The redstone signal strength from the last tick that was
passing through this block. It is guaranteed to be >= the
`min_power` of the block's 'minecraft:redstone_consumer'
component.

#### World Ready

This property can't be read in early-execution mode.
