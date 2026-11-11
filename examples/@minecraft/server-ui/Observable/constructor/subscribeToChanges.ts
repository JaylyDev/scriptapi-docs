import { CustomForm, Observable } from "@minecraft/server-ui";
import { CustomCommandStatus, Player, system } from "@minecraft/server";

const selectedOption = Observable.create<number>(0, { clientWritable: true });

selectedOption.subscribe((newValue) => {
  console.log(`Selection changed to: ${newValue}`);
});

// Simulate a change from a player
system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "test:changeoption",
      description: "Change the selected option",
      permissionLevel: 0,
    },
    (origin) => {
      const player = origin.sourceEntity;
      if (!(player instanceof Player)) {
        return {
          message: "This command can only be used by a player.",
          status: CustomCommandStatus.Failure,
        };
      }
      system.run(() => {
        const form = CustomForm.create(player, "Change Option");
        form.dropdown("Select an option", selectedOption, [
          { label: "Option 1", value: 0 },
          { label: "Option 2", value: 1 },
          { label: "Option 3", value: 2 },
        ]);
        form.show().catch((e) => console.error(e));
      });
      return {
        message: "Creating form...",
        status: CustomCommandStatus.Success,
      };
    }
  );
});
