import { Player, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:questboard` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:questboard" || !(sourceEntity instanceof Player)) return;

  const form = new ActionFormData();
  form.title("Quest Board");
  form.button("Accept Quest");

  form.show(sourceEntity).then((response) => {
    // `canceled` is true when the player closed the dialog without choosing an action.
    if (response.canceled) {
      sourceEntity.sendMessage("You closed the quest board without accepting.");
      return;
    }

    sourceEntity.sendMessage("You accepted the quest.");
  });
});
