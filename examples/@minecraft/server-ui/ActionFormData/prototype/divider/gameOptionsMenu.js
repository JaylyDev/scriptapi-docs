import { Player, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:gameoptionsmenu` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:gameoptionsmenu" || !(sourceEntity instanceof Player)) return;

  const form = new ActionFormData();
  form.title("Game Options");
  form.button("Resume Game");
  form.divider();
  form.button("Leave Server");

  form.show(sourceEntity).then((response) => {
    if (response.canceled || response.selection === undefined) return;
    if (response.selection === 0) {
      sourceEntity.sendMessage("Resuming the game.");
    } else {
      sourceEntity.sendMessage("Leaving the server.");
    }
  });
});
