// Adapted from Microsoft's Custom Dimension API tutorial:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/custom-dimension-api-tutorial
import { CommandPermissionLevel, CustomCommandStatus, Player, StartupEvent, system } from "@minecraft/server";

const VOID_ARENA_ID = "custom_dim:void_arena";
const SKY_LOUNGE_ID = "custom_dim:sky_lounge";

// Register dimensions during startup and expose a simple test command.
system.beforeEvents.startup.subscribe((event: StartupEvent) => {
  event.dimensionRegistry.registerCustomDimension(VOID_ARENA_ID);
  event.dimensionRegistry.registerCustomDimension(SKY_LOUNGE_ID);

  event.customCommandRegistry.registerCommand(
    {
      name: "custom_dim:check",
      description: "Checks if custom dimensions are accessible",
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

      // If registration succeeded, getDimension should resolve these IDs.
      player.sendMessage(`Registered dimensions: ${VOID_ARENA_ID}, ${SKY_LOUNGE_ID}`);
      return {
        status: CustomCommandStatus.Success,
        message: "Custom dimensions look registered.",
      };
    }
  );
});
