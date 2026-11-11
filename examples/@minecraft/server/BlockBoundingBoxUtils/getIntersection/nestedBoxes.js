import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 3: One box completely inside another
const largeBox = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 20, y: 84, z: 20 }
};

const smallBox = {
    min: { x: 5, y: 69, z: 5 },
    max: { x: 10, y: 74, z: 10 }
};

const intersection3 = BlockBoundingBoxUtils.getIntersection(largeBox, smallBox);
console.log("Example 3: Small box inside large box");
console.log(`Large box: (${largeBox.min.x},${largeBox.min.y},${largeBox.min.z}) to (${largeBox.max.x},${largeBox.max.y},${largeBox.max.z})`);
console.log(`Small box: (${smallBox.min.x},${smallBox.min.y},${smallBox.min.z}) to (${smallBox.max.x},${smallBox.max.y},${smallBox.max.z})`);

if (intersection3) {
    console.log(`Intersection: (${intersection3.min.x},${intersection3.min.y},${intersection3.min.z}) to (${intersection3.max.x},${intersection3.max.y},${intersection3.max.z})`);
    
    // Check if intersection equals the smaller box
    const intersectionEqualsSmall = BlockBoundingBoxUtils.equals(intersection3, smallBox);
    console.log(`Intersection equals small box: ${intersectionEqualsSmall}`);
    console.log("Note: When one box is inside another, intersection equals the inner box");
}

world.sendMessage("Nested boxes intersection example completed!");
