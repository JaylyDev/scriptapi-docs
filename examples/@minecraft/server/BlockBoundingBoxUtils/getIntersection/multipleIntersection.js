import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 6: Find intersection of multiple boxes
/**
 * Finds the common intersection area of multiple bounding boxes
 * @param {any[]} boxes - Array of bounding boxes
 */
function findMultipleIntersection(boxes) {
    console.log("=== Multiple Box Intersection ===");
    
    if (boxes.length < 2) {
        console.log("Need at least 2 boxes for intersection");
        return null;
    }
    
    let commonIntersection = boxes[0];
    
    for (let i = 1; i < boxes.length; i++) {
        console.log(`Step ${i}: Intersecting with box ${i + 1}`);
        
        const currentIntersection = BlockBoundingBoxUtils.getIntersection(commonIntersection, boxes[i]);
        
        if (!currentIntersection) {
            console.log(`No intersection found at step ${i} - no common area exists`);
            return null;
        }
        
        commonIntersection = currentIntersection;
        const span = BlockBoundingBoxUtils.getSpan(commonIntersection);
        console.log(`  Current intersection: ${span.x}x${span.y}x${span.z} blocks`);
    }
    
    console.log("Final common intersection:");
    console.log(`  (${commonIntersection.min.x},${commonIntersection.min.y},${commonIntersection.min.z}) to (${commonIntersection.max.x},${commonIntersection.max.y},${commonIntersection.max.z})`);
    
    return commonIntersection;
}

// Test multiple intersection
const multipleBoxes = [
    { min: { x: 0, y: 64, z: 0 }, max: { x: 15, y: 75, z: 15 } },
    { min: { x: 5, y: 60, z: 5 }, max: { x: 20, y: 70, z: 20 } },
    { min: { x: 3, y: 65, z: 3 }, max: { x: 12, y: 80, z: 12 } }
];

findMultipleIntersection(multipleBoxes);

world.sendMessage("Multiple box intersection example completed!");
