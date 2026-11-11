import { BlockBoundingBoxUtils } from "@minecraft/server";

// Example 2: Two separate boxes that don't intersect
const box3 = {
  min: { x: 0, y: 64, z: 0 },
  max: { x: 5, y: 69, z: 5 },
};

const box4 = {
  min: { x: 10, y: 64, z: 10 },
  max: { x: 15, y: 69, z: 15 },
};

const intersects2 = BlockBoundingBoxUtils.intersects(box3, box4);
console.log("\nExample 2: Separate boxes");
console.log(
  `Box 3: (${box3.min.x},${box3.min.y},${box3.min.z}) to (${box3.max.x},${box3.max.y},${box3.max.z})`
);
console.log(
  `Box 4: (${box4.min.x},${box4.min.y},${box4.min.z}) to (${box4.max.x},${box4.max.y},${box4.max.z})`
);
console.log(`Intersects: ${intersects2}`);
