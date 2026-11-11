import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// This example demonstrates how to get the span (dimensions) of a BlockBoundingBox using BlockBoundingBoxUtils.getSpan
// The span represents the width, height, and depth of the bounding box

console.log("=== BlockBoundingBoxUtils.getSpan Examples ===");

// Example 1: Simple cube bounding box
const cubeBox = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 9, y: 73, z: 9 }
};

const span1 = BlockBoundingBoxUtils.getSpan(cubeBox);
console.log("Example 1: 10x10x10 cube");
console.log(`Box: (${cubeBox.min.x},${cubeBox.min.y},${cubeBox.min.z}) to (${cubeBox.max.x},${cubeBox.max.y},${cubeBox.max.z})`);
console.log(`Span: ${span1.x} x ${span1.y} x ${span1.z} blocks`);

// Example 2: Single block (span should be 1x1x1)
const singleBlock = {
    min: { x: 5, y: 65, z: 5 },
    max: { x: 5, y: 65, z: 5 }
};

const span2 = BlockBoundingBoxUtils.getSpan(singleBlock);
console.log("\nExample 2: Single block");
console.log(`Block: (${singleBlock.min.x},${singleBlock.min.y},${singleBlock.min.z}) to (${singleBlock.max.x},${singleBlock.max.y},${singleBlock.max.z})`);
console.log(`Span: ${span2.x} x ${span2.y} x ${span2.z} blocks`);

// Example 3: Rectangular building
const building = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 15, y: 70, z: 8 }
};

const span3 = BlockBoundingBoxUtils.getSpan(building);
console.log("\nExample 3: Rectangular building");
console.log(`Building: (${building.min.x},${building.min.y},${building.min.z}) to (${building.max.x},${building.max.y},${building.max.z})`);
console.log(`Span: ${span3.x} x ${span3.y} x ${span3.z} blocks`);
console.log(`Total volume: ${span3.x * span3.y * span3.z} blocks`);

// Example 4: Large terrain area
const terrain = {
    min: { x: -50, y: 60, z: -50 },
    max: { x: 50, y: 80, z: 50 }
};

const span4 = BlockBoundingBoxUtils.getSpan(terrain);
console.log("\nExample 4: Large terrain area");
console.log(`Terrain: (${terrain.min.x},${terrain.min.y},${terrain.min.z}) to (${terrain.max.x},${terrain.max.y},${terrain.max.z})`);
console.log(`Span: ${span4.x} x ${span4.y} x ${span4.z} blocks`);
console.log(`Total volume: ${span4.x * span4.y * span4.z} blocks`);

// Example 5: Practical usage - Calculate material requirements
/**
 * Calculates material requirements for filling a bounding box
 * @param {any} boundingBox - The area to calculate materials for
 */
function calculateMaterialRequirements(boundingBox) {
    const span = BlockBoundingBoxUtils.getSpan(boundingBox);
    const volume = span.x * span.y * span.z;
    
    console.log(`\n=== Material Requirements ===`);
    console.log(`Area: (${boundingBox.min.x},${boundingBox.min.y},${boundingBox.min.z}) to (${boundingBox.max.x},${boundingBox.max.y},${boundingBox.max.z})`);
    console.log(`Dimensions: ${span.x} x ${span.y} x ${span.z} blocks`);
    console.log(`Total blocks needed: ${volume}`);
    
    // Calculate material stacks (assuming 64 blocks per stack)
    const stacks = Math.ceil(volume / 64);
    console.log(`Material stacks needed: ${stacks} stacks`);
    
    // Calculate time estimate (assuming 1 block per second placement)
    const minutes = Math.floor(volume / 60);
    const seconds = volume % 60;
    console.log(`Estimated placement time: ${minutes}m ${seconds}s`);
    
    return { volume, stacks, totalSeconds: volume };
}

// Test material calculations
const warehouse = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 20, y: 70, z: 30 }
};

calculateMaterialRequirements(warehouse);

// Example 6: Compare different structure sizes
console.log("\n=== Structure Size Comparison ===");

const structures = {
    "Small House": { min: { x: 0, y: 64, z: 0 }, max: { x: 7, y: 68, z: 7 } },
    "Medium House": { min: { x: 0, y: 64, z: 0 }, max: { x: 12, y: 70, z: 10 } },
    "Large House": { min: { x: 0, y: 64, z: 0 }, max: { x: 20, y: 75, z: 15 } },
    "Castle": { min: { x: 0, y: 64, z: 0 }, max: { x: 50, y: 100, z: 50 } }
};

for (const [name, bounds] of Object.entries(structures)) {
    const span = BlockBoundingBoxUtils.getSpan(bounds);
    const volume = span.x * span.y * span.z;
    console.log(`${name}: ${span.x}x${span.y}x${span.z} = ${volume} blocks`);
}

// Example 7: Calculate surface area vs volume
/**
 * Calculates both volume and surface area of a bounding box
 * @param {any} boundingBox - The bounding box to analyze
 */
function analyzeBoundingBox(boundingBox) {
    const span = BlockBoundingBoxUtils.getSpan(boundingBox);
    const volume = span.x * span.y * span.z;
    
    // Calculate surface area (6 faces of a rectangular prism)
    const surfaceArea = 2 * (span.x * span.y + span.y * span.z + span.x * span.z);
    
    console.log(`\n=== Bounding Box Analysis ===`);
    console.log(`Dimensions: ${span.x} x ${span.y} x ${span.z}`);
    console.log(`Volume: ${volume} blocks`);
    console.log(`Surface area: ${surfaceArea} blocks`);
    console.log(`Volume to surface ratio: ${(volume / surfaceArea).toFixed(2)}`);
    
    return { span, volume, surfaceArea };
}

// Analyze different shaped buildings
const tower = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 5, y: 100, z: 5 }
};

console.log("Tower analysis:");
analyzeBoundingBox(tower);

const wall = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 50, y: 70, z: 2 }
};

console.log("\nWall analysis:");
analyzeBoundingBox(wall);

// Example 8: Check if structure fits within chunk boundaries
/**
 * Checks if a structure fits within a single chunk (16x16)
 * @param {any} structure - The structure bounding box
 */
function checkChunkFit(structure) {
    const span = BlockBoundingBoxUtils.getSpan(structure);
    const fitsInChunk = span.x <= 16 && span.z <= 16;
    
    console.log(`\n=== Chunk Fit Analysis ===`);
    console.log(`Structure size: ${span.x} x ${span.y} x ${span.z}`);
    console.log(`Fits in single chunk (16x16): ${fitsInChunk ? "✅ Yes" : "❌ No"}`);
    
    if (!fitsInChunk) {
        const chunksX = Math.ceil(span.x / 16);
        const chunksZ = Math.ceil(span.z / 16);
        console.log(`Chunks required: ${chunksX} x ${chunksZ} = ${chunksX * chunksZ} chunks`);
    }
}

checkChunkFit(building);
checkChunkFit(terrain);

// Send message to world for in-game confirmation
world.sendMessage("BlockBoundingBoxUtils.getSpan examples completed! Check console for dimension calculations.");
