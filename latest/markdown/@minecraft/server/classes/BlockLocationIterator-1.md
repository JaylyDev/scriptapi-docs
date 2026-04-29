[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockLocationIterator

# Class: BlockLocationIterator

A BlockLocationIterator returns the next block location of
the block volume across which it is iterating.
The BlockLocationIterator is used to abstract the shape of
the block volume it was fetched from (so it can represent
all the block locations that make up rectangles, cubes,
spheres, lines and complex shapes).
Each iteration pass returns the next valid block location in
the parent shape.
Unless otherwise specified by the parent shape - the
BlockLocationIterator will iterate over a 3D space in the
order of increasing X, followed by increasing Z followed by
increasing Y.
(Effectively stepping across the XZ plane, and when all the
locations in that plane are exhausted, increasing the Y
coordinate to the next XZ slice)

## Source

```ts
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    [Symbol.iterator](): Iterator<Vector3>;
    isValid(): boolean;
    next(): IteratorResult<Vector3>;
}
```

## Implements

- `Iterable`\<[`Vector3`](../interfaces/Vector3-1.md)\>

## Constructors

### Constructor

> `private` **new BlockLocationIterator**(): `BlockLocationIterator`

#### Returns

`BlockLocationIterator`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<[`Vector3`](../interfaces/Vector3-1.md)\>

#### Returns

`Iterator`\<[`Vector3`](../interfaces/Vector3-1.md)\>

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Implementation of

`Iterable.[iterator]`

***

### isValid()

> **isValid**(): `boolean`

**`Beta`**

#### Returns

`boolean`

#### Remarks

Checks if the underlining block volume has been invalidated.
Will return false if the block volume was modified between
creating the iterator and iterating it, and true otherwise.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### next()

> **next**(): `IteratorResult`\<[`Vector3`](../interfaces/Vector3-1.md)\>

#### Returns

`IteratorResult`\<[`Vector3`](../interfaces/Vector3-1.md)\>

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.
