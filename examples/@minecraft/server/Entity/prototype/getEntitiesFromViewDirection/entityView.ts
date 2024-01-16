import type { EntityRaycastOptions } from "@minecraft/server";

// Optional: Configure ray cast options
const raycastOptions: EntityRaycastOptions = {
  maxDistance: 10, // Set your desired maximum distance
};

// Perform the ray cast
const entitiesInView = entity.getEntitiesFromViewDirection(raycastOptions);

// Log the results
entitiesInView.forEach((hit) => {
  console.log(`Entity hit at distance ${hit.distance} blocks.`);
  console.log('Entity details:', hit.entity); // You can access properties/methods of the hit entity
});