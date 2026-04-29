[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockRecordPlayerComponent

# Class: BlockRecordPlayerComponent

Represents a block that can play a record.

## Extends

- [`BlockComponent`](BlockComponent-1.md)

## Constructors

### Constructor

> `private` **new BlockRecordPlayerComponent**(): `BlockRecordPlayerComponent`

#### Returns

`BlockRecordPlayerComponent`

#### Overrides

[`BlockComponent`](BlockComponent-1.md).[`constructor`](BlockComponent-1.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

Block instance that this component pertains to.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent-1.md).[`block`](BlockComponent-1.md#block)

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent-1.md).[`isValid`](BlockComponent-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent-1.md).[`typeId`](BlockComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:record_player"` = `'minecraft:record_player'`

## Methods

### ejectRecord()

> **ejectRecord**(): `void`

#### Returns

`void`

#### Remarks

Ejects the currently set record of this record-playing
block.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getRecord()

> **getRecord**(): [`ItemStack`](ItemStack-1.md) \| `undefined`

#### Returns

[`ItemStack`](ItemStack-1.md) \| `undefined`

#### Remarks

Gets the currently set record of this record-playing block.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isPlaying()

> **isPlaying**(): `boolean`

#### Returns

`boolean`

#### Remarks

Returns true if the record-playing block is currently
playing a record.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### pauseRecord()

> **pauseRecord**(): `void`

#### Returns

`void`

#### Remarks

Pauses the currently playing record of this record-playing
block.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### playRecord()

> **playRecord**(): `void`

#### Returns

`void`

#### Remarks

Plays the currently set record of this record-playing block.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setRecord()

> **setRecord**(`recordItemType?`, `startPlaying?`): `void`

#### Parameters

##### recordItemType?

`string` \| [`ItemType`](ItemType-1.md)

##### startPlaying?

`boolean`

Defaults to: true

#### Returns

`void`

#### Remarks

Sets and plays a record based on an item type.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
