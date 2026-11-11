import { system } from "@minecraft/server";

const VOID_ARENA_ID = "custom_dim:void_arena";
const SKY_LOUNGE_ID = "custom_dim:sky_lounge";

// Register custom dimensions during startup.
// This is the only phase where DimensionRegistry is available.
system.beforeEvents.startup.subscribe((event) => {
  event.dimensionRegistry.registerCustomDimension(VOID_ARENA_ID);
  event.dimensionRegistry.registerCustomDimension(SKY_LOUNGE_ID);
});
