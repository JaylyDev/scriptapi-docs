import { system, world } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Subscribe to playerInteractWithBlock event to detect if a player interacts with a block
world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
  // Check if player interacts with a crafter whilst holding diamonds
  if (
    event.block.typeId === "minecraft:crafter" &&
    event.itemStack &&
    event.itemStack.typeId === "minecraft:diamond"
  ) {
    // Cancel interaction
    event.cancel = true;

    // Use system.run to queue for later in the current tick to bypass read-only state
    system.run(() => {
      // Show the player a message form
      new MessageFormData()
        .title("Crafter")
        .body("This is a crafter!")
        .button1("Close")
        .show(event.player);
    });
  }
});

// Please note that playerInteractWithBlock does not fire when player interacts with air.