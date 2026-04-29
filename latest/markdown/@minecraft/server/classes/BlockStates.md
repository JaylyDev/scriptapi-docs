[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / BlockStates

# Class: BlockStates

Enumerates all [BlockStateType](BlockStateType.md)s.

## Source

```ts
export class BlockStates {
    private constructor();
    static get(stateName: string): BlockStateType | undefined;
    static getAll(): BlockStateType[];
}
```

## Constructors

### Constructor

> `private` **new BlockStates**(): `BlockStates`

#### Returns

`BlockStates`

## Methods

### get()

> `static` **get**(`stateName`): [`BlockStateType`](BlockStateType.md) \| `undefined`

#### Parameters

##### stateName

`string`

#### Returns

[`BlockStateType`](BlockStateType.md) \| `undefined`

Returns the [Block](Block.md) state instance if it is found. If
the block state instance is not found returns undefined.

#### Remarks

Retrieves a specific block state instance.

#### World Ready

This function can't be called in early-execution mode.

***

### getAll()

> `static` **getAll**(): [`BlockStateType`](BlockStateType.md)[]

#### Returns

[`BlockStateType`](BlockStateType.md)[]

#### Remarks

Retrieves a set of all available block states.

#### World Ready

This function can't be called in early-execution mode.
