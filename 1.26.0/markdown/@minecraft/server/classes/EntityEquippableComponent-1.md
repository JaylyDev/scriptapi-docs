[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityEquippableComponent

# Class: EntityEquippableComponent

Provides access to a mob's equipment slots. This component
exists on player entities.

## Examples

```typescript
// Gives the player Elytra
import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveEquipment(player: Player) {
    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
    if (equipmentCompPlayer) {
        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.Elytra));
    }
}
```

```ts
import { EquipmentSlot, Player } from "@minecraft/server";

function clearOffhand(player: Player) {
   const equippable = player.getComponent("minecraft:equippable");
   equippable.setEquipment(EquipmentSlot.Offhand); // Assuming undefined (empty slot) as an example
}
```

```js
import { world, EquipmentSlot } from "@minecraft/server";

const player = world.getPlayers()[0];
const equippable = player.getComponent("equippable");
const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
```
> [!NOTE]
> This component only exists for all players. It does not exist on all entities.

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityEquippableComponent**(): `EntityEquippableComponent`

#### Returns

`EntityEquippableComponent`

#### Overrides

[`EntityComponent`](EntityComponent-1.md).[`constructor`](EntityComponent-1.md#constructor)

## Properties

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

The entity that owns this component. The entity will be
undefined if it has been removed.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent-1.md).[`entity`](EntityComponent-1.md#entity)

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

[`EntityComponent`](EntityComponent-1.md).[`isValid`](EntityComponent-1.md#isvalid)

***

### totalArmor

> `readonly` **totalArmor**: `number`

#### Remarks

Returns the total Armor level of the owner.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### totalToughness

> `readonly` **totalToughness**: `number`

#### Remarks

Returns the total Toughness level of the owner.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError-1.md)

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

[`EntityComponent`](EntityComponent-1.md).[`typeId`](EntityComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:equippable"` = `'minecraft:equippable'`

## Methods

### getEquipment()

> **getEquipment**(`equipmentSlot`): [`ItemStack`](ItemStack-1.md) \| `undefined`

#### Parameters

##### equipmentSlot

[`EquipmentSlot`](../enumerations/EquipmentSlot-1.md)

The equipment slot. e.g. "head", "chest", "offhand"

#### Returns

[`ItemStack`](ItemStack-1.md) \| `undefined`

Returns the item equipped to the given EquipmentSlot. If
empty, returns undefined.

#### Remarks

Gets the equipped item for the given EquipmentSlot.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getEquipmentSlot()

> **getEquipmentSlot**(`equipmentSlot`): [`ContainerSlot`](ContainerSlot-1.md)

#### Parameters

##### equipmentSlot

[`EquipmentSlot`](../enumerations/EquipmentSlot-1.md)

The equipment slot. e.g. "head", "chest", "offhand".

#### Returns

[`ContainerSlot`](ContainerSlot-1.md)

Returns the ContainerSlot corresponding to the given
EquipmentSlot.

#### Remarks

Gets the ContainerSlot corresponding to the given
EquipmentSlot.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setEquipment()

> **setEquipment**(`equipmentSlot`, `itemStack?`): `boolean`

#### Parameters

##### equipmentSlot

[`EquipmentSlot`](../enumerations/EquipmentSlot-1.md)

The equipment slot. e.g. "head", "chest", "offhand".

##### itemStack?

[`ItemStack`](ItemStack-1.md)

The item to equip. If undefined, clears the slot.

#### Returns

`boolean`

#### Remarks

Replaces the item in the given EquipmentSlot.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
