
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

console.log("=== BlockBoundingBoxUtils.createValid Examples ===");

// Example 1: Create a simple 3x3x3 bounding box
const simpleBoundingBox = BlockBoundingBoxUtils.createValid(
    { x: 0, y: 64, z: 0 },    // min corner
    { x: 2, y: 66, z: 2 }     // max corner
);

console.log("Simple 3x3x3 bounding box:");
console.log(`  Min: (${simpleBoundingBox.min.x}, ${simpleBoundingBox.min.y}, ${simpleBoundingBox.min.z})`);
console.log(`  Max: (${simpleBoundingBox.max.x}, ${simpleBoundingBox.max.y}, ${simpleBoundingBox.max.z})`);
