import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Check an invalid bounding box (min > max)
const invalidBoundingBox = {
    min: { x: 10, y: 74, z: 10 },
    max: { x: 0, y: 64, z: 0 }
};

const isValid2 = BlockBoundingBoxUtils.isValid(invalidBoundingBox);
console.log("\nInvalid bounding box (min > max):");
console.log(`  Min: (${invalidBoundingBox.min.x}, ${invalidBoundingBox.min.y}, ${invalidBoundingBox.min.z})`);
console.log(`  Max: (${invalidBoundingBox.max.x}, ${invalidBoundingBox.max.y}, ${invalidBoundingBox.max.z})`);
console.log(`  Is valid: ${isValid2}`);
