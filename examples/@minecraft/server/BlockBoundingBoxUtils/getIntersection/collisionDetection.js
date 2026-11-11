import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 7: Intersection-based collision detection
/**
 * Simulates movement and checks for collisions
 * @param {any} movingObject - Object that's moving
 * @param {any} targetPosition - Where the object wants to move
 * @param {any[]} obstacles - Array of obstacle bounding boxes
 */
function checkMovementCollision(movingObject, targetPosition, obstacles) {
    console.log("=== Movement Collision Check ===");
    
    // Create target bounding box
    const objectSpan = BlockBoundingBoxUtils.getSpan(movingObject);
    const targetBox = {
        min: targetPosition,
        max: {
            x: targetPosition.x + objectSpan.x - 1,
            y: targetPosition.y + objectSpan.y - 1,
            z: targetPosition.z + objectSpan.z - 1
        }
    };
    
    console.log(`Moving object: (${movingObject.min.x},${movingObject.min.y},${movingObject.min.z}) to (${movingObject.max.x},${movingObject.max.y},${movingObject.max.z})`);
    console.log(`Target position: (${targetBox.min.x},${targetBox.min.y},${targetBox.min.z}) to (${targetBox.max.x},${targetBox.max.y},${targetBox.max.z})`);
    
    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        const collision = BlockBoundingBoxUtils.getIntersection(targetBox, obstacle);
        
        if (collision) {
            console.log(`❌ Collision detected with obstacle ${i + 1}`);
            console.log(`   Obstacle: (${obstacle.min.x},${obstacle.min.y},${obstacle.min.z}) to (${obstacle.max.x},${obstacle.max.y},${obstacle.max.z})`);
            console.log(`   Collision area: (${collision.min.x},${collision.min.y},${collision.min.z}) to (${collision.max.x},${collision.max.y},${collision.max.z})`);
            return false;
        }
    }
    
    console.log("✅ No collisions - movement is safe");
    return true;
}

// Test movement collision
const player = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 1, y: 66, z: 1 }
};

const newPosition = { x: 5, y: 64, z: 5 };

const obstacles = [
    { min: { x: 3, y: 64, z: 3 }, max: { x: 7, y: 68, z: 7 } },    // House
    { min: { x: 10, y: 64, z: 0 }, max: { x: 15, y: 70, z: 5 } },   // Wall
    { min: { x: 0, y: 64, z: 10 }, max: { x: 20, y: 65, z: 12 } }   // Fence
];

checkMovementCollision(player, newPosition, obstacles);

world.sendMessage("Movement collision detection example completed!");
