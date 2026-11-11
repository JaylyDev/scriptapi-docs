import { ListBlockVolume, Vector3 } from "@minecraft/server";

// Create a list block volume with specific block locations
const locations: Vector3[] = [
  { x: 0, y: 64, z: 0 },
  { x: 1, y: 64, z: 0 },
  { x: 2, y: 64, z: 0 },
  { x: 0, y: 65, z: 0 },
  { x: 5, y: 70, z: 10 }
];

// Create a ListBlockVolume from an array of locations
const listVolume = new ListBlockVolume(locations);

// Get the bounding box that encompasses all locations
const boundingBox = listVolume.getBoundingBox();
console.log(`Bounding box from (${boundingBox.min.x}, ${boundingBox.min.y}, ${boundingBox.min.z}) to (${boundingBox.max.x}, ${boundingBox.max.y}, ${boundingBox.max.z})`);

// Iterate through all block locations in the volume
const iterator = listVolume.getBlockLocationIterator();
let count = 0;
for (const location of iterator) {
  count++;
  console.log(`Block ${count}: (${location.x}, ${location.y}, ${location.z})`);
}

console.log(`List volume contains ${count} blocks`);

// Example: Create a list volume for a specific pattern (like a plus sign)
const plusPattern: Vector3[] = [
  { x: 0, y: 64, z: 0 },   // center
  { x: 1, y: 64, z: 0 },   // east
  { x: -1, y: 64, z: 0 },  // west
  { x: 0, y: 64, z: 1 },   // north
  { x: 0, y: 64, z: -1 }   // south
];

const plusVolume = new ListBlockVolume(plusPattern);

// Count blocks in plus pattern
let plusCount = 0;
for (const location of plusVolume.getBlockLocationIterator()) {
  plusCount++;
}
console.log(`Plus pattern volume contains ${plusCount} blocks`);
