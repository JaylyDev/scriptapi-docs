import { world, system } from "@minecraft/server";

// This example demonstrates how to work with EntityNavigationWalkComponent
// This component is used by entities that primarily move by walking on the ground

system.run(() => {
    const overworld = world.getDimension("overworld");
    
    // Spawn a zombie (which uses walk navigation for ground movement)
    const zombie = overworld.spawnEntity("minecraft:zombie", { x: 0, y: 64, z: 0 });
    
    // Get the navigation.walk component
    const navigationWalk = zombie.getComponent("minecraft:navigation.walk");
    
    if (navigationWalk) {
        console.log("=== Zombie Walk Navigation Properties ===");
        
        // Check basic movement capabilities
        console.log(`Can walk: ${navigationWalk.canWalk}`);
        console.log(`Can jump: ${navigationWalk.canJump}`);
        console.log(`Can swim: ${navigationWalk.canSwim}`);
        console.log(`Can float: ${navigationWalk.canFloat}`);
        console.log(`Can sink: ${navigationWalk.canSink}`);
        
        // Check pathfinding capabilities
        console.log(`Can path from air: ${navigationWalk.canPathFromAir}`);
        console.log(`Can path over water: ${navigationWalk.canPathOverWater}`);
        console.log(`Can path over lava: ${navigationWalk.canPathOverLava}`);
        
        // Check avoidance behaviors
        console.log(`Avoids water: ${navigationWalk.avoidWater}`);
        console.log(`Avoids sun: ${navigationWalk.avoidSun}`);
        console.log(`Avoids damage blocks: ${navigationWalk.avoidDamageBlocks}`);
        console.log(`Avoids portals: ${navigationWalk.avoidPortals}`);
        
        // Check door interaction capabilities (important for hostile mobs)
        console.log(`Can open doors: ${navigationWalk.canOpenDoors}`);
        console.log(`Can break doors: ${navigationWalk.canBreakDoors}`);
        console.log(`Can pass doors: ${navigationWalk.canPassDoors}`);
        console.log(`Can open iron doors: ${navigationWalk.canOpenIronDoors}`);
        
        // Check special abilities
        console.log(`Is amphibious: ${navigationWalk.isAmphibious}`);
        console.log(`Can breach: ${navigationWalk.canBreach}`);
        console.log(`Can walk in lava: ${navigationWalk.canWalkInLava}`);
        
        console.log(`Component is valid: ${navigationWalk.isValid}`);
        
        // Send a summary message to the world
        world.sendMessage(`Zombie spawned with walk navigation! It moves on the ground.`);
        
        // Display what makes walk navigation special
        if (navigationWalk.canBreakDoors) {
            console.log("🧟 This zombie can break down doors on hard difficulty!");
        }
        
        if (navigationWalk.avoidSun) {
            console.log("☀️ This zombie will try to avoid direct sunlight!");
        }
        
        // Compare with other navigation types
        console.log("\n=== Navigation Type Comparison ===");
        console.log("Walk navigation is best for:");
        console.log("- Ground-based entities (zombies, skeletons, villagers)");
        console.log("- Entities that need to interact with doors");
        console.log("- Entities that follow terrain closely");
    } else {
        console.log("Failed to get navigation.walk component from zombie");
        world.sendMessage("Could not access zombie walk navigation component");
    }
});
