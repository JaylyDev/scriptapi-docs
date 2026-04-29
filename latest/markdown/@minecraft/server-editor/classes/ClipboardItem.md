[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ClipboardItem

# Class: ClipboardItem

A ClipboardItem is a handle to an object which represents a
set of blocks in a contained bounding area (most likely
copied from the world)

## Source

```ts
export class ClipboardItem {
    private constructor();
    readonly id: string;
    readonly isEmpty: boolean;
    readonly normalizedOrigin: minecraftserver.Vector3;
    readonly originalWorldLocation: minecraftserver.Vector3;
    readonly size: minecraftserver.Vector3;
    clear(): void;
    getPredictedWriteVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): RelativeVolumeListBlockVolume;
    readFromStructure(structure: EditorStructure): void;
    readFromWorld(source: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume): void;
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
}
```

## Constructors

### Constructor

> `private` **new ClipboardItem**(): `ClipboardItem`

#### Returns

`ClipboardItem`

## Properties

### id

> `readonly` **id**: `string`

***

### isEmpty

> `readonly` **isEmpty**: `boolean`

#### Remarks

Return whether there is any block content in the item

#### World Ready

This property can't be read in early-execution mode.

***

### normalizedOrigin

> `readonly` **normalizedOrigin**: [`Vector3`](../../server/interfaces/Vector3.md)

***

### originalWorldLocation

> `readonly` **originalWorldLocation**: [`Vector3`](../../server/interfaces/Vector3.md)

***

### size

> `readonly` **size**: [`Vector3`](../../server/interfaces/Vector3.md)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Remarks

Clear the contents of the item

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getPredictedWriteVolume()

> **getPredictedWriteVolume**(`location`, `options?`): [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### options?

[`ClipboardWriteOptions`](../interfaces/ClipboardWriteOptions.md)

#### Returns

[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### readFromStructure()

> **readFromStructure**(`structure`): `void`

#### Parameters

##### structure

[`EditorStructure`](EditorStructure.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### readFromWorld()

> **readFromWorld**(`source`): `void`

#### Parameters

##### source

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Returns

`void`

#### Remarks

Copy the contents of a rectangular volume into the Clipboard
Item

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### writeToWorld()

> **writeToWorld**(`location`, `options?`): `boolean`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

The root point of the world location to which the
ClipboardItem is written (this is modified by the various
anchor, offset and rotation parameters of the [ClipboardWriteOptions](../interfaces/ClipboardWriteOptions.md)

##### options?

[`ClipboardWriteOptions`](../interfaces/ClipboardWriteOptions.md)

An optional set of write parameters which modify the
properties of the ClipboardItem as it is applied to the
world

#### Returns

`boolean`

Success or Failure

#### Remarks

Apply the contents of a ClipboardItem to the world at a
given location using a set of write options

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
