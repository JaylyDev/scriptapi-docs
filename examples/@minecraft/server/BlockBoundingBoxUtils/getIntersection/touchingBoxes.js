import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 4: Boxes touching at edges
const box5 = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 5, y: 69, z: 5 }
};

const box6 = {
    min: { x: 5, y: 64, z: 5 },
    max: { x: 10, y: 69, z: 10 }
};

const intersection4 = BlockBoundingBoxUtils.getIntersection(box5, box6);
console.log("Example 4: Boxes touching at corner");
console.log(`Box 5: (${box5.min.x},${box5.min.y},${box5.min.z}) to (${box5.max.x},${box5.max.y},${box5.max.z})`);
console.log(`Box 6: (${box6.min.x},${box6.min.y},${box6.min.z}) to (${box6.max.x},${box6.max.y},${box6.max.z})`);

if (intersection4) {
    console.log(`Intersection: (${intersection4.min.x},${intersection4.min.y},${intersection4.min.z}) to (${intersection4.max.x},${intersection4.max.y},${intersection4.max.z})`);
    const span = BlockBoundingBoxUtils.getSpan(intersection4);
    console.log(`Intersection size: ${span.x}x${span.y}x${span.z}`);
    
    if (span.x === 1 && span.y >= 1 && span.z === 1) {
        console.log("Note: Single point/line intersection");
    }
} else {
    console.log("No intersection found");
}

world.sendMessage("Touching boxes intersection example completed!");
