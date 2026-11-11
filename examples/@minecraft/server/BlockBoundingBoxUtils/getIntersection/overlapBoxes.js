import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 1: Two clearly overlapping boxes
const box1 = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 10, y: 74, z: 10 }
};

const box2 = {
    min: { x: 5, y: 69, z: 5 },
    max: { x: 15, y: 79, z: 15 }
};

const intersection1 = BlockBoundingBoxUtils.getIntersection(box1, box2);
console.log("Example 1: Overlapping boxes");
console.log(`Box 1: (${box1.min.x},${box1.min.y},${box1.min.z}) to (${box1.max.x},${box1.max.y},${box1.max.z})`);
console.log(`Box 2: (${box2.min.x},${box2.min.y},${box2.min.z}) to (${box2.max.x},${box2.max.y},${box2.max.z})`);

if (intersection1) {
    console.log(`Intersection: (${intersection1.min.x},${intersection1.min.y},${intersection1.min.z}) to (${intersection1.max.x},${intersection1.max.y},${intersection1.max.z})`);
    const intersectionSpan = BlockBoundingBoxUtils.getSpan(intersection1);
    console.log(`Intersection size: ${intersectionSpan.x}x${intersectionSpan.y}x${intersectionSpan.z} = ${intersectionSpan.x * intersectionSpan.y * intersectionSpan.z} blocks`);
} else {
    console.log("No intersection found");
}

world.sendMessage("Overlapping boxes intersection example completed!");
