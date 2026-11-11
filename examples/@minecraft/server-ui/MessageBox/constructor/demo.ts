import { MessageBox } from "@minecraft/server-ui";
import { CustomCommandStatus, Player, system } from "@minecraft/server";

// Run /test:messagebox in the chat to see the message box in action
system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "test:messagebox",
      description: "Test the MessageBox API",
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
      MessageBox.create(player, "Delete Item")
        .body("Are you sure you want to delete this item? This action cannot be undone.")
        .button1("Delete")
        .button2("Cancel", "Keep the item and close this dialog")
        .show()
        .then((response) => {
          if (response.selection === 0) {
            console.log("Player chose to delete the item.");
            // Here you would add the logic to delete the item from the player's inventory
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  );
});
