import { world, system } from "@minecraft/server";

// This example demonstrates how to work with EntityNavigationHoverComponent
// This component is used by entities that can hover/fly like bees and ghasts

system.run(() => {
    const overworld = world.getDimension("overworld");
    
    // Spawn a bee (which uses hover navigation for flying)
    const bee = overworld.spawnEntity("minecraft:bee", { x: 0, y: 64, z: 0 });
    
    // Get the navigation.hover component
    const navigationHover = bee.getComponent("minecraft:navigation.hover");
    
    if (navigationHover) {
        console.log("=== Bee Hover Navigation Properties ===");
        
        // Check flight and hovering capabilities
        console.log(`Can path from air: ${navigationHover.canPathFromAir}`);
        console.log(`Can float: ${navigationHover.canFloat}`);
        console.log(`Can jump: ${navigationHover.canJump}`);
        console.log(`Can swim: ${navigationHover.canSwim}`);
        console.log(`Can walk: ${navigationHover.canWalk}`);
        
        // Check pathfinding over different surfaces
        console.log(`Can path over water: ${navigationHover.canPathOverWater}`);
        console.log(`Can path over lava: ${navigationHover.canPathOverLava}`);
        
        // Check avoidance behaviors (important for flying entities)
        console.log(`Avoids water: ${navigationHover.avoidWater}`);
        console.log(`Avoids sun: ${navigationHover.avoidSun}`);
        console.log(`Avoids damage blocks: ${navigationHover.avoidDamageBlocks}`);
        console.log(`Avoids portals: ${navigationHover.avoidPortals}`);
        
        // Check door interaction (usually false for flying entities)
        console.log(`Can open doors: ${navigationHover.canOpenDoors}`);
        console.log(`Can break doors: ${navigationHover.canBreakDoors}`);
        console.log(`Can pass doors: ${navigationHover.canPassDoors}`);
        console.log(`Can open iron doors: ${navigationHover.canOpenIronDoors}`);
        
        // Check special abilities
        console.log(`Is amphibious: ${navigationHover.isAmphibious}`);
        console.log(`Can breach: ${navigationHover.canBreach}`);
        console.log(`Can sink: ${navigationHover.canSink}`);
        console.log(`Can walk in lava: ${navigationHover.canWalkInLava}`);
        
        console.log(`Component is valid: ${navigationHover.isValid}`);
        
        // Send a summary message to the world
        world.sendMessage(`Bee spawned with hover navigation! It can fly around freely.`);
        
        // Fun fact: Display what makes hover navigation special
        if (navigationHover.canPathFromAir) {
            console.log("🐝 This bee can navigate through the air without needing solid ground!");
        }
    } else {
        console.log("Failed to get navigation.hover component from bee");
        world.sendMessage("Could not access bee hover navigation component");
    }
});
