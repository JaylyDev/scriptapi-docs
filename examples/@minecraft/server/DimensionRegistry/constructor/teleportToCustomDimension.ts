// Adapted from Microsoft's Custom Dimension API tutorial:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/custom-dimension-api-tutorial
import { Player, Vector3, world } from "@minecraft/server";

interface DimensionOption {
  label: string;
  id: string;
  spawn: Vector3;
}

const VOID_ARENA_ID = "custom_dim:void_arena";
const SKY_LOUNGE_ID = "custom_dim:sky_lounge";

const DIMENSIONS: DimensionOption[] = [
  { label: "Void Arena", id: VOID_ARENA_ID, spawn: { x: 0, y: 66, z: 0 } },
  { label: "Sky Lounge", id: SKY_LOUNGE_ID, spawn: { x: 0, y: 102, z: 0 } },
  { label: "Overworld", id: "minecraft:overworld", spawn: { x: 0, y: 64, z: 0 } },
];

const CUSTOM_DIM_IDS = new Set<string>([VOID_ARENA_ID, SKY_LOUNGE_ID]);

// Use this helper from a command or menu callback.
export async function teleportPlayerToOption(player: Player, destinationId: string) {
  const destination = DIMENSIONS.find((d) => d.id === destinationId);
  if (!destination) {
    player.sendMessage("Unknown destination.");
    return;
  }

  if (!CUSTOM_DIM_IDS.has(destination.id)) {
    player.teleport(destination.spawn, { dimension: world.getDimension(destination.id) });
    return;
  }

  await teleportToCustomDimension(player, destination);
}

async function teleportToCustomDimension(player: Player, destination: DimensionOption) {
  const dim = world.getDimension(destination.id);
  const tickingAreaId = `${destination.id}_teleport`;

  // Keep destination chunks loaded while teleport happens.
  await world.tickingAreaManager.createTickingArea(tickingAreaId, {
    dimension: dim,
    from: { x: destination.spawn.x - 4, y: destination.spawn.y - 4, z: destination.spawn.z - 4 },
    to: { x: destination.spawn.x + 4, y: destination.spawn.y + 4, z: destination.spawn.z + 4 },
  });

  player.teleport(destination.spawn, { dimension: dim });
  world.tickingAreaManager.removeTickingArea(tickingAreaId);
}
