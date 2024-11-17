import { world } from "@minecraft/server";

// Subscribe to playerPlaceBlock event
world.beforeEvents.playerPlaceBlock.subscribe((event) => {
  event.cancel = true; // Cancel place block interaction if needed.
  event.block // Block impacted by this event.
  event.dimension // Dimension that contains the block.
  event.permutationBeingPlaced // Permutation of the replaced block.
  event.player // Player that placed the block.
  event.face // Face of the block that was placed on.
  event.faceLocation // Location of the face that was placed on.
})