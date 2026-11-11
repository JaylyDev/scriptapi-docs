import { Player, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:servernotice` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:servernotice" || !(sourceEntity instanceof Player)) return;

  const form = new ActionFormData();
  form.title("Server Notice");
  form.label("Daily server maintenance occurs every midnight UTC.");
  form.button("Understood");

  form.show(sourceEntity).then((response) => {
    if (response.canceled) return;
    sourceEntity.sendMessage("You acknowledged the server notice.");
  });
});
