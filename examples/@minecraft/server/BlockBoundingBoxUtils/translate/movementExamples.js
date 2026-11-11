import { BlockBoundingBoxUtils } from "@minecraft/server";

// Basic translation of a bounding box
const originalBox = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 10, y: 74, z: 10 }
};

// Translate the box 5 blocks east, 2 blocks up, and 3 blocks south
const translationOffset = { x: 5, y: 2, z: 3 };
const translatedBox = BlockBoundingBoxUtils.translate(originalBox, translationOffset);

console.log("Basic translation");
console.log(`Original box: (${originalBox.min.x},${originalBox.min.y},${originalBox.min.z}) to (${originalBox.max.x},${originalBox.max.y},${originalBox.max.z})`);
console.log(`Translation: (+${translationOffset.x}, +${translationOffset.y}, +${translationOffset.z})`);
console.log(`Translated box: (${translatedBox.min.x},${translatedBox.min.y},${translatedBox.min.z}) to (${translatedBox.max.x},${translatedBox.max.y},${translatedBox.max.z})`);
