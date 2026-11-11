import { Player, system } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:enablepvp` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:enablepvp" || !(sourceEntity instanceof Player)) return;

  const form = new MessageFormData();
  form.title("Enable PvP");
  form.body("Would you like to enable PvP combat in this arena?");
  form.button1("Enable");
  form.button2("Disable");

  form.show(sourceEntity).then((response) => {
    if (response.canceled || response.selection === undefined) {
      sourceEntity.sendMessage("PvP prompt was canceled.");
      return;
    }
    if (response.selection === 0) {
      sourceEntity.sendMessage("PvP enabled.");
    } else {
      sourceEntity.sendMessage("PvP disabled.");
    }
  });
});
