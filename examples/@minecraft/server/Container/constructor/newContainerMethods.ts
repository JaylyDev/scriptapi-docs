import { 
  world, 
  Container,
  ItemStack,
  Player
} from "@minecraft/server";

// Example of using the new Container methods added in v2
function demonstrateNewContainerMethods() {
  const player = world.getAllPlayers()[0];
  if (!player) return;
  
  const inventory = player.getComponent("minecraft:inventory");
  if (!inventory?.container) return;
  
  const container = inventory.container;
  
  console.log(`=== Container Methods Demo for ${player.name} ===`);
  
  // Check if container is valid
  if (!container.isValid) {
    console.log("Container is not valid");
    return;
  }
  
  console.log(`Container size: ${container.size}`);
  console.log(`Empty slots: ${container.emptySlotsCount}`);
  
  // Example 1: contains() - Check if container has specific items
  const diamondStack = new ItemStack("minecraft:diamond", 1);
  const ironStack = new ItemStack("minecraft:iron_ingot", 5);
  const stoneStack = new ItemStack("minecraft:stone", 64);
  
  console.log(`Contains diamonds: ${container.contains(diamondStack)}`);
  console.log(`Contains iron ingots: ${container.contains(ironStack)}`);
  console.log(`Contains stone: ${container.contains(stoneStack)}`);
  
  // Example 2: find() - Find the slot index of specific items
  const diamondSlot = container.find(diamondStack);
  const ironSlot = container.find(ironStack);
  
  console.log(`Diamond found at slot: ${diamondSlot ?? 'not found'}`);
  console.log(`Iron found at slot: ${ironSlot ?? 'not found'}`);
  
  // Example 3: findLast() - Find the last occurrence of specific items
  const lastDiamondSlot = container.findLast(diamondStack);
  const lastIronSlot = container.findLast(ironStack);
  
  console.log(`Last diamond found at slot: ${lastDiamondSlot ?? 'not found'}`);
  console.log(`Last iron found at slot: ${lastIronSlot ?? 'not found'}`);
  
  // Example 4: firstEmptySlot() - Find the first empty slot
  const firstEmpty = container.firstEmptySlot();
  console.log(`First empty slot: ${firstEmpty ?? 'no empty slots'}`);
  
  // Example 5: firstItem() - Find the first non-empty slot
  const firstItem = container.firstItem();
  console.log(`First item slot: ${firstItem ?? 'no items'}`);
  
  if (firstItem !== undefined) {
    const item = container.getItem(firstItem);
    if (item) {
      console.log(`First item: ${item.typeId} (amount: ${item.amount})`);
    }
  }
}

// Example: Organize inventory using new container methods
function organizeInventory(player: Player) {
  const inventory = player.getComponent("minecraft:inventory");
  if (!inventory?.container) return;
  
  const container = inventory.container;
  console.log(`Organizing inventory for ${player.name}...`);
  
  // Find all empty slots
  const emptySlots: number[] = [];
  for (let i = 0; i < container.size; i++) {
    if (!container.getItem(i)) {
      emptySlots.push(i);
    }
  }
  
  console.log(`Found ${emptySlots.length} empty slots`);
  
  // Group similar items together
  const itemGroups = new Map<string, number[]>();
  
  for (let i = 0; i < container.size; i++) {
    const item = container.getItem(i);
    if (item) {
      if (!itemGroups.has(item.typeId)) {
        itemGroups.set(item.typeId, []);
      }
      itemGroups.get(item.typeId)!.push(i);
    }
  }
  
  console.log(`Found ${itemGroups.size} different item types`);
  
  itemGroups.forEach((slots, itemType) => {
    if (slots.length > 1) {
      console.log(`${itemType} found in ${slots.length} slots: ${slots.join(', ')}`);
    }
  });
}

// Example: Auto-collect specific items to inventory
function autoCollectItems(player: Player, targetItems: string[]) {
  const inventory = player.getComponent("minecraft:inventory");
  if (!inventory?.container) return;
  
  const container = inventory.container;
  
  targetItems.forEach(itemType => {
    const searchStack = new ItemStack(itemType, 1);
    
    // Check if we already have this item
    if (container.contains(searchStack)) {
      const slot = container.find(searchStack);
      if (slot !== undefined) {
        const existingItem = container.getItem(slot);
        console.log(`Already have ${existingItem?.amount} ${itemType} in slot ${slot}`);
      }
    } else {
      console.log(`Need to collect: ${itemType}`);
      
      // Find first empty slot to place the item when collected
      const emptySlot = container.firstEmptySlot();
      if (emptySlot !== undefined) {
        console.log(`Reserved slot ${emptySlot} for ${itemType}`);
      } else {
        console.log(`No space available for ${itemType}`);
      }
    }
  });
}

// Example: Smart stacking function
function smartStackItems(player: Player) {
  const inventory = player.getComponent("minecraft:inventory");
  if (!inventory?.container) return;
  
  const container = inventory.container;
  console.log("Performing smart item stacking...");
  
  // Track stackable items
  const stackableItems = new Map<string, { slots: number[], maxStack: number }>();
  
  for (let i = 0; i < container.size; i++) {
    const item = container.getItem(i);
    if (item && item.maxAmount > 1) { // Stackable item
      if (!stackableItems.has(item.typeId)) {
        stackableItems.set(item.typeId, { slots: [], maxStack: item.maxAmount });
      }
      stackableItems.get(item.typeId)!.slots.push(i);
    }
  }
  
  stackableItems.forEach((info, itemType) => {
    if (info.slots.length > 1) {
      console.log(`${itemType} can be stacked (found in ${info.slots.length} slots, max stack: ${info.maxStack})`);
      
      // Here you would implement the actual stacking logic
      // by moving items between slots to optimize space
    }
  });
}

// Run the demonstrations
demonstrateNewContainerMethods();

// Additional examples with the first player
const firstPlayer = world.getAllPlayers()[0];
if (firstPlayer) {
  organizeInventory(firstPlayer);
  autoCollectItems(firstPlayer, ["minecraft:diamond", "minecraft:iron_ingot", "minecraft:gold_ingot"]);
  smartStackItems(firstPlayer);
}
