[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemDyeableComponent

# Class: ItemDyeableComponent

When present on an item, this item can be dyed.

## Example

```ts
import { world, ItemDyeableComponent, ItemStack, RGB } from "@minecraft/server";

// Example of working with ItemDyeableComponent
function demonstrateItemDyeableComponent() {
   const player = world.getAllPlayers()[0];
   if (!player) return;

   // Get the item in the player's main hand
   const mainHandItem = player.getComponent("minecraft:inventory")?.container?.getItem(player.selectedSlotIndex);

   if (mainHandItem) {
       // Check if the item has a dyeable component
       const dyeableComponent = mainHandItem.getComponent("minecraft:dyeable") as ItemDyeableComponent;

       if (dyeableComponent) {
           console.log("Item is dyeable!");

           // Get the current color
           const currentColor = dyeableComponent.color;
           console.log(`Current color - R: ${currentColor.red}, G: ${currentColor.green}, B: ${currentColor.blue}`);

           // Get the default color
           const defaultColor = dyeableComponent.defaultColor;
           console.log(`Default color - R: ${defaultColor.red}, G: ${defaultColor.green}, B: ${defaultColor.blue}`);

           console.log(`Component ID: ${ItemDyeableComponent.componentId}`);

           // Example: Change the item color to red
           const redColor: RGB = { red: 255, green: 0, blue: 0 };
           dyeableComponent.color = redColor;
           console.log("Changed item color to red!");

           // Example: Reset to default color
           dyeableComponent.color = dyeableComponent.defaultColor;
           console.log("Reset item color to default!");
       } else {
           console.log(`Item ${mainHandItem.typeId} is not dyeable`);
       }
   } else {
       console.log("No item in main hand");
   }
}

// Example: Create dyeable items with specific colors
function createDyeableItems() {
   const player = world.getAllPlayers()[0];
   if (!player) return;

   // Create a leather helmet with custom color
   const leatherHelmet = new ItemStack("minecraft:leather_helmet", 1);
   const helmetDyeable = leatherHelmet.getComponent("minecraft:dyeable") as ItemDyeableComponent;

   if (helmetDyeable) {
       // Set to bright blue
       const blueColor: RGB = { red: 0, green: 100, blue: 255 };
       helmetDyeable.color = blueColor;

       // Give to player
       const inventory = player.getComponent("minecraft:inventory");
       if (inventory?.container) {
           inventory.container.addItem(leatherHelmet);
           console.log("Gave player blue leather helmet!");
       }
   }

   // Create leather boots with custom color
   const leatherBoots = new ItemStack("minecraft:leather_boots", 1);
   const bootsDyeable = leatherBoots.getComponent("minecraft:dyeable") as ItemDyeableComponent;

   if (bootsDyeable) {
       // Set to bright green
       const greenColor: RGB = { red: 0, green: 255, blue: 0 };
       bootsDyeable.color = greenColor;

       // Give to player
       const inventory = player.getComponent("minecraft:inventory");
       if (inventory?.container) {
           inventory.container.addItem(leatherBoots);
           console.log("Gave player green leather boots!");
       }
   }
}

// Example: Demonstrate color mixing
function demonstrateColorMixing() {
   // Create color mixing examples
   const colors = [
       { name: "Red", color: { red: 255, green: 0, blue: 0 } },
       { name: "Green", color: { red: 0, green: 255, blue: 0 } },
       { name: "Blue", color: { red: 0, green: 0, blue: 255 } },
       { name: "Purple", color: { red: 128, green: 0, blue: 128 } },
       { name: "Orange", color: { red: 255, green: 165, blue: 0 } },
       { name: "Pink", color: { red: 255, green: 192, blue: 203 } },
   ];

   colors.forEach((colorInfo) => {
       console.log(`${colorInfo.name}: R:${colorInfo.color.red} G:${colorInfo.color.green} B:${colorInfo.color.blue}`);
   });
}

// Run the demonstrations
demonstrateItemDyeableComponent();
createDyeableItems();
demonstrateColorMixing();
```

## Source

```ts
export class ItemDyeableComponent extends ItemComponent {
    private constructor();
    color?: RGB;
    readonly defaultColor?: RGB;
    static readonly componentId = 'minecraft:dyeable';
}
```

## Extends

- [`ItemComponent`](ItemComponent-1.md)

## Constructors

### Constructor

> `private` **new ItemDyeableComponent**(): `ItemDyeableComponent`

#### Returns

`ItemDyeableComponent`

#### Overrides

[`ItemComponent`](ItemComponent-1.md).[`constructor`](ItemComponent-1.md#constructor)

## Properties

### color?

> `optional` **color?**: [`RGB`](../interfaces/RGB-1.md)

#### Remarks

Sets and returns the current color of the item.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### defaultColor?

> `readonly` `optional` **defaultColor?**: [`RGB`](../interfaces/RGB-1.md)

#### Remarks

Returns the default color of the item.

#### Throws

This property can throw when used.

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

[`ItemComponent`](ItemComponent-1.md).[`isValid`](ItemComponent-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemComponent`](ItemComponent-1.md).[`typeId`](ItemComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:dyeable"` = `'minecraft:dyeable'`
