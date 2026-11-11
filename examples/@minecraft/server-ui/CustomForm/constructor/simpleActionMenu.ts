// Adapted from Microsoft's DDUI intro doc:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, system } from "@minecraft/server";

// This helper keeps the button callbacks easy to read for beginners.
function runMenuAction(player: Player, action: "play" | "settings" | "exit") {
  switch (action) {
    case "play":
      console.log(`${player.name} selected: Play Game`);
      break;
    case "settings":
      console.log(`${player.name} selected: Settings`);
      break;
    case "exit":
      console.log(`${player.name} selected: Exit`);
      break;
  }
}

// Run /test:simplemenu in chat.
system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "test:simplemenu",
      description: "Open a basic DDUI action menu",
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

      CustomForm.create(player, "Main Menu")
        .label("What would you like to do?")
        .spacer()
        .button("Play Game", () => runMenuAction(player, "play"))
        .button("Settings", () => runMenuAction(player, "settings"))
        .button("Exit", () => runMenuAction(player, "exit"))
        .show()
        .catch((e) => {
          console.error(e);
        });

      return {
        message: "Opening simple menu...",
        status: CustomCommandStatus.Success,
      };
    }
  );
});
