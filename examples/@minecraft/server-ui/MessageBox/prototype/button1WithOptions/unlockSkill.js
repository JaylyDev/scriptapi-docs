import { Player, system } from "@minecraft/server";
import { MessageBox } from "@minecraft/server-ui";

// Run `/scriptevent example:unlockskill` in chat to open the prompt.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:unlockskill" || !(sourceEntity instanceof Player)) return;

  const box = new MessageBox(sourceEntity, "Unlock Skill");
  box.body("Spend 10 skill points to unlock Fire Resistance?");
  box.button1WithOptions("Unlock", {
    tooltip: "Requires 10 skill points",
    imageDetails: { imagePackId: "core", imageSrc: "textures/items/fire_charge" },
  });
  box.button2("Cancel");

  box.show().then((result) => {
    if (result.selection === 0) {
      sourceEntity.sendMessage("Fire Resistance unlocked.");
    } else {
      sourceEntity.sendMessage("Skill unlock canceled.");
    }
  });
});
