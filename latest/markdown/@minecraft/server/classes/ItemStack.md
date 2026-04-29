[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ItemStack

# Class: ItemStack

Defines a collection of items.

## Examples

```typescript
import { ItemStack, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function itemStacks(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
  const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
  const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };

  const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1);
  const onePickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe, 1);
  const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5);

  log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
  targetLocation.dimension.spawnItem(oneEmerald, oneItemLoc);

  log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
  targetLocation.dimension.spawnItem(fiveEmeralds, fiveItemsLoc);

  log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
  targetLocation.dimension.spawnItem(onePickaxe, diamondPickaxeLoc);
}
```

```typescript
import { world, ItemStack, EntityEquippableComponent, EquipmentSlot, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function givePlayerEquipment(
    targetLocation: DimensionLocation
) {
  const players = world.getAllPlayers();

  const armorStandLoc = { x: targetLocation.x, y: targetLocation.y, z: targetLocation.z + 4 };
  const armorStand = players[0].dimension.spawnEntity(MinecraftItemTypes.ArmorStand, armorStandLoc);

  const equipmentCompPlayer = players[0].getComponent(EntityComponentTypes.Equippable) as EntityEquippableComponent;
  if (equipmentCompPlayer) {
    equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
    equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
    equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
    equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
    equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
    equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
  }

  const equipmentCompArmorStand = armorStand.getComponent(EntityComponentTypes.Equippable) as EntityEquippableComponent;
  if (equipmentCompArmorStand) {
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
  }
}
```

```typescript
import { ItemStack, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function spawnFeatherItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);

  targetLocation.dimension.spawnItem(featherItem, targetLocation);
  log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
}
```

## Source

```ts
export class ItemStack {
    amount: number;
    readonly isStackable: boolean;
    keepOnDeath: boolean;
    readonly localizationKey: string;
    lockMode: ItemLockMode;
    readonly maxAmount: number;
    nameTag?: string;
    readonly 'type': ItemType;
    readonly typeId: string;
    readonly weight: number;
    constructor(itemType: ItemType | string, amount?: number);
    clearDynamicProperties(): void;
    clone(): ItemStack;
    getCanDestroy(): string[];
    getCanPlaceOn(): string[];
    getComponent<T extends string>(componentId: T): ItemComponentReturnType<T> | undefined;
    getComponents(): ItemComponent[];
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    getLore(): string[];
    getRawLore(): RawMessage[];
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    isStackableWith(itemStack: ItemStack): boolean;
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;
    setCanDestroy(blockIdentifiers?: string[]): void;
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    setLore(loreList?: (RawMessage | string)[]): void;
}
```

## Constructors

### Constructor

> **new ItemStack**(`itemType`, `amount?`): `ItemStack`

#### Parameters

##### itemType

`string` \| [`ItemType`](ItemType.md)

Type of item to create. See the @minecraft/vanilla-data.MinecraftItemTypes enumeration for
a list of standard item types in Minecraft experiences.

##### amount?

`number`

Number of items to place in the stack, between 1-255. The
provided value will be clamped to the item's maximum stack
size. Note that certain items can only have one item in the
stack.
Defaults to: 1
Bounds: [1, 255]

#### Returns

`ItemStack`

#### Remarks

Creates a new instance of a stack of items for use in the
world.

#### Throws

Throws if `itemType` is invalid, or if `amount` is outside
the range of 1-255.

## Properties

### amount

> **amount**: `number`

#### Remarks

Number of the items in the stack. Valid values range between
1-255. The provided value will be clamped to the item's
maximum stack size.

This property can't be edited in restricted-execution mode.

Bounds: [1, 255]

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

#### World Ready

This property can't be read in early-execution mode.

***

### keepOnDeath

> **keepOnDeath**: `boolean`

#### Remarks

Gets or sets whether the item is kept on death.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### localizationKey

> `readonly` **localizationKey**: `string`

#### Remarks

Key for the localization of this items's name used in .lang
files.

#### Throws

This property can throw when used.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### lockMode

> **lockMode**: [`ItemLockMode`](../enumerations/ItemLockMode.md)

#### Remarks

Gets or sets the item's lock mode. The default value is
`ItemLockMode.none`.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### maxAmount

> `readonly` **maxAmount**: `number`

#### Remarks

The maximum stack size. This value varies depending on the
type of item. For example, torches have a maximum stack size
of 64, while eggs have a maximum stack size of 16.

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

Throws if the length exceeds 255 characters.

#### World Ready

This property can't be read in early-execution mode.

***

### type

> `readonly` **type**: [`ItemType`](ItemType.md)

#### Remarks

The type of the item.

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the type of items for the stack. If a
namespace is not specified, 'minecraft:' is assumed.
Examples include 'wheat' or 'apple'.

#### World Ready

This property can't be read in early-execution mode.

***

### weight

> `readonly` **weight**: `number`

#### Remarks

The total weight of all items in the stack plus the weight
of all items in the items container which is defined with
the `Storage Item` component. The weight per item can be
modified by the `Storage Weight Modifier` component.

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

#### World Ready

This function can't be called in early-execution mode.

***

### clone()

> **clone**(): `ItemStack`

#### Returns

`ItemStack`

Returns a copy of this item stack.

#### Remarks

Creates an exact copy of the item stack, including any
custom data or properties.

#### World Ready

This function can't be called in early-execution mode.

***

### getCanDestroy()

> **getCanDestroy**(): `string`[]

#### Returns

`string`[]

#### Remarks

Get the list of block types this item can break in Adventure
mode.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getCanPlaceOn()

> **getCanPlaceOn**(): `string`[]

#### Returns

`string`[]

#### Remarks

Get the list of block types this item can be placed on in
Adventure mode.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getComponent()

> **getComponent**\<`T`\>(`componentId`): [`ItemComponentReturnType`](../type-aliases/ItemComponentReturnType.md)\<`T`\> \| `undefined`

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### componentId

`T`

The identifier of the component (e.g., 'minecraft:food'). If
no namespace prefix is specified, 'minecraft:' is assumed.
Available component IDs are those in the [ItemComponentTypes](../enumerations/ItemComponentTypes.md) enum and custom component IDs registered
with the [ItemComponentRegistry](ItemComponentRegistry.md).

#### Returns

[`ItemComponentReturnType`](../type-aliases/ItemComponentReturnType.md)\<`T`\> \| `undefined`

Returns the component if it exists on the item stack,
otherwise undefined.

#### Remarks

Gets a component (that represents additional capabilities)
for an item stack.

#### Examples

```typescript
import { world, ItemStack, EntityInventoryComponent, EntityComponentTypes, ItemComponentTypes, ItemDurabilityComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function giveHurtDiamondSword(
    targetLocation: DimensionLocation
) {
  const hurtDiamondSword = new ItemStack(MinecraftItemTypes.DiamondSword);

  const durabilityComponent = hurtDiamondSword.getComponent(ItemComponentTypes.Durability) as ItemDurabilityComponent;

  if (durabilityComponent !== undefined) {
    durabilityComponent.damage = durabilityComponent.maxDurability / 2;
  }

  for (const player of world.getAllPlayers()) {
    const inventory = player.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
    if (inventory && inventory.container) {
      inventory.container.addItem(hurtDiamondSword);
    }
  }
}
```

```js
import { world } from "@minecraft/server";

const player = world.getPlayers()[0];
const inventory = player.getComponent("inventory");
const slot = inventory.container.getSlot(player.selectedSlotIndex);
let durabilityComp = slot.getItem().getComponent("durability");
player.sendMessage(
"Item Durability: " + (durabilityComp.maxDurability - durabilityComp.damage) + "/" + durabilityComp.maxDurability
);
```

#### World Ready

This function can't be called in early-execution mode.

***

### getComponents()

> **getComponents**(): [`ItemComponent`](ItemComponent.md)[]

#### Returns

[`ItemComponent`](ItemComponent.md)[]

#### Remarks

Returns all scripting components that are present on this
item stack.

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
that have been used on this entity.

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

#### World Ready

This function can't be called in early-execution mode.

***

### getLore()

> **getLore**(): `string`[]

#### Returns

`string`[]

An array of lore lines. If the item does not have lore,
returns an empty array.

#### Remarks

Returns the lore value - a secondary display string - for an
ItemStack.

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

#### World Ready

This function can't be called in early-execution mode.

***

### getTags()

> **getTags**(): `string`[]

#### Returns

`string`[]

#### Remarks

Returns a set of tags associated with this item stack.

#### World Ready

This function can't be called in early-execution mode.

***

### hasComponent()

> **hasComponent**(`componentId`): `boolean`

#### Parameters

##### componentId

`string`

The identifier of the component (e.g., 'minecraft:food') to
retrieve. If no namespace prefix is specified, 'minecraft:'
is assumed.

#### Returns

`boolean`

#### Remarks

Returns true if the specified component is present on this
item stack.

#### World Ready

This function can't be called in early-execution mode.

***

### hasTag()

> **hasTag**(`tag`): `boolean`

#### Parameters

##### tag

`string`

Tag to search for.

#### Returns

`boolean`

True if the Item Stack has the tag associated with it, else
false.

#### Remarks

Checks whether this item stack has a particular tag
associated with it.

#### World Ready

This function can't be called in early-execution mode.

***

### isStackableWith()

> **isStackableWith**(`itemStack`): `boolean`

#### Parameters

##### itemStack

`ItemStack`

ItemStack to check stacking compatibility with.

#### Returns

`boolean`

True if the Item Stack is stackable with the itemStack
passed in. False for non-stackable items.

#### Remarks

Returns whether this item stack can be stacked with the
given `itemStack`. This is determined by comparing the item
type and any custom data and properties associated with the
item stacks. The amount of each item stack is not taken into
consideration, but for non-stackable items this will always
return false.

#### World Ready

This function can't be called in early-execution mode.

***

### matches()

> **matches**(`itemName`, `states?`): `boolean`

#### Parameters

##### itemName

`string`

Identifier of the item.

##### states?

`Record`\<`string`, `string` \| `number` \| `boolean`\>

Applicable only for blocks. An optional set of states to
compare against. If states is not specified, matches checks
against the set of types more broadly.

#### Returns

`boolean`

Returns a boolean whether the specified item matches.

#### Remarks

Version safe way of checking if an item matches.

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { ItemStack, world } from "@minecraft/server";

const item1 = new ItemStack("minecraft:iron_sword", 1);
item1.matches("minecraft:iron_sword");
```

```js
import { ItemStack, world } from "@minecraft/server";

const item1 = new ItemStack("minecraft:acacia_trapdoor", 1);
item1.matches("minecraft:acacia_trapdoor", {
direction: 0,
open_bit: true,
upside_down_bit: false,
});
```

***

### setCanDestroy()

> **setCanDestroy**(`blockIdentifiers?`): `void`

#### Parameters

##### blockIdentifiers?

`string`[]

String list of block types that the item can destroy.

#### Returns

`void`

#### Remarks

The list of block types this item can break in Adventure
mode. The block names are displayed in the item's tooltip.
Setting the value to undefined will clear the list.

This function can't be called in restricted-execution mode.

#### Throws

Throws if any of the provided block identifiers are invalid.

#### Example

```typescript
import { world, ItemStack, EntityInventoryComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function giveDestroyRestrictedPickaxe(
    targetLocation: DimensionLocation
) {
  for (const player of world.getAllPlayers()) {
    const specialPickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe);
    specialPickaxe.setCanDestroy([MinecraftItemTypes.Cobblestone, MinecraftItemTypes.Obsidian]);

    const inventory = player.getComponent("inventory") as EntityInventoryComponent;
    if (inventory === undefined || inventory.container === undefined) {
      return;
    }

    inventory.container.addItem(specialPickaxe);
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

***

### setCanPlaceOn()

> **setCanPlaceOn**(`blockIdentifiers?`): `void`

#### Parameters

##### blockIdentifiers?

`string`[]

String list of block types that the item can be placed on.

#### Returns

`void`

#### Remarks

The list of block types this item can be placed on in
Adventure mode. This is only applicable to block items. The
block names are displayed in the item's tooltip. Setting the
value to undefined will clear the list.

This function can't be called in restricted-execution mode.

#### Throws

Throws if any of the provided block identifiers are invalid.

#### Example

```typescript
import { world, ItemStack, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function givePlaceRestrictedGoldBlock(
    targetLocation: DimensionLocation
) {
  for (const player of world.getAllPlayers()) {
    const specialGoldBlock = new ItemStack(MinecraftItemTypes.GoldBlock);
    specialGoldBlock.setCanPlaceOn([MinecraftItemTypes.GrassBlock, MinecraftItemTypes.Dirt]);

    const inventory = player.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
    if (inventory === undefined || inventory.container === undefined) {
      return;
    }

    inventory.container.addItem(specialGoldBlock);
  }
}
```

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

Sets a specified property to a value. Note: This function
only works with non-stackable items.

#### Throws

Throws if the item stack is stackable.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

minecraftcommon.UnsupportedFunctionalityError

#### World Ready

This function can't be called in early-execution mode.

***

### setLore()

> **setLore**(`loreList?`): `void`

#### Parameters

##### loreList?

(`string` \| [`RawMessage`](../interfaces/RawMessage.md))[]

List of lore lines. Each element in the list represents a
new line. The maximum lore line count is 20. The maximum
lore line length is 50 characters.

#### Returns

`void`

#### Remarks

Sets the lore value - a secondary display string - for an
ItemStack. The lore list is cleared if set to an empty
string or undefined.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

Error

#### Example

```typescript
import { EntityComponentTypes, ItemStack, Player } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveAwesomeSword(player: Player) {
    const diamondAwesomeSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);
    diamondAwesomeSword.setLore([
        '§c§lDiamond Sword of Awesome§r',
         '+10 coolness', '§p+4 shiny§r'
    ]);

    // hover over/select the item in your inventory to see the lore.
    const inventory = player.getComponent(EntityComponentTypes.Inventory);
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }

    inventory.container.setItem(0, diamondAwesomeSword);
}
```

#### World Ready

This function can't be called in early-execution mode.
