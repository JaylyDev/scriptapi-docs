import { BlockVolume, Vector3 } from "@minecraft/server";

// Create a block volume representing a cubic region
const startLocation: Vector3 = { x: 0, y: 64, z: 0 };
const endLocation: Vector3 = { x: 10, y: 74, z: 10 };

// Create a new block volume using the constructor
const blockVolume = new BlockVolume(startLocation, endLocation);

// Example usage of the block volume
console.log(`Volume spans from (${blockVolume.from.x}, ${blockVolume.from.y}, ${blockVolume.from.z}) to (${blockVolume.to.x}, ${blockVolume.to.y}, ${blockVolume.to.z})`);

// Use BlockVolume methods
const capacity = blockVolume.getCapacity();
console.log(`Volume capacity: ${capacity} blocks`);

// Check if a location touches faces of the volume
const testLocation: Vector3 = { x: 5, y: 68, z: 5 };
const touchesFaces = blockVolume.doesLocationTouchFaces(testLocation);
console.log(`Location (5, 68, 5) ${touchesFaces ? 'touches' : 'does not touch'} the volume faces`);

// Create another volume to test intersection
const otherVolume = new BlockVolume({ x: 5, y: 60, z: 5 }, { x: 15, y: 70, z: 15 });
const volumesIntersect = blockVolume.intersects(otherVolume);
console.log(`Volumes ${volumesIntersect ? 'intersect' : 'do not intersect'}`);

// Get an iterator for all block locations in the volume
const iterator = blockVolume.getBlockLocationIterator();
let blockCount = 0;
for (const location of iterator) {
  blockCount++;
  if (blockCount <= 5) {
    console.log(`Block ${blockCount}: (${location.x}, ${location.y}, ${location.z})`);
  }
}
