import { CompoundBlockVolume, BlockVolume, Vector3, CompoundBlockVolumeItem } from "@minecraft/server";

// Create a compound block volume that combines multiple volumes
const compoundVolume = new CompoundBlockVolume();

// Create some individual block volumes
const volume1 = new BlockVolume({ x: 0, y: 64, z: 0 }, { x: 5, y: 69, z: 5 });
const volume2 = new BlockVolume({ x: 10, y: 64, z: 10 }, { x: 15, y: 69, z: 15 });
const volume3 = new BlockVolume({ x: 2, y: 66, z: 2 }, { x: 7, y: 71, z: 7 });

// Create compound volume items
const item1: CompoundBlockVolumeItem = { volume: volume1 };
const item2: CompoundBlockVolumeItem = { volume: volume2 };
const item3: CompoundBlockVolumeItem = { volume: volume3 };

// Add volumes to the compound volume
compoundVolume.pushVolume(item1);
compoundVolume.pushVolume(item2);
compoundVolume.pushVolume(item3);

// Get the total capacity
const totalCapacity = compoundVolume.capacity;
console.log(`Compound volume total capacity: ${totalCapacity} blocks`);

// Check if the compound volume is empty
const isEmpty = compoundVolume.isEmpty;
console.log(`Compound volume is ${isEmpty ? 'empty' : 'not empty'}`);

// Get the maximum bounding box
const boundingBox = compoundVolume.getBoundingBox();
console.log(`Bounding box from (${boundingBox.min.x}, ${boundingBox.min.y}, ${boundingBox.min.z}) to (${boundingBox.max.x}, ${boundingBox.max.y}, ${boundingBox.max.z})`);

// Iterate through all block locations
const iterator = compoundVolume.getBlockLocationIterator();
let count = 0;
for (const location of iterator) {
  count++;
  if (count <= 3) {
    console.log(`Block ${count}: (${location.x}, ${location.y}, ${location.z})`);
  }
}
