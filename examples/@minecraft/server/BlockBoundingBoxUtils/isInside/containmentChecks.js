import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// This example demonstrates how to check if a point is inside a bounding box using a custom helper function
// Since BlockBoundingBoxUtils.isInside may not be available in all versions, we'll implement our own containment logic

console.log("=== Point Containment in Bounding Boxes ===");

// Helper function to check if a point is inside a bounding box
/**
 * Checks if a point is inside a bounding box
 * @param {any} point - The point to check
 * @param {any} boundingBox - The bounding box to check against
 * @returns {boolean} True if point is inside the bounding box
 */
function isPointInsideBoundingBox(point, boundingBox) {
    return point.x >= boundingBox.min.x && point.x <= boundingBox.max.x &&
           point.y >= boundingBox.min.y && point.y <= boundingBox.max.y &&
           point.z >= boundingBox.min.z && point.z <= boundingBox.max.z;
}

// Helper function to check if one bounding box is completely inside another
/**
 * Checks if one bounding box is completely contained within another
 * @param {any} innerBox - The inner bounding box
 * @param {any} outerBox - The outer bounding box
 * @returns {boolean} True if innerBox is completely inside outerBox
 */
function isBoundingBoxInside(innerBox, outerBox) {
    return innerBox.min.x >= outerBox.min.x && innerBox.max.x <= outerBox.max.x &&
           innerBox.min.y >= outerBox.min.y && innerBox.max.y <= outerBox.max.y &&
           innerBox.min.z >= outerBox.min.z && innerBox.max.z <= outerBox.max.z;
}
