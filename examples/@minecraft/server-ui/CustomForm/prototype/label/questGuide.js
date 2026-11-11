import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:questguide` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:questguide" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Quest Guidance");
  form.label("Defeat 10 zombies in the mines to complete this bounty.");

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the quest guide.");
    } else {
      sourceEntity.sendMessage("You closed the quest guide.");
    }
  });
});
