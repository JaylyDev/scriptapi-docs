import { world, system } from "@minecraft/server";

// This example demonstrates how to work with EntityNavigationGenericComponent
// This component controls basic navigation behavior for most entities

system.run(() => {
    const overworld = world.getDimension("overworld");
    
    // Spawn a dolphin (which uses generic navigation)
    const dolphin = overworld.spawnEntity("minecraft:dolphin", { x: 0, y: 64, z: 0 });
    
    // Get the navigation.generic component
    const navigationGeneric = dolphin.getComponent("minecraft:navigation.generic");
    
    if (navigationGeneric) {
        console.log("=== Dolphin Navigation Properties ===");
        
        // Check various navigation capabilities
        console.log(`Can float: ${navigationGeneric.canFloat}`);
        console.log(`Can swim: ${navigationGeneric.canSwim}`);
        console.log(`Can jump: ${navigationGeneric.canJump}`);
        console.log(`Can walk: ${navigationGeneric.canWalk}`);
        console.log(`Can path from air: ${navigationGeneric.canPathFromAir}`);
        console.log(`Can path over water: ${navigationGeneric.canPathOverWater}`);
        console.log(`Can path over lava: ${navigationGeneric.canPathOverLava}`);
        
        // Check avoidance behaviors
        console.log(`Avoids water: ${navigationGeneric.avoidWater}`);
        console.log(`Avoids sun: ${navigationGeneric.avoidSun}`);
        console.log(`Avoids damage blocks: ${navigationGeneric.avoidDamageBlocks}`);
        console.log(`Avoids portals: ${navigationGeneric.avoidPortals}`);
        
        // Check interaction capabilities
        console.log(`Can open doors: ${navigationGeneric.canOpenDoors}`);
        console.log(`Can break doors: ${navigationGeneric.canBreakDoors}`);
        console.log(`Can pass doors: ${navigationGeneric.canPassDoors}`);
        
        // Check special abilities
        console.log(`Is amphibious: ${navigationGeneric.isAmphibious}`);
        console.log(`Can breach (jump out of water): ${navigationGeneric.canBreach}`);
        console.log(`Can sink: ${navigationGeneric.canSink}`);
        console.log(`Can walk in lava: ${navigationGeneric.canWalkInLava}`);
        
        console.log(`Component is valid: ${navigationGeneric.isValid}`);
        
        // Send a summary message to the world
        world.sendMessage(`Dolphin spawned with generic navigation! Check console for details.`);
    } else {
        console.log("Failed to get navigation.generic component from dolphin");
        world.sendMessage("Could not access dolphin navigation component");
    }
});
