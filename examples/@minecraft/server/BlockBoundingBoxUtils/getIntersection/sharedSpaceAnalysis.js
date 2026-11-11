import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 5: Practical usage - Find shared space between buildings
/**
 * Analyzes shared space between two building areas
 * @param {any} building1 - First building bounding box
 * @param {any} building2 - Second building bounding box
 * @param {string} name1 - Name of first building
 * @param {string} name2 - Name of second building
 */
function analyzeSharedSpace(building1, building2, name1, name2) {
    const shared = BlockBoundingBoxUtils.getIntersection(building1, building2);
    
    console.log(`=== Shared Space Analysis: ${name1} & ${name2} ===`);
    console.log(`${name1}: (${building1.min.x},${building1.min.y},${building1.min.z}) to (${building1.max.x},${building1.max.y},${building1.max.z})`);
    console.log(`${name2}: (${building2.min.x},${building2.min.y},${building2.min.z}) to (${building2.max.x},${building2.max.y},${building2.max.z})`);
    
    if (shared) {
        console.log(`Shared space: (${shared.min.x},${shared.min.y},${shared.min.z}) to (${shared.max.x},${shared.max.y},${shared.max.z})`);
        
        const sharedSpan = BlockBoundingBoxUtils.getSpan(shared);
        const sharedVolume = sharedSpan.x * sharedSpan.y * sharedSpan.z;
        
        const building1Span = BlockBoundingBoxUtils.getSpan(building1);
        const building2Span = BlockBoundingBoxUtils.getSpan(building2);
        const volume1 = building1Span.x * building1Span.y * building1Span.z;
        const volume2 = building2Span.x * building2Span.y * building2Span.z;
        
        console.log(`Shared volume: ${sharedVolume} blocks`);
        console.log(`${name1} overlap: ${((sharedVolume / volume1) * 100).toFixed(1)}%`);
        console.log(`${name2} overlap: ${((sharedVolume / volume2) * 100).toFixed(1)}%`);
        
        if (sharedVolume > 0) {
            console.log("⚠️  Building conflict detected!");
        }
    } else {
        console.log("✅ No shared space - buildings don't conflict");
    }
    
    return shared;
}

// Test shared space analysis
const house1 = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 10, y: 70, z: 8 }
};

const house2 = {
    min: { x: 8, y: 64, z: 6 },
    max: { x: 18, y: 70, z: 14 }
};

const house3 = {
    min: { x: 20, y: 64, z: 20 },
    max: { x: 30, y: 70, z: 28 }
};

analyzeSharedSpace(house1, house2, "House A", "House B");
analyzeSharedSpace(house1, house3, "House A", "House C");

world.sendMessage("Building shared space analysis example completed!");
