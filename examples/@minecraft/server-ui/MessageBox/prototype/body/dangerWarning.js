import { Player, system } from "@minecraft/server";
import { MessageBox } from "@minecraft/server-ui";

// Run `/scriptevent example:dangerwarning` in chat to open the prompt.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:dangerwarning" || !(sourceEntity instanceof Player)) return;

  const box = new MessageBox(sourceEntity, "Danger Warning");
  box.body("Entering the Nether will drop unprotected inventory items.");
  box.button1("Proceed");
  box.button2("Cancel");

  box.show().then((result) => {
    if (result.selection === 0) {
      sourceEntity.sendMessage("You chose to proceed.");
    } else {
      sourceEntity.sendMessage("You canceled the trip.");
    }
  });
});
