// Adapted from Microsoft's DDUI intro doc:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm, Observable } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, TicksPerSecond, system } from "@minecraft/server";

// Run /test:entitymonitor in chat.
system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "test:entitymonitor",
      description: "Open a DDUI form that updates while it is open",
      permissionLevel: CommandPermissionLevel.Any,
    },
    (origin) => {
      const player = origin.sourceEntity;
      if (!(player instanceof Player)) {
        return {
          message: "This command can only be used by a player.",
          status: CustomCommandStatus.Failure,
        };
      }

      const entityStatus = Observable.create<string>("Scanning...");
      const clearButtonDisabled = Observable.create<boolean>(true);
      const statusMessage = Observable.create<string>("No action yet.");

      // This interval keeps updating the UI every 4 seconds.
      const intervalId = system.runInterval(() => {
        const nearbyEntities = player.dimension.getEntities({
          location: player.location,
          maxDistance: 20,
          excludeTypes: ["minecraft:player"],
        });

        entityStatus.setData(`Found ${nearbyEntities.length} entities within 20 blocks`);
        clearButtonDisabled.setData(nearbyEntities.length === 0);
      }, TicksPerSecond * 4);

      CustomForm.create(player, "Entity Monitor")
        .spacer()
        .label(entityStatus)
        .spacer()
        .button(
          "Remove Nearby Non-Player Entities",
          () => {
            const entities = player.dimension.getEntities({
              location: player.location,
              maxDistance: 20,
              excludeTypes: ["minecraft:player"],
            });

            let count = 0;
            for (const entity of entities) {
              entity.kill();
              count++;
            }

            statusMessage.setData(`Removed ${count} entities.`);
          },
          {
            tooltip: "Removes non-player entities in range",
            disabled: clearButtonDisabled,
          }
        )
        .spacer()
        .divider()
        .label(statusMessage)
        .closeButton()
        .show()
        .then(() => {
          // Always clean up intervals when form closes.
          system.clearRun(intervalId);
        })
        .catch((e) => {
          system.clearRun(intervalId);
          console.error(e);
        });

      return {
        message: "Opening live entity monitor...",
        status: CustomCommandStatus.Success,
      };
    }
  );
});
