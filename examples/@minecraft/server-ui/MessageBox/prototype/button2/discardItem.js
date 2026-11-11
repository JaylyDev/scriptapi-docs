import { Player, system } from "@minecraft/server";
import { MessageBox } from "@minecraft/server-ui";

// Run `/scriptevent example:discarditem` in chat to open the prompt.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:discarditem" || !(sourceEntity instanceof Player)) return;

  const box = new MessageBox(sourceEntity, "Discard Item");
  box.body("Are you sure you want to discard your selected item?");
  box.button1("Discard");
  box.button2("Keep Item", "Returns the item safely to your pack");

  box.show().then((result) => {
    if (result.selection === 1) {
      sourceEntity.sendMessage("Item kept safely.");
    } else {
      sourceEntity.sendMessage("Item discarded.");
    }
  });
});
