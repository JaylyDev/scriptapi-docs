[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ContainerSlot

# Class: ContainerSlot

Represents a slot within a broader container (e.g., entity
inventory.)

## Examples

```js
import { world, EquipmentSlot } from "@minecraft/server";

const player = world.getPlayers()[0];
const equippable = player.getComponent("equippable");
const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
```

```js
import { world } from "@minecraft/server";

const player = world.getPlayers()[0];
const inventory = player.getComponent("inventory");
const slot = inventory.container.getSlot(player.selectedSlotIndex);
```

## Constructors

### Constructor

> `private` **new ContainerSlot**(): `ContainerSlot`

#### Returns

`ContainerSlot`

## Properties

### amount

> **amount**: `number`

#### Remarks

Number of the items in the stack. Valid values range between
1-255. The provided value will be clamped to the item's
maximum stack size.

This property can't be edited in restricted-execution mode.

#### Throws

Throws if the value is outside the range of 1-255.

#### World Ready

This property can't be read in early-execution mode.

***

### isStackable

> `readonly` **isStackable**: `boolean`

#### Remarks

Returns whether the item is stackable. An item is considered
stackable if the item's maximum stack size is greater than 1
and the item does not contain any custom data or properties.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the ContainerSlot is valid. The container
slot is valid if the container exists and is loaded, and the
slot index is valid.

#### World Ready

This property can't be read in early-execution mode.

***

### keepOnDeath

> **keepOnDeath**: `boolean`

#### Remarks

Gets or sets whether the item is kept on death.

This property can't be edited in restricted-execution mode.

#### Throws

Throws if the slot's container is invalid.

#### World Ready

This property can't be read in early-execution mode.

***

### lockMode

> **lockMode**: [`ItemLockMode`](../enumerations/ItemLockMode.md)

#### Remarks

Gets or sets the item's lock mode. The default value is
`ItemLockMode.none`.

This property can't be edited in restricted-execution mode.

#### Throws

Throws if the slot's container is invalid.

#### World Ready

This property can't be read in early-execution mode.

***

### maxAmount

> `readonly` **maxAmount**: `number`

#### Remarks

The maximum stack size. This value varies depending on the
type of item. For example, torches have a maximum stack size
of 64, while eggs have a maximum stack size of 16.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### nameTag?

> `optional` **nameTag?**: `string`

#### Remarks

Given name of this stack of items. The name tag is displayed
when hovering over the item. Setting the name tag to an
empty string or `undefined` will remove the name tag.

This property can't be edited in restricted-execution mode.

#### Throws

Throws if the slot's container is invalid. Also throws if
the length exceeds 255 characters.

#### World Ready

This property can't be read in early-execution mode.

***

### type

> `readonly` **type**: [`ItemType`](ItemType.md)

#### Remarks

The type of the item.

#### Throws

Throws if the slot's container is invalid.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the type of items for the stack. If a
namespace is not specified, 'minecraft:' is assumed.
Examples include 'wheat' or 'apple'.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This property can't be read in early-execution mode.

## Methods

### clearDynamicProperties()

> **clearDynamicProperties**(): `void`

#### Returns

`void`

#### Remarks

Clears all dynamic properties that have been set on this
item stack.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getCanDestroy()

> **getCanDestroy**(): `string`[]

#### Returns

`string`[]

#### Remarks

Returns whether the item within this container slot can be
destroyed.

#### Throws

This function can throw errors.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getCanPlaceOn()

> **getCanPlaceOn**(): `string`[]

#### Returns

`string`[]

#### Remarks

Returns if the item in this container slot can be placed on.

#### Throws

This function can throw errors.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getDynamicProperty()

> **getDynamicProperty**(`identifier`): `string` \| `number` \| `boolean` \| [`Vector3`](../interfaces/Vector3.md) \| `undefined`

#### Parameters

##### identifier

`string`

The property identifier.

#### Returns

`string` \| `number` \| `boolean` \| [`Vector3`](../interfaces/Vector3.md) \| `undefined`

Returns the value for the property, or undefined if the
property has not been set.

#### Remarks

Returns a property value.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getDynamicPropertyIds()

> **getDynamicPropertyIds**(): `string`[]

#### Returns

`string`[]

A string array of the dynamic properties set on this entity.

#### Remarks

Returns the available set of dynamic property identifiers
that have been used on this item stack.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getDynamicPropertyTotalByteCount()

> **getDynamicPropertyTotalByteCount**(): `number`

#### Returns

`number`

#### Remarks

Returns the total size, in bytes, of all the dynamic
properties that are currently stored for this entity. This
includes the size of both the key and the value.  This can
be useful for diagnosing performance warning signs - if, for
example, an entity has many megabytes of associated dynamic
properties, it may be slow to load on various devices.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getItem()

> **getItem**(): [`ItemStack`](ItemStack.md) \| `undefined`

#### Returns

[`ItemStack`](ItemStack.md) \| `undefined`

Returns a copy of the item in the slot. Returns undefined if
the slot is empty.

#### Remarks

Creates an exact copy of the item stack, including any
custom data or properties.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getLore()

> **getLore**(): `string`[]

#### Returns

`string`[]

An array of lore strings. If the item does not have lore,
returns an empty array.

#### Remarks

Returns the lore value - a secondary display string - for an
ItemStack.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getRawLore()

> **getRawLore**(): [`RawMessage`](../interfaces/RawMessage.md)[]

#### Returns

[`RawMessage`](../interfaces/RawMessage.md)[]

An array of lore lines. If the item does not have lore,
returns an empty array.

#### Remarks

Returns the lore value - a secondary display string - for an
ItemStack. String lore lines will be converted to a [RawMessage](../interfaces/RawMessage.md) and put under [RawMessage.text](../interfaces/RawMessage.md#text).

#### Throws

This function can throw errors.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTags()

> **getTags**(): `string`[]

#### Returns

`string`[]

Returns all tags for the item in the slot. Return an empty
array if the the slot is empty.

#### Remarks

Returns all tags for the item in the slot.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### hasItem()

> **hasItem**(): `boolean`

#### Returns

`boolean`

#### Remarks

Returns true if this slot has an item.

#### Throws

This function can throw errors.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### hasTag()

> **hasTag**(`tag`): `boolean`

#### Parameters

##### tag

`string`

The item tag.

#### Returns

`boolean`

Returns false when the slot is empty or the item in the slot
does not have the given tag.

#### Remarks

Returns whether the item in the slot slot has the given tag.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### isStackableWith()

> **isStackableWith**(`itemStack`): `boolean`

#### Parameters

##### itemStack

[`ItemStack`](ItemStack.md)

The ItemStack that is being compared.

#### Returns

`boolean`

Returns whether this item stack can be stacked with the
given `itemStack`.

#### Remarks

Returns whether this item stack can be stacked with the
given `itemStack`. This is determined by comparing the item
type and any custom data and properties associated with the
item stacks. The amount of each item stack is not taken into
consideration.

#### Throws

Throws if the slot's container is invalid.

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setCanDestroy()

> **setCanDestroy**(`blockIdentifiers?`): `void`

#### Parameters

##### blockIdentifiers?

`string`[]

The list of blocks, given by their identifiers.

#### Returns

`void`

#### Remarks

The list of block types this item can break in Adventure
mode. The block names are displayed in the item's tooltip.
Setting the value to undefined will clear the list.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the slot's container is invalid. Also throws if
any of the provided block identifiers are invalid.

Error

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setCanPlaceOn()

> **setCanPlaceOn**(`blockIdentifiers?`): `void`

#### Parameters

##### blockIdentifiers?

`string`[]

The list of blocks, given by their identifiers.

#### Returns

`void`

#### Remarks

The list of block types this item can be placed on in
Adventure mode. This is only applicable to block items. The
block names are displayed in the item's tooltip. Setting the
value to undefined will clear the list.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the slot's container is invalid. Also throws if
any of the provided block identifiers are invalid.

Error

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setDynamicProperties()

> **setDynamicProperties**(`values`): `void`

#### Parameters

##### values

`Record`\<`string`, `boolean` \| `number` \| `string` \| [`Vector3`](../interfaces/Vector3.md) \| `undefined`\>

A Record of key value pairs of the dynamic properties to
set. If the data value is null, it will remove that property
instead.

#### Returns

`void`

#### Remarks

Sets multiple dynamic properties with specific values.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[InvalidContainerSlotError](InvalidContainerSlotError.md)

minecraftcommon.UnsupportedFunctionalityError

#### World Ready

This function can't be called in early-execution mode.

***

### setDynamicProperty()

> **setDynamicProperty**(`identifier`, `value?`): `void`

#### Parameters

##### identifier

`string`

The property identifier.

##### value?

`string` \| `number` \| `boolean` \| [`Vector3`](../interfaces/Vector3.md)

Data value of the property to set. If the value is null, it
will remove the property instead.

#### Returns

`void`

#### Remarks

Sets a specified property to a value.

#### Throws

Throws if the slot's container is invalid.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[InvalidContainerSlotError](InvalidContainerSlotError.md)

minecraftcommon.UnsupportedFunctionalityError

#### World Ready

This function can't be called in early-execution mode.

***

### setItem()

> **setItem**(`itemStack?`): `void`

#### Parameters

##### itemStack?

[`ItemStack`](ItemStack.md)

The ItemStack to be placed in the slot.

#### Returns

`void`

#### Remarks

Sets the given ItemStack in the slot, replacing any existing
item.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the slot's container is invalid.

[ContainerRulesError](ContainerRulesError.md)

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setLore()

> **setLore**(`loreList?`): `void`

#### Parameters

##### loreList?

(`string` \| [`RawMessage`](../interfaces/RawMessage.md))[]

A list of lore strings. Setting this argument to undefined
will clear the lore.

#### Returns

`void`

#### Remarks

Sets the lore value - a secondary display string - for an
ItemStack.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the slot's container is invalid.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

Error

[InvalidContainerSlotError](InvalidContainerSlotError.md)

#### World Ready

This function can't be called in early-execution mode.
