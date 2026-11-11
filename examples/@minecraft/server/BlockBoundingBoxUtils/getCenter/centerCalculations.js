import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// This example demonstrates how to get the center point of a BlockBoundingBox using BlockBoundingBoxUtils.getCenter
// The center is calculated as the midpoint between min and max coordinates

/**
 * Finds a safe teleportation point at the center of a bounding box
 * @param {any} boundingBox - The bounding box to find center of
 * @returns {Object} Safe teleportation coordinates
 */
function findSafeTeleportCenter(boundingBox) {
    const center = BlockBoundingBoxUtils.getCenter(boundingBox);
    
    // Add some safety by placing the player slightly above the center
    const safeTeleport = {
        x: Math.floor(center.x),
        y: Math.floor(center.y) + 2, // 2 blocks above center
        z: Math.floor(center.z)
    };
    
    console.log(`Safe teleport point: (${safeTeleport.x}, ${safeTeleport.y}, ${safeTeleport.z})`);
    return safeTeleport;
}

console.log("\n=== Safe Teleportation Centers ===");

// Find centers for different structures
const house = {
    min: { x: 10, y: 64, z: 10 },
    max: { x: 20, y: 70, z: 18 }
};

console.log("\nHouse structure:");
console.log(`Bounds: (${house.min.x},${house.min.y},${house.min.z}) to (${house.max.x},${house.max.y},${house.max.z})`);
findSafeTeleportCenter(house);

const farm = {
    min: { x: 50, y: 64, z: 50 },
    max: { x: 80, y: 64, z: 80 }
};

console.log("\nFarm area:");
console.log(`Bounds: (${farm.min.x},${farm.min.y},${farm.min.z}) to (${farm.max.x},${farm.max.y},${farm.max.z})`);
findSafeTeleportCenter(farm);

