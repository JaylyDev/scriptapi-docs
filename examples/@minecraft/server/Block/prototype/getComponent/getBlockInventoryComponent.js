import { ItemStack } from "@minecraft/server";

const getEntityInventoryComponent = block.getComponent("inventory");
const inventoryContainer = getEntityInventoryComponent.container;

// Custom function to add an item to the inventory
function addItemToInventory(itemStack) {
  return inventoryContainer.addItem(itemStack);
}

// Custom function to move an item within the inventory
function moveItemWithinInventory(fromSlot, toSlot) {
  inventoryContainer.moveItem(fromSlot, toSlot, inventoryContainer);
}

// Custom function to transfer an item from inventory to another container
function transferItemToContainer(fromSlot, targetContainer) {
  return inventoryContainer.transferItem(fromSlot, targetContainer);
}

// Example usage of the custom functions
const newItemStack = new ItemStack("apple", 10); // Assuming "apple" is a valid item
const addedItem = addItemToInventory(newItemStack);
if (addedItem) {
  console.log("Item added to inventory:", addedItem);
}

const sourceSlot = 2;
const destinationSlot = 5;
moveItemWithinInventory(sourceSlot, destinationSlot);

const targetContainer = someOtherContainer; // Assuming 'someOtherContainer' is an instance of another container
const transferredItem = transferItemToContainer(0, targetContainer);
if (transferredItem) {
  console.log("Item transferred to another container:", transferredItem);
}
