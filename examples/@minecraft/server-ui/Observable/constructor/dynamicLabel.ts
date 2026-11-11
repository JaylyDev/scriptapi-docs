// Adapted from Microsoft's DDUI intro doc:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm, Observable } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, system } from "@minecraft/server";

const statusLabel = Observable.create<string>("Ready");
const itemCount = Observable.create<number>(0);

// Whenever itemCount changes, the label text updates too.
itemCount.subscribe((count) => {
  statusLabel.setData(`Found ${count} items`);
});

// Run /test:dynamiclabel in chat.
system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "test:dynamiclabel",
      description: "Show a form with a label bound to an Observable",
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

      // Demo update so beginners can immediately see label changes.
      itemCount.setData(Math.floor(Math.random() * 10) + 1);

      CustomForm.create(player, "Inventory")
        .label(statusLabel)
        .button("Refresh", () => {
          itemCount.setData(Math.floor(Math.random() * 10) + 1);
        })
        .closeButton()
        .show()
        .catch((e) => {
          console.error(e);
        });

      return {
        message: "Opening dynamic label demo...",
        status: CustomCommandStatus.Success,
      };
    }
  );
});
