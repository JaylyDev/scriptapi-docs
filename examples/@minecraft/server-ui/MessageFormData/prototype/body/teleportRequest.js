import { Player, system } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:teleportrequest` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:teleportrequest" || !(sourceEntity instanceof Player)) return;

  const form = new MessageFormData();
  form.title("Teleport Request");
  form.body("Do you want to teleport to the arena?");
  form.button1("Teleport");
  form.button2("Cancel");

  form.show(sourceEntity).then((response) => {
    if (response.canceled || response.selection === undefined) return;
    if (response.selection === 0) {
      sourceEntity.sendMessage("Teleporting to the arena.");
    } else {
      sourceEntity.sendMessage("Teleport canceled.");
    }
  });
});
