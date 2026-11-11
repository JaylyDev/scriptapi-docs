import { Player, system } from "@minecraft/server";
import { MessageBox } from "@minecraft/server-ui";

// Run `/scriptevent example:dungeongate` in chat to open the prompt.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:dungeongate" || !(sourceEntity instanceof Player)) return;

  const box = new MessageBox(sourceEntity, "Dungeon Gate");
  box.body("An iron gate blocks the corridor. How do you open it?");
  box.button1("Use Key");
  box.button2("Pick Lock");
  box.button3WithOptions("Turn Back", {
    tooltip: "Return to the dungeon entrance",
  });

  box.show().then((result) => {
    if (result.selection === 0) {
      sourceEntity.sendMessage("You unlocked the gate with a key.");
    } else if (result.selection === 1) {
      sourceEntity.sendMessage("You picked the lock.");
    } else if (result.selection === 2) {
      sourceEntity.sendMessage("You turned back to the entrance.");
    } else {
      sourceEntity.sendMessage("You closed the gate prompt.");
    }
  });
});
