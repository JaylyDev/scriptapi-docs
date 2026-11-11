import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 2: Non-overlapping boxes
const box3 = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 5, y: 69, z: 5 }
};

const box4 = {
    min: { x: 10, y: 64, z: 10 },
    max: { x: 15, y: 69, z: 15 }
};

const intersection2 = BlockBoundingBoxUtils.getIntersection(box3, box4);
console.log("Example 2: Non-overlapping boxes");
console.log(`Box 3: (${box3.min.x},${box3.min.y},${box3.min.z}) to (${box3.max.x},${box3.max.y},${box3.max.z})`);
console.log(`Box 4: (${box4.min.x},${box4.min.y},${box4.min.z}) to (${box4.max.x},${box4.max.y},${box4.max.z})`);

if (intersection2) {
    console.log(`Intersection: (${intersection2.min.x},${intersection2.min.y},${intersection2.min.z}) to (${intersection2.max.x},${intersection2.max.y},${intersection2.max.z})`);
} else {
    console.log("No intersection - boxes don't overlap");
}

world.sendMessage("Non-overlapping boxes intersection example completed!");
