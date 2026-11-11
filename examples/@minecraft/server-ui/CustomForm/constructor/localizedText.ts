// Adapted from Microsoft's DDUI intro doc:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, system } from "@minecraft/server";

// Run /test:localizedform in chat.
// Note: This example expects translation keys to exist in your language files.
system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "test:localizedform",
      description: "Open a DDUI form that uses RawMessage localization",
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

      CustomForm.create(player, { translate: "ui.settings.title" })
        .label({ translate: "ui.settings.description", with: ["value1", "value2"] })
        .button({ translate: "ui.button.save" }, () => {
          console.log(`Localized save button clicked by ${player.name}`);
        })
        .closeButton()
        .show()
        .catch((e) => {
          console.error(e);
        });

      return {
        message: "Opening localized DDUI form...",
        status: CustomCommandStatus.Success,
      };
    }
  );
});
