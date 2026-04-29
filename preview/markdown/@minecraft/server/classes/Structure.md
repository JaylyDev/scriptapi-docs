[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / Structure

# Class: Structure

Represents a loaded structure template (.mcstructure file).
Structures can be placed in a world using the /structure
command or the [StructureManager](StructureManager.md) APIs.

## Source

```ts
export class Structure {
    private constructor();
    readonly id: string;
    readonly isValid: boolean;
    readonly size: Vector3;
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    getIsWaterlogged(location: Vector3): boolean;
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    saveToWorld(): void;
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}
```

## Constructors

### Constructor

> `private` **new Structure**(): `Structure`

#### Returns

`Structure`

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

The name of the structure. The identifier must include a
namespace. For structures created via the /structure command
or structure blocks, this namespace defaults to
"mystructure".

#### World Ready

This property can't be read in early-execution mode.

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the Structure is valid. The Structure may
become invalid if it is deleted.

#### World Ready

This property can't be read in early-execution mode.

***

### size

> `readonly` **size**: [`Vector3`](../interfaces/Vector3.md)

#### Remarks

The dimensions of the structure. For example, a single block
structure will have a size of {x:1, y:1, z:1}

#### Throws

This property can throw when used.

[InvalidStructureError](InvalidStructureError.md)

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getBlockPermutation()

> **getBlockPermutation**(`location`): [`BlockPermutation`](BlockPermutation.md) \| `undefined`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3.md)

The block location relative to the Structure's origin.

#### Returns

[`BlockPermutation`](BlockPermutation.md) \| `undefined`

Returns a BlockPermutation. Returns undefined if a block
does not exist at the given location.

#### Remarks

Returns a BlockPermutation representing the block contained
within the Structure at the given location.

#### Throws

Throws if the location is outside the structure's bounds.
Throws if the Structure has been deleted.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidStructureError](InvalidStructureError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getIsWaterlogged()

> **getIsWaterlogged**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3.md)

The block location relative to the Structure's origin.

#### Returns

`boolean`

Returns whether the block at the given location is
waterlogged. Returns false if a block does not exist at the
given location.

#### Remarks

Returns whether the block at the given location is
waterlogged.

#### Throws

Throws if the location is outside the structure's bounds.
Throws if the Structure has been deleted.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidStructureError](InvalidStructureError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### saveAs()

> **saveAs**(`identifier`, `saveMode?`): `Structure`

#### Parameters

##### identifier

`string`

The name of the newly created Structure.

##### saveMode?

[`StructureSaveMode`](../enumerations/StructureSaveMode.md)

Determines how the Structure should be saved. Defaults to
saving to the world.
Defaults to: 1

#### Returns

`Structure`

Returns the newly created structure.

#### Remarks

Creates a copy of a Structure and saves it with a new name.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the identifier is invalid. A valid identifier must
include a namespace and must be unique.
Throws if the Structure has been deleted.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidStructureError](InvalidStructureError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### saveToWorld()

> **saveToWorld**(): `void`

#### Returns

`void`

#### Remarks

Saves a modified Structure to the world file.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the Structure has been deleted.

[InvalidStructureError](InvalidStructureError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setBlockPermutation()

> **setBlockPermutation**(`location`, `blockPermutation?`, `waterlogged?`): `void`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3.md)

The block location relative to the Structure's origin.

##### blockPermutation?

[`BlockPermutation`](BlockPermutation.md)

The BlockPermutation to set.
Defaults to: null

##### waterlogged?

`boolean`

Specifies whether the block should be waterlogged. Air and
undefined blocks cannot be waterlogged.
Defaults to: false

#### Returns

`void`

#### Remarks

Sets a BlockPermutation within a Structure.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the type of block is StructureVoid.
Throws if the block is undefined and waterlogged is set to
true.
Throws if the block is air and waterlogged is set to true.
Throws if the location is outside the structure's bounds.
Throws if the Structure has been deleted.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidStructureError](InvalidStructureError.md)

#### World Ready

This function can't be called in early-execution mode.
