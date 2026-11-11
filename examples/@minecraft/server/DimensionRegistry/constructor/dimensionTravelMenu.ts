// Adapted from Microsoft's Custom Dimension API tutorial and sample script:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/custom-dimension-api-tutorial
// https://github.com/microsoft/minecraft-samples/tree/main/custom_dimensions
import { CommandPermissionLevel, CustomCommandStatus, Player, StartupEvent, system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

interface DimensionOption {
  label: string;
  id: string;
  spawn: { x: number; y: number; z: number };
}

const VOID_ARENA_ID = "custom_dim:void_arena";
const SKY_LOUNGE_ID = "custom_dim:sky_lounge";

const DIMENSIONS: DimensionOption[] = [
  { label: "Void Arena", id: VOID_ARENA_ID, spawn: { x: 0, y: 66, z: 0 } },
  { label: "Sky Lounge", id: SKY_LOUNGE_ID, spawn: { x: 0, y: 102, z: 0 } },
  { label: "Overworld", id: "minecraft:overworld", spawn: { x: 0, y: 64, z: 0 } },
  { label: "Nether", id: "minecraft:nether", spawn: { x: 0, y: 64, z: 0 } },
  { label: "The End", id: "minecraft:the_end", spawn: { x: 0, y: 64, z: 0 } },
];

const CUSTOM_DIM_IDS = new Set<string>([VOID_ARENA_ID, SKY_LOUNGE_ID]);

system.beforeEvents.startup.subscribe((event: StartupEvent) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "custom_dim:dimensions",
      description: "Open the dimension travel menu",
      permissionLevel: CommandPermissionLevel.Any,
      cheatsRequired: false,
    },
    (origin) => {
      const player = origin.sourceEntity;
      if (!(player instanceof Player)) {
        return {
          status: CustomCommandStatus.Failure,
          message: "This command can only be used by a player.",
        };
      }

      system.run(() => showDimensionMenu(player));
      return { status: CustomCommandStatus.Success };
    }
  );
});

function showDimensionMenu(player: Player) {
  const form = new ActionFormData()
    .title("Dimension Traveler")
    .body(`You are currently in: ${player.dimension.id}\n\nChoose a destination:`);

  for (const destination of DIMENSIONS) {
    form.button(destination.label);
  }

  form
    .show(player as any)
    .then((response) => {
      if (response.canceled || response.selection === undefined) {
        return;
      }

      const selected = DIMENSIONS[response.selection];
      if (selected.id === player.dimension.id) {
        player.sendMessage("You are already in that dimension.");
        return;
      }

      if (CUSTOM_DIM_IDS.has(selected.id)) {
        void teleportToCustomDimension(player, selected);
      } else {
        player.teleport(selected.spawn, { dimension: world.getDimension(selected.id) });
      }
    })
    .catch((e) => {
      console.error(e);
    });
}

async function teleportToCustomDimension(player: Player, destination: DimensionOption) {
  const dim = world.getDimension(destination.id);
  const tickingAreaId = `${destination.id}_teleport`;

  await world.tickingAreaManager.createTickingArea(tickingAreaId, {
    dimension: dim,
    from: { x: destination.spawn.x - 4, y: destination.spawn.y - 4, z: destination.spawn.z - 4 },
    to: { x: destination.spawn.x + 4, y: destination.spawn.y + 4, z: destination.spawn.z + 4 },
  });

  player.teleport(destination.spawn, { dimension: dim });
  world.tickingAreaManager.removeTickingArea(tickingAreaId);
}
