import { Player, system } from "@minecraft/server";
import { MessageBox } from "@minecraft/server-ui";

// Run `/scriptevent example:claimkit` in chat to open the prompt.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:claimkit" || !(sourceEntity instanceof Player)) return;

  const box = new MessageBox(sourceEntity, "Claim Kit");
  box.body("Claim your daily iron tools package now?");
  box.button1("Claim Now", "Puts items directly into your inventory");
  box.button2("Later");

  box.show().then((result) => {
    if (result.selection === 0) {
      sourceEntity.sendMessage("Claimed iron tools.");
    } else {
      sourceEntity.sendMessage("Postponed kit claim.");
    }
  });
});
