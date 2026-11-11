import { 
  world, 
  BlockMovableComponent,
  MovementType,
  StickyType,
  Vector3
} from "@minecraft/server";

// Example of working with BlockMovableComponent
function demonstrateBlockMovableComponent() {
  const player = world.getAllPlayers()[0];
  if (!player) return;
  
  const blockLocation: Vector3 = {
    x: Math.floor(player.location.x),
    y: Math.floor(player.location.y),
    z: Math.floor(player.location.z)
  };
  
  // Get a block and check if it has the movable component
  const block = player.dimension.getBlock(blockLocation);
  if (!block) return;
  
  // Try to get the movable component
  const movableComponent = block.getComponent("minecraft:movable") as BlockMovableComponent;
  
  if (movableComponent) {    
    // Check the sticky type
    console.log(`Sticky type: ${movableComponent.stickyType}`);
    switch (movableComponent.stickyType) {
      case StickyType.None:
        console.log("This block is not sticky");
        break;
      case StickyType.Same:
        console.log("This block sticks to blocks of the same type");
        break;
    }
  } else {
    console.log("Block does not have movable component");
  }
}

// Example: Check various block types for their movable properties
function checkCommonBlockMovability() {
  const player = world.getAllPlayers()[0];
  if (!player) return;
  
  // Common block types to check
  const blockTypesToCheck = [
    "minecraft:stone",
    "minecraft:obsidian", 
    "minecraft:bedrock",
    "minecraft:slime_block",
    "minecraft:honey_block"
  ];
  
  blockTypesToCheck.forEach(blockType => {
    // This is a demonstration of how you would check block movability
    // In practice, you'd place these blocks and then check them
    console.log(`Checking movability for ${blockType}:`);
    // The actual implementation would depend on having these blocks placed in the world
  });
}

// Run the demonstration
demonstrateBlockMovableComponent();
checkCommonBlockMovability();
