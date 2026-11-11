// Practical usage - Create a bounding box around a structure

import { BlockBoundingBoxUtils, world } from "@minecraft/server";

/**
 * Creates a bounding box around a structure
 * @param {number} centerX - Center X coordinate
 * @param {number} centerY - Center Y coordinate  
 * @param {number} centerZ - Center Z coordinate
 * @param {number} width - Width of the structure
 * @param {number} height - Height of the structure
 * @param {number} depth - Depth of the structure
 */
function createStructureBounds(centerX, centerY, centerZ, width, height, depth) {
    const halfWidth = Math.floor(width / 2);
    const halfDepth = Math.floor(depth / 2);
    
    return BlockBoundingBoxUtils.createValid(
        { x: centerX - halfWidth, y: centerY, z: centerZ - halfDepth },
        { x: centerX + halfWidth, y: centerY + height - 1, z: centerZ + halfDepth }
    );
}

const houseBounds = createStructureBounds(0, 64, 0, 10, 6, 8);
console.log("\nHouse structure bounding box:");
console.log(`  Min: (${houseBounds.min.x}, ${houseBounds.min.y}, ${houseBounds.min.z})`);
console.log(`  Max: (${houseBounds.max.x}, ${houseBounds.max.y}, ${houseBounds.max.z})`);

// Send message to world for in-game confirmation
world.sendMessage("BlockBoundingBoxUtils.createValid examples completed! Check console for details.");
