import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:serverinfo` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:serverinfo" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Server Info");
  form.label("Welcome to the server! Explore custom biomes and quests.");
  form.closeButton();

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the server info.");
    } else {
      sourceEntity.sendMessage("You closed the server info.");
    }
  });
});
