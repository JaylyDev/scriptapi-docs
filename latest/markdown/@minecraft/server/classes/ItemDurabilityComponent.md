[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ItemDurabilityComponent

# Class: ItemDurabilityComponent

When present on an item, this item can take damage in the
process of being used. Note that this component only applies
to data-driven items.

## Examples

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

## Source

```ts
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    damage: number;
    readonly maxDurability: number;
    unbreakable: boolean;
    static readonly componentId = 'minecraft:durability';
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    getDamageChanceRange(): minecraftcommon.NumberRange;
}
```

## Extends

- [`ItemComponent`](ItemComponent.md)

## Constructors

### Constructor

> `private` **new ItemDurabilityComponent**(): `ItemDurabilityComponent`

#### Returns

`ItemDurabilityComponent`

#### Overrides

[`ItemComponent`](ItemComponent.md).[`constructor`](ItemComponent.md#constructor)

## Properties

### damage

> **damage**: `number`

#### Remarks

Returns the current damage level of this particular item.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

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

[`ItemComponent`](ItemComponent.md).[`isValid`](ItemComponent.md#isvalid)

***

### maxDurability

> `readonly` **maxDurability**: `number`

#### Remarks

Represents the amount of damage that this item can take
before breaking.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemComponent`](ItemComponent.md).[`typeId`](ItemComponent.md#typeid)

***

### unbreakable

> **unbreakable**: `boolean`

#### Remarks

Whether an item breaks or loses durability. Setting to true
temporarily removes item's durability HUD, and freezes
durability loss on item.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:durability"` = `'minecraft:durability'`

## Methods

### getDamageChance()

> **getDamageChance**(`unbreakingEnchantmentLevel?`): `number`

#### Parameters

##### unbreakingEnchantmentLevel?

`number`

Unbreaking factor to consider in factoring the damage
chance. Incoming unbreaking parameter must be within the
range [0, 3].
Defaults to: 0
Bounds: [0, 3]

#### Returns

`number`

#### Remarks

Returns the maximum chance that this item would be damaged
using the damageRange property, given an unbreaking
enchantment level.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getDamageChanceRange()

> **getDamageChanceRange**(): [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Returns

[`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

A range of numbers that is used to calculate the damage
chance for an item. The damage chance will fall within this
range.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
