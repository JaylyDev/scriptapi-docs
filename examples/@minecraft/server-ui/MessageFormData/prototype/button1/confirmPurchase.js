import { Player, system } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:confirmpurchase` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:confirmpurchase" || !(sourceEntity instanceof Player)) return;

  const form = new MessageFormData();
  form.title("Confirm Purchase");
  form.body("Buy 1 diamond sword for 10 emeralds?");
  form.button1("Confirm");
  form.button2("Cancel");

  form.show(sourceEntity).then((response) => {
    if (response.canceled || response.selection === undefined) return;
    if (response.selection === 0) {
      sourceEntity.sendMessage("Purchased a diamond sword.");
    } else {
      sourceEntity.sendMessage("Purchase canceled.");
    }
  });
});
