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
    console.log("Block has movable component!");
    
    // Check the movement type
    console.log(`Movement type: ${movableComponent.movementType}`);
    switch (movableComponent.movementType) {
      case MovementType.Push:
        console.log("This block can be pushed by pistons");
        break;
      case MovementType.PushPull:
        console.log("This block can be pushed and pulled by pistons");
        break;
      case MovementType.Immovable:
        console.log("This block cannot be moved by pistons");
        break;
      case MovementType.Popped:
        console.log("This block will break when pushed by pistons");
        break;
    }
  } else {
    console.log("Block does not have movable component");
  }
}

// Run the demonstration
demonstrateBlockMovableComponent();
