import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Check a valid bounding box
const validBoundingBox = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 10, y: 74, z: 10 }
};

const isValid1 = BlockBoundingBoxUtils.isValid(validBoundingBox);
console.log("Valid bounding box:");
console.log(`  Min: (${validBoundingBox.min.x}, ${validBoundingBox.min.y}, ${validBoundingBox.min.z})`);
console.log(`  Max: (${validBoundingBox.max.x}, ${validBoundingBox.max.y}, ${validBoundingBox.max.z})`);
console.log(`  Is valid: ${isValid1}`);
