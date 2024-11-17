import { world } from "@minecraft/server";

world.beforeEvents.explosion.subscribe((data) => {
  // Force the explosion to not destroy blocks, but it can impact entities still.
  data.setImpactedBlocks([]);
})