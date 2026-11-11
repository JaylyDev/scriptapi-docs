import { 
  world, 
  system,
  AimAssistCategorySettings,
  AimAssistRegistry,
  Player
} from "@minecraft/server";

// Basic category creation and addition
// This Demonstrates how to add categories to AimAssistRegistry via world.getAimAssist()
function createBasicAimAssistCategory() {
  console.log("=== Creating Basic Aim Assist Category ===");
  
  // Get the AimAssist registry from the world
  const aimAssistRegistry: AimAssistRegistry = world.getAimAssist();
  
  // Create a new category with custom settings
  const basicCategorySettings = new AimAssistCategorySettings("jayly:mining_priority");
  
  // Configure block priorities (higher values = higher priority)
  const blockPriorities: Record<string, number> = {
    "minecraft:diamond_ore": 10,
    "minecraft:gold_ore": 8,
    "minecraft:iron_ore": 6,
    "minecraft:coal_ore": 4,
    "minecraft:stone": 2
  };
  
  // Set the block priorities for this category
  basicCategorySettings.setBlockPriorities(blockPriorities);
  
  // Add the category to the registry
  aimAssistRegistry.addCategory(basicCategorySettings);

  console.log(`Added category '${basicCategorySettings.identifier}' to AimAssist registry`);
  console.log("Block priorities set:", blockPriorities);
}

system.run(() => createBasicAimAssistCategory());