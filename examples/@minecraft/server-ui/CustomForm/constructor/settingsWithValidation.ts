// Adapted from Microsoft's DDUI intro doc:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm, Observable } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, system } from "@minecraft/server";

// Run /test:dduisettings in chat.
system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "test:dduisettings",
      description: "Open a settings form with simple validation",
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

      const username = Observable.create<string>("", { clientWritable: true });
      const renderDistance = Observable.create<number>(12, { clientWritable: true });
      const showParticles = Observable.create<boolean>(true, { clientWritable: true });
      const language = Observable.create<number>(0, { clientWritable: true });

      CustomForm.create(player, "Settings")
        .textField("Username", username, {
          description: "Your display name",
        })
        .slider("Render Distance", renderDistance, 2, 32, {
          step: 1,
          description: "Higher values may impact performance",
        })
        .toggle("Show Particles", showParticles, {
          description: "Display particle effects",
        })
        .dropdown("Language", language, [
          { label: "English", value: 0 },
          { label: "Spanish", value: 1 },
          { label: "French", value: 2 },
        ])
        .closeButton()
        .show()
        .then(() => {
          const finalUsername = username.getData().trim();

          // Beginner-friendly validation: keep username required.
          if (!finalUsername) {
            console.warn("Username is required. Please open the form again.");
            return;
          }

          console.log(
            `Saved settings for ${
              player.name
            }: username=${finalUsername}, renderDistance=${renderDistance.getData()}, showParticles=${showParticles.getData()}, languageIndex=${language.getData()}`
          );
        })
        .catch((e) => {
          console.error(e);
        });

      return {
        message: "Opening DDUI settings form...",
        status: CustomCommandStatus.Success,
      };
    }
  );
});
