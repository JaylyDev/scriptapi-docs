// Originally from MS Learn: https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm, Observable } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, system } from "@minecraft/server";

const playerName = Observable.create<string>("Player", { clientWritable: true });
const difficulty = Observable.create<number>(1, { clientWritable: true });
const musicEnabled = Observable.create<boolean>(true, { clientWritable: true });
const volumeLevel = Observable.create<number>(75, { clientWritable: true });

// Run /test:customform in the chat to see the form in action
system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "test:customform",
      description: "Test the CustomForm API",
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
      CustomForm.create(player, "Game Settings")
        .closeButton()
        .spacer()
        .label("General Settings")
        .divider()
        .textField("Player Name", playerName, {
          description: "Your display name in-game",
        })
        .spacer()
        .label("Difficulty")
        .dropdown("", difficulty, [
          { label: "Peaceful", value: 0 },
          { label: "Easy", value: 1 },
          { label: "Normal", value: 2 },
          { label: "Hard", value: 3 },
        ])
        .spacer()
        .divider()
        .label("Audio Settings")
        .toggle("Music Enabled", musicEnabled)
        .slider("Volume", volumeLevel, 0, 100, {
          description: "Master volume level",
          step: 5,
        })
        .spacer()
        .show()
        .then(() => {
          console.log(
            `Data: ${playerName.getData()} (also this settings do nothing, it's just a demo of the form api)`
          );
        })
        .catch((e) => {
          console.error(e);
        });
    }
  );
});
