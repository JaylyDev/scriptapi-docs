[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ItemUseOnEvent

# Class: ItemUseOnEvent

Contains information regarding the use of an item on a
block.

## Source

```ts
export class ItemUseOnEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly itemStack: ItemStack;
}
```

## Extended by

- [`ItemComponentUseOnEvent`](ItemComponentUseOnEvent.md)

## Constructors

### Constructor

> `private` **new ItemUseOnEvent**(): `ItemUseOnEvent`

#### Returns

`ItemUseOnEvent`

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

The block impacted by this event.

#### World Ready

This property can't be read in early-execution mode.

***

### blockFace

> `readonly` **blockFace**: [`Direction`](../enumerations/Direction.md)

#### Remarks

The face of the block that the item was used on.

#### World Ready

This property can't be read in early-execution mode.

***

### faceLocation

> `readonly` **faceLocation**: [`Vector3`](../interfaces/Vector3.md)

#### Remarks

Location relative to the bottom north-west corner of the
block that the item was used on.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack

> `readonly` **itemStack**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack used on the block.

#### World Ready

This property can't be read in early-execution mode.
