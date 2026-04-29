[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockBoundingBoxUtils

# Class: BlockBoundingBoxUtils

**`Beta`**

Bounding Box Utils is a utility class that provides a number
of useful functions for the creation and utility of [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) objects

## Constructors

### Constructor

> `private` **new BlockBoundingBoxUtils**(): `BlockBoundingBoxUtils`

#### Returns

`BlockBoundingBoxUtils`

## Methods

### createValid()

> `static` **createValid**(`min`, `max`): [`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Parameters

##### min

[`Vector3`](../interfaces/Vector3-1.md)

A corner world location

##### max

[`Vector3`](../interfaces/Vector3-1.md)

A corner world location diametrically opposite

#### Returns

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Remarks

Create a validated instance of a [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md)
where the min and max components are guaranteed to be (min
<= max)

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

console.log("=== BlockBoundingBoxUtils.createValid Examples ===");

// Example 1: Create a simple 3x3x3 bounding box
const simpleBoundingBox = BlockBoundingBoxUtils.createValid(
{ x: 0, y: 64, z: 0 }, // min corner
{ x: 2, y: 66, z: 2 } // max corner
);

console.log("Simple 3x3x3 bounding box:");
console.log(`  Min: (${simpleBoundingBox.min.x}, ${simpleBoundingBox.min.y}, ${simpleBoundingBox.min.z})`);
console.log(`  Max: (${simpleBoundingBox.max.x}, ${simpleBoundingBox.max.y}, ${simpleBoundingBox.max.z})`);
```

```js
// Practical usage - Create a bounding box around a structure

import { BlockBoundingBoxUtils, world } from "@minecraft/server";

/**
Creates a bounding box around a structure
@param {number} centerX - Center X coordinate
@param {number} centerY - Center Y coordinate
@param {number} centerZ - Center Z coordinate
@param {number} width - Width of the structure
@param {number} height - Height of the structure
@param {number} depth - Depth of the structure
/
function createStructureBounds(centerX, centerY, centerZ, width, height, depth) {
const halfWidth = Math.floor(width / 2);
const halfDepth = Math.floor(depth / 2);

return BlockBoundingBoxUtils.createValid(
   { x: centerX - halfWidth, y: centerY, z: centerZ - halfDepth },
   { x: centerX + halfWidth, y: centerY + height - 1, z: centerZ + halfDepth }
);
}

const houseBounds = createStructureBounds(0, 64, 0, 10, 6, 8);
console.log("\nHouse structure bounding box:");
console.log(`  Min: (${houseBounds.min.x}, ${houseBounds.min.y}, ${houseBounds.min.z})`);
console.log(`  Max: (${houseBounds.max.x}, ${houseBounds.max.y}, ${houseBounds.max.z})`);

// Send message to world for in-game confirmation
world.sendMessage("BlockBoundingBoxUtils.createValid examples completed! Check console for details.");
```
The examples demonstrate how to create a valid BlockBoundingBox using `BlockBoundingBoxUtils.createValid`.

The createValid method ensures that the min values are always less than or equal to the max values.

***

### dilate()

> `static` **dilate**(`box`, `size`): [`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Parameters

##### box

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

##### size

[`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

Return a new [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) object representing
the changes

#### Remarks

Expand a [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) by a given amount along
each axis.
Sizes can be negative to perform contraction.
Note: corners can be inverted if the contraction size is
greater than the span, but the min/max relationship will
remain correct

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
```

***

### equals()

> `static` **equals**(`box`, `other`): `boolean`

#### Parameters

##### box

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

##### other

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Returns

`boolean`

#### Remarks

Check if two [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) objects are identical

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

The following examples demonstrate how to compare BlockBoundingBoxes using `BlockBoundingBoxUtils.equals`.

The equals method checks if two bounding boxes have identical min and max coordinates.

## Example 1: Two identical bounding boxes

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";
console.log("=== BlockBoundingBoxUtils.equals Examples ===");

const box1 = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 10, y: 74, z: 10 }
};

const box2 = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 10, y: 74, z: 10 }
};

const areEqual1 = BlockBoundingBoxUtils.equals(box1, box2);
console.log("Example 1: Identical boxes");
console.log(`Box 1: (${box1.min.x},${box1.min.y},${box1.min.z}) to (${box1.max.x},${box1.max.y},${box1.max.z})`);
console.log(`Box 2: (${box2.min.x},${box2.min.y},${box2.min.z}) to (${box2.max.x},${box2.max.y},${box2.max.z})`);
console.log(`Are equal: ${areEqual1}`);
```

## Example 2: Different bounding boxes

```js

const box3 = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 10, y: 74, z: 10 }
};

const box4 = {
    min: { x: 0, y: 64, z: 0 },
    max: { x: 15, y: 74, z: 10 }  // Different max.x
};

const areEqual2 = BlockBoundingBoxUtils.equals(box3, box4);
console.log("\nExample 2: Different boxes (different width)");
console.log(`Box 3: (${box3.min.x},${box3.min.y},${box3.min.z}) to (${box3.max.x},${box3.max.y},${box3.max.z})`);
console.log(`Box 4: (${box4.min.x},${box4.min.y},${box4.min.z}) to (${box4.max.x},${box4.max.y},${box4.max.z})`);
console.log(`Are equal: ${areEqual2}`);
```

***

### expand()

> `static` **expand**(`box`, `other`): [`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Parameters

##### box

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

##### other

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Returns

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

A new [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) instance representing the
smallest possible bounding box which can encompass both

#### Remarks

Expand the initial box object bounds to include the 2nd box
argument.  The resultant [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) object
will be a BlockBoundingBox which exactly encompasses the two
boxes.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getCenter()

> `static` **getCenter**(`box`): [`Vector3`](../interfaces/Vector3-1.md)

#### Parameters

##### box

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

Note that [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) objects represent whole
blocks, so the center of boxes which have odd numbered
bounds are not mathematically centered...
i.e. a BlockBoundingBox( 0,0,0 -> 3,3,3 )  would have a
center of (1,1,1)  (not (1.5, 1.5, 1.5) as expected)

#### Remarks

Calculate the center block of a given [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) object.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// This example demonstrates how to get the center point of a BlockBoundingBox using BlockBoundingBoxUtils.getCenter
// The center is calculated as the midpoint between min and max coordinates

/**
Finds a safe teleportation point at the center of a bounding box
@param {any} boundingBox - The bounding box to find center of
@returns {Object} Safe teleportation coordinates
/
function findSafeTeleportCenter(boundingBox) {
const center = BlockBoundingBoxUtils.getCenter(boundingBox);

// Add some safety by placing the player slightly above the center
const safeTeleport = {
   x: Math.floor(center.x),
   y: Math.floor(center.y) + 2, // 2 blocks above center
   z: Math.floor(center.z),
};

console.log(`Safe teleport point: (${safeTeleport.x}, ${safeTeleport.y}, ${safeTeleport.z})`);
return safeTeleport;
}

console.log("\n=== Safe Teleportation Centers ===");

// Find centers for different structures
const house = {
min: { x: 10, y: 64, z: 10 },
max: { x: 20, y: 70, z: 18 },
};

console.log("\nHouse structure:");
console.log(`Bounds: (${house.min.x},${house.min.y},${house.min.z}) to (${house.max.x},${house.max.y},${house.max.z})`);
findSafeTeleportCenter(house);

const farm = {
min: { x: 50, y: 64, z: 50 },
max: { x: 80, y: 64, z: 80 },
};

console.log("\nFarm area:");
console.log(`Bounds: (${farm.min.x},${farm.min.y},${farm.min.z}) to (${farm.max.x},${farm.max.y},${farm.max.z})`);
findSafeTeleportCenter(farm);
```

```js
// Calculate centers for placing decorative elements

import { BlockBoundingBoxUtils } from "@minecraft/server";

/**
Places a beacon at the center of a defined area
@param {any} area - The area to place beacon in
/
function placeBeaconAtCenter(area) {
const center = BlockBoundingBoxUtils.getCenter(area);
const beaconPos = {
   x: Math.floor(center.x),
   y: Math.floor(center.y),
   z: Math.floor(center.z),
};

console.log(`Beacon placement position: (${beaconPos.x}, ${beaconPos.y}, ${beaconPos.z})`);

// In a real implementation, you would place the beacon block here
// world.getDimension("overworld").getBlock(beaconPos).setType("minecraft:beacon");

return beaconPos;
}

console.log("\n=== Beacon Placement ===");

const courtyard = {
min: { x: 0, y: 64, z: 0 },
max: { x: 20, y: 64, z: 20 },
};

console.log("Courtyard area:");
console.log(
`Bounds: (${courtyard.min.x},${courtyard.min.y},${courtyard.min.z}) to (${courtyard.max.x},${courtyard.max.y},${courtyard.max.z})`
);
placeBeaconAtCenter(courtyard);
```

***

### getIntersection()

> `static` **getIntersection**(`box`, `other`): [`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md) \| `undefined`

#### Parameters

##### box

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

##### other

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Returns

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md) \| `undefined`

#### Remarks

Calculate the BlockBoundingBox which represents the union
area of two intersecting BlockBoundingBoxes

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 7: Intersection-based collision detection
/**
Simulates movement and checks for collisions
@param {any} movingObject - Object that's moving
@param {any} targetPosition - Where the object wants to move
@param {any[]} obstacles - Array of obstacle bounding boxes
/
function checkMovementCollision(movingObject, targetPosition, obstacles) {
console.log("=== Movement Collision Check ===");

// Create target bounding box
const objectSpan = BlockBoundingBoxUtils.getSpan(movingObject);
const targetBox = {
   min: targetPosition,
   max: {
       x: targetPosition.x + objectSpan.x - 1,
       y: targetPosition.y + objectSpan.y - 1,
       z: targetPosition.z + objectSpan.z - 1,
   },
};

console.log(
   `Moving object: (${movingObject.min.x},${movingObject.min.y},${movingObject.min.z}) to (${movingObject.max.x},${movingObject.max.y},${movingObject.max.z})`
);
console.log(
   `Target position: (${targetBox.min.x},${targetBox.min.y},${targetBox.min.z}) to (${targetBox.max.x},${targetBox.max.y},${targetBox.max.z})`
);

for (let i = 0; i < obstacles.length; i++) {
   const obstacle = obstacles[i];
   const collision = BlockBoundingBoxUtils.getIntersection(targetBox, obstacle);

   if (collision) {
       console.log(`❌ Collision detected with obstacle ${i + 1}`);
       console.log(
           `   Obstacle: (${obstacle.min.x},${obstacle.min.y},${obstacle.min.z}) to (${obstacle.max.x},${obstacle.max.y},${obstacle.max.z})`
       );
       console.log(
           `   Collision area: (${collision.min.x},${collision.min.y},${collision.min.z}) to (${collision.max.x},${collision.max.y},${collision.max.z})`
       );
       return false;
   }
}

console.log("✅ No collisions - movement is safe");
return true;
}

// Test movement collision
const player = {
min: { x: 0, y: 64, z: 0 },
max: { x: 1, y: 66, z: 1 },
};

const newPosition = { x: 5, y: 64, z: 5 };

const obstacles = [
{ min: { x: 3, y: 64, z: 3 }, max: { x: 7, y: 68, z: 7 } }, // House
{ min: { x: 10, y: 64, z: 0 }, max: { x: 15, y: 70, z: 5 } }, // Wall
{ min: { x: 0, y: 64, z: 10 }, max: { x: 20, y: 65, z: 12 } }, // Fence
];

checkMovementCollision(player, newPosition, obstacles);

world.sendMessage("Movement collision detection example completed!");
```

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 6: Find intersection of multiple boxes
/**
Finds the common intersection area of multiple bounding boxes
@param {any[]} boxes - Array of bounding boxes
/
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
console.log(
   `  (${commonIntersection.min.x},${commonIntersection.min.y},${commonIntersection.min.z}) to (${commonIntersection.max.x},${commonIntersection.max.y},${commonIntersection.max.z})`
);

return commonIntersection;
}

// Test multiple intersection
const multipleBoxes = [
{ min: { x: 0, y: 64, z: 0 }, max: { x: 15, y: 75, z: 15 } },
{ min: { x: 5, y: 60, z: 5 }, max: { x: 20, y: 70, z: 20 } },
{ min: { x: 3, y: 65, z: 3 }, max: { x: 12, y: 80, z: 12 } },
];

findMultipleIntersection(multipleBoxes);

world.sendMessage("Multiple box intersection example completed!");
```

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 3: One box completely inside another
const largeBox = {
min: { x: 0, y: 64, z: 0 },
max: { x: 20, y: 84, z: 20 },
};

const smallBox = {
min: { x: 5, y: 69, z: 5 },
max: { x: 10, y: 74, z: 10 },
};

const intersection3 = BlockBoundingBoxUtils.getIntersection(largeBox, smallBox);
console.log("Example 3: Small box inside large box");
console.log(
`Large box: (${largeBox.min.x},${largeBox.min.y},${largeBox.min.z}) to (${largeBox.max.x},${largeBox.max.y},${largeBox.max.z})`
);
console.log(
`Small box: (${smallBox.min.x},${smallBox.min.y},${smallBox.min.z}) to (${smallBox.max.x},${smallBox.max.y},${smallBox.max.z})`
);

if (intersection3) {
console.log(
   `Intersection: (${intersection3.min.x},${intersection3.min.y},${intersection3.min.z}) to (${intersection3.max.x},${intersection3.max.y},${intersection3.max.z})`
);

// Check if intersection equals the smaller box
const intersectionEqualsSmall = BlockBoundingBoxUtils.equals(intersection3, smallBox);
console.log(`Intersection equals small box: ${intersectionEqualsSmall}`);
console.log("Note: When one box is inside another, intersection equals the inner box");
}

world.sendMessage("Nested boxes intersection example completed!");
```

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 2: Non-overlapping boxes
const box3 = {
min: { x: 0, y: 64, z: 0 },
max: { x: 5, y: 69, z: 5 },
};

const box4 = {
min: { x: 10, y: 64, z: 10 },
max: { x: 15, y: 69, z: 15 },
};

const intersection2 = BlockBoundingBoxUtils.getIntersection(box3, box4);
console.log("Example 2: Non-overlapping boxes");
console.log(`Box 3: (${box3.min.x},${box3.min.y},${box3.min.z}) to (${box3.max.x},${box3.max.y},${box3.max.z})`);
console.log(`Box 4: (${box4.min.x},${box4.min.y},${box4.min.z}) to (${box4.max.x},${box4.max.y},${box4.max.z})`);

if (intersection2) {
console.log(
   `Intersection: (${intersection2.min.x},${intersection2.min.y},${intersection2.min.z}) to (${intersection2.max.x},${intersection2.max.y},${intersection2.max.z})`
);
} else {
console.log("No intersection - boxes don't overlap");
}

world.sendMessage("Non-overlapping boxes intersection example completed!");
```

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 1: Two clearly overlapping boxes
const box1 = {
min: { x: 0, y: 64, z: 0 },
max: { x: 10, y: 74, z: 10 },
};

const box2 = {
min: { x: 5, y: 69, z: 5 },
max: { x: 15, y: 79, z: 15 },
};

const intersection1 = BlockBoundingBoxUtils.getIntersection(box1, box2);
console.log("Example 1: Overlapping boxes");
console.log(`Box 1: (${box1.min.x},${box1.min.y},${box1.min.z}) to (${box1.max.x},${box1.max.y},${box1.max.z})`);
console.log(`Box 2: (${box2.min.x},${box2.min.y},${box2.min.z}) to (${box2.max.x},${box2.max.y},${box2.max.z})`);

if (intersection1) {
console.log(
   `Intersection: (${intersection1.min.x},${intersection1.min.y},${intersection1.min.z}) to (${intersection1.max.x},${intersection1.max.y},${intersection1.max.z})`
);
const intersectionSpan = BlockBoundingBoxUtils.getSpan(intersection1);
console.log(
   `Intersection size: ${intersectionSpan.x}x${intersectionSpan.y}x${intersectionSpan.z} = ${
       intersectionSpan.x * intersectionSpan.y * intersectionSpan.z
   } blocks`
);
} else {
console.log("No intersection found");
}

world.sendMessage("Overlapping boxes intersection example completed!");
```

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 5: Practical usage - Find shared space between buildings
/**
Analyzes shared space between two building areas
@param {any} building1 - First building bounding box
@param {any} building2 - Second building bounding box
@param {string} name1 - Name of first building
@param {string} name2 - Name of second building
/
function analyzeSharedSpace(building1, building2, name1, name2) {
const shared = BlockBoundingBoxUtils.getIntersection(building1, building2);

console.log(`=== Shared Space Analysis: ${name1} & ${name2} ===`);
console.log(
   `${name1}: (${building1.min.x},${building1.min.y},${building1.min.z}) to (${building1.max.x},${building1.max.y},${building1.max.z})`
);
console.log(
   `${name2}: (${building2.min.x},${building2.min.y},${building2.min.z}) to (${building2.max.x},${building2.max.y},${building2.max.z})`
);

if (shared) {
   console.log(
       `Shared space: (${shared.min.x},${shared.min.y},${shared.min.z}) to (${shared.max.x},${shared.max.y},${shared.max.z})`
   );

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
max: { x: 10, y: 70, z: 8 },
};

const house2 = {
min: { x: 8, y: 64, z: 6 },
max: { x: 18, y: 70, z: 14 },
};

const house3 = {
min: { x: 20, y: 64, z: 20 },
max: { x: 30, y: 70, z: 28 },
};

analyzeSharedSpace(house1, house2, "House A", "House B");
analyzeSharedSpace(house1, house3, "House A", "House C");

world.sendMessage("Building shared space analysis example completed!");
```

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Example 4: Boxes touching at edges
const box5 = {
min: { x: 0, y: 64, z: 0 },
max: { x: 5, y: 69, z: 5 },
};

const box6 = {
min: { x: 5, y: 64, z: 5 },
max: { x: 10, y: 69, z: 10 },
};

const intersection4 = BlockBoundingBoxUtils.getIntersection(box5, box6);
console.log("Example 4: Boxes touching at corner");
console.log(`Box 5: (${box5.min.x},${box5.min.y},${box5.min.z}) to (${box5.max.x},${box5.max.y},${box5.max.z})`);
console.log(`Box 6: (${box6.min.x},${box6.min.y},${box6.min.z}) to (${box6.max.x},${box6.max.y},${box6.max.z})`);

if (intersection4) {
console.log(
   `Intersection: (${intersection4.min.x},${intersection4.min.y},${intersection4.min.z}) to (${intersection4.max.x},${intersection4.max.y},${intersection4.max.z})`
);
const span = BlockBoundingBoxUtils.getSpan(intersection4);
console.log(`Intersection size: ${span.x}x${span.y}x${span.z}`);

if (span.x === 1 && span.y >= 1 && span.z === 1) {
   console.log("Note: Single point/line intersection");
}
} else {
console.log("No intersection found");
}

world.sendMessage("Touching boxes intersection example completed!");
```
// This is an overview of BlockBoundingBoxUtils.getIntersection examples
// Each specific example has been split into separate files for easier learning

=== BlockBoundingBoxUtils.getIntersection Examples Overview ===

Individual example files:
1. overlapBoxes.js - Two clearly overlapping boxes
2. noOverlapBoxes.js - Non-overlapping boxes
3. nestedBoxes.js - One box completely inside another
4. touchingBoxes.js - Boxes touching at edges
5. sharedSpaceAnalysis.js - Practical building conflict detection
6. multipleIntersection.js - Find intersection of multiple boxes
7. collisionDetection.js - Movement collision detection

***

### getSpan()

> `static` **getSpan**(`box`): [`Vector3`](../interfaces/Vector3-1.md)

#### Parameters

##### box

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Get the Span of each of the BlockBoundingBox Axis components

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// This example demonstrates how to get the span (dimensions) of a BlockBoundingBox using BlockBoundingBoxUtils.getSpan
// The span represents the width, height, and depth of the bounding box

console.log("=== BlockBoundingBoxUtils.getSpan Examples ===");

// Example 1: Simple cube bounding box
const cubeBox = {
min: { x: 0, y: 64, z: 0 },
max: { x: 9, y: 73, z: 9 },
};

const span1 = BlockBoundingBoxUtils.getSpan(cubeBox);
console.log("Example 1: 10x10x10 cube");
console.log(
`Box: (${cubeBox.min.x},${cubeBox.min.y},${cubeBox.min.z}) to (${cubeBox.max.x},${cubeBox.max.y},${cubeBox.max.z})`
);
console.log(`Span: ${span1.x} x ${span1.y} x ${span1.z} blocks`);

// Example 2: Single block (span should be 1x1x1)
const singleBlock = {
min: { x: 5, y: 65, z: 5 },
max: { x: 5, y: 65, z: 5 },
};

const span2 = BlockBoundingBoxUtils.getSpan(singleBlock);
console.log("\nExample 2: Single block");
console.log(
`Block: (${singleBlock.min.x},${singleBlock.min.y},${singleBlock.min.z}) to (${singleBlock.max.x},${singleBlock.max.y},${singleBlock.max.z})`
);
console.log(`Span: ${span2.x} x ${span2.y} x ${span2.z} blocks`);

// Example 3: Rectangular building
const building = {
min: { x: 0, y: 64, z: 0 },
max: { x: 15, y: 70, z: 8 },
};

const span3 = BlockBoundingBoxUtils.getSpan(building);
console.log("\nExample 3: Rectangular building");
console.log(
`Building: (${building.min.x},${building.min.y},${building.min.z}) to (${building.max.x},${building.max.y},${building.max.z})`
);
console.log(`Span: ${span3.x} x ${span3.y} x ${span3.z} blocks`);
console.log(`Total volume: ${span3.x * span3.y * span3.z} blocks`);

// Example 4: Large terrain area
const terrain = {
min: { x: -50, y: 60, z: -50 },
max: { x: 50, y: 80, z: 50 },
};

const span4 = BlockBoundingBoxUtils.getSpan(terrain);
console.log("\nExample 4: Large terrain area");
console.log(
`Terrain: (${terrain.min.x},${terrain.min.y},${terrain.min.z}) to (${terrain.max.x},${terrain.max.y},${terrain.max.z})`
);
console.log(`Span: ${span4.x} x ${span4.y} x ${span4.z} blocks`);
console.log(`Total volume: ${span4.x * span4.y * span4.z} blocks`);

// Example 5: Practical usage - Calculate material requirements
/**
Calculates material requirements for filling a bounding box
@param {any} boundingBox - The area to calculate materials for
/
function calculateMaterialRequirements(boundingBox) {
const span = BlockBoundingBoxUtils.getSpan(boundingBox);
const volume = span.x * span.y * span.z;

console.log(`\n=== Material Requirements ===`);
console.log(
   `Area: (${boundingBox.min.x},${boundingBox.min.y},${boundingBox.min.z}) to (${boundingBox.max.x},${boundingBox.max.y},${boundingBox.max.z})`
);
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
max: { x: 20, y: 70, z: 30 },
};

calculateMaterialRequirements(warehouse);

// Example 6: Compare different structure sizes
console.log("\n=== Structure Size Comparison ===");

const structures = {
"Small House": { min: { x: 0, y: 64, z: 0 }, max: { x: 7, y: 68, z: 7 } },
"Medium House": { min: { x: 0, y: 64, z: 0 }, max: { x: 12, y: 70, z: 10 } },
"Large House": { min: { x: 0, y: 64, z: 0 }, max: { x: 20, y: 75, z: 15 } },
Castle: { min: { x: 0, y: 64, z: 0 }, max: { x: 50, y: 100, z: 50 } },
};

for (const [name, bounds] of Object.entries(structures)) {
const span = BlockBoundingBoxUtils.getSpan(bounds);
const volume = span.x * span.y * span.z;
console.log(`${name}: ${span.x}x${span.y}x${span.z} = ${volume} blocks`);
}

// Example 7: Calculate surface area vs volume
/**
Calculates both volume and surface area of a bounding box
@param {any} boundingBox - The bounding box to analyze
/
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
max: { x: 5, y: 100, z: 5 },
};

console.log("Tower analysis:");
analyzeBoundingBox(tower);

const wall = {
min: { x: 0, y: 64, z: 0 },
max: { x: 50, y: 70, z: 2 },
};

console.log("\nWall analysis:");
analyzeBoundingBox(wall);

// Example 8: Check if structure fits within chunk boundaries
/**
Checks if a structure fits within a single chunk (16x16)
@param {any} structure - The structure bounding box
/
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
```

***

### intersects()

> `static` **intersects**(`box`, `other`): `boolean`

#### Parameters

##### box

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

##### other

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Returns

`boolean`

#### Remarks

Check to see if two BlockBoundingBox objects intersect

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { BlockBoundingBoxUtils } from "@minecraft/server";

const box1 = {
min: { x: 0, y: 64, z: 0 },
max: { x: 10, y: 74, z: 10 },
};

const box2 = {
min: { x: 5, y: 69, z: 5 },
max: { x: 15, y: 79, z: 15 },
};

const intersects1 = BlockBoundingBoxUtils.intersects(box1, box2);
console.log("Example 1: Overlapping boxes");
console.log(`Box 1: (${box1.min.x},${box1.min.y},${box1.min.z}) to (${box1.max.x},${box1.max.y},${box1.max.z})`);
console.log(`Box 2: (${box2.min.x},${box2.min.y},${box2.min.z}) to (${box2.max.x},${box2.max.y},${box2.max.z})`);
console.log(`Intersects: ${intersects1}`);
```

```js
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
console.log(`Box 3: (${box3.min.x},${box3.min.y},${box3.min.z}) to (${box3.max.x},${box3.max.y},${box3.max.z})`);
console.log(`Box 4: (${box4.min.x},${box4.min.y},${box4.min.z}) to (${box4.max.x},${box4.max.y},${box4.max.z})`);
console.log(`Intersects: ${intersects2}`);
```
The examples demonstrate how to check if two BlockBoundingBoxes intersect using BlockBoundingBoxUtils.intersects
Two bounding boxes intersect if they share any common space

***

### isInside()

> `static` **isInside**(`box`, `pos`): `boolean`

#### Parameters

##### box

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

##### pos

[`Vector3`](../interfaces/Vector3-1.md)

#### Returns

`boolean`

#### Remarks

Check to see if a given coordinate is inside a
BlockBoundingBox

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// This example demonstrates how to check if a point is inside a bounding box using a custom helper function
// Since BlockBoundingBoxUtils.isInside may not be available in all versions, we'll implement our own containment logic

console.log("=== Point Containment in Bounding Boxes ===");

// Helper function to check if a point is inside a bounding box
/**
Checks if a point is inside a bounding box
@param {any} point - The point to check
@param {any} boundingBox - The bounding box to check against
@returns {boolean} True if point is inside the bounding box
/
function isPointInsideBoundingBox(point, boundingBox) {
return (
   point.x >= boundingBox.min.x &&
   point.x <= boundingBox.max.x &&
   point.y >= boundingBox.min.y &&
   point.y <= boundingBox.max.y &&
   point.z >= boundingBox.min.z &&
   point.z <= boundingBox.max.z
);
}

// Helper function to check if one bounding box is completely inside another
/**
Checks if one bounding box is completely contained within another
@param {any} innerBox - The inner bounding box
@param {any} outerBox - The outer bounding box
@returns {boolean} True if innerBox is completely inside outerBox
/
function isBoundingBoxInside(innerBox, outerBox) {
return (
   innerBox.min.x >= outerBox.min.x &&
   innerBox.max.x <= outerBox.max.x &&
   innerBox.min.y >= outerBox.min.y &&
   innerBox.max.y <= outerBox.max.y &&
   innerBox.min.z >= outerBox.min.z &&
   innerBox.max.z <= outerBox.max.z
);
}
```

***

### isValid()

> `static` **isValid**(`box`): `boolean`

#### Parameters

##### box

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Returns

`boolean`

#### Remarks

Check to see if a BlockBoundingBox is valid (i.e. (min <=
max))

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Check an invalid bounding box (min > max)
const invalidBoundingBox = {
min: { x: 10, y: 74, z: 10 },
max: { x: 0, y: 64, z: 0 },
};

const isValid2 = BlockBoundingBoxUtils.isValid(invalidBoundingBox);
console.log("\nInvalid bounding box (min > max):");
console.log(`  Min: (${invalidBoundingBox.min.x}, ${invalidBoundingBox.min.y}, ${invalidBoundingBox.min.z})`);
console.log(`  Max: (${invalidBoundingBox.max.x}, ${invalidBoundingBox.max.y}, ${invalidBoundingBox.max.z})`);
console.log(`  Is valid: ${isValid2}`);
```

```js
import { world, BlockBoundingBoxUtils } from "@minecraft/server";

// Check a valid bounding box
const validBoundingBox = {
min: { x: 0, y: 64, z: 0 },
max: { x: 10, y: 74, z: 10 },
};

const isValid1 = BlockBoundingBoxUtils.isValid(validBoundingBox);
console.log("Valid bounding box:");
console.log(`  Min: (${validBoundingBox.min.x}, ${validBoundingBox.min.y}, ${validBoundingBox.min.z})`);
console.log(`  Max: (${validBoundingBox.max.x}, ${validBoundingBox.max.y}, ${validBoundingBox.max.z})`);
console.log(`  Is valid: ${isValid1}`);
```

***

### translate()

> `static` **translate**(`box`, `delta`): [`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Parameters

##### box

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

##### delta

[`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

Return a new BlockBoundingBox object which represents the
change

#### Remarks

Move a BlockBoundingBox by a given amount

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { BlockBoundingBoxUtils } from "@minecraft/server";

// Basic translation of a bounding box
const originalBox = {
min: { x: 0, y: 64, z: 0 },
max: { x: 10, y: 74, z: 10 },
};

// Translate the box 5 blocks east, 2 blocks up, and 3 blocks south
const translationOffset = { x: 5, y: 2, z: 3 };
const translatedBox = BlockBoundingBoxUtils.translate(originalBox, translationOffset);

console.log("Basic translation");
console.log(
`Original box: (${originalBox.min.x},${originalBox.min.y},${originalBox.min.z}) to (${originalBox.max.x},${originalBox.max.y},${originalBox.max.z})`
);
console.log(`Translation: (+${translationOffset.x}, +${translationOffset.y}, +${translationOffset.z})`);
console.log(
`Translated box: (${translatedBox.min.x},${translatedBox.min.y},${translatedBox.min.z}) to (${translatedBox.max.x},${translatedBox.max.y},${translatedBox.max.z})`
);
```
This example demonstrates how to translate (move) bounding boxes using `BlockBoundingBoxUtils.translate`.

The translate method moves a bounding box by a specified offset in 3D space.
