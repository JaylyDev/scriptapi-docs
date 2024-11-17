import { system, world } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Subscribe to playerInteractWithEntity event to detect if a player interacts with a block
world.beforeEvents.playerInteractWithEntity.subscribe((event) => {
  // Check if player interacts with a villager whilst holding diamonds
  if (
    event.target.typeId === "minecraft:villager" ||
    event.target.typeId === "minecraft:villager_v2"
  ) {
    // Cancel interaction
    event.cancel = true;

    // Use system.run to queue for later in the current tick to bypass read-only state
    system.run(() => {
      // Show the player a message form
      new MessageFormData()
        .title("villager")
        .body("This is a villager!")
        .button1("Close")
        .show(event.player);
    });
  }
});
