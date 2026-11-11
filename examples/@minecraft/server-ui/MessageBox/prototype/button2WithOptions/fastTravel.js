import { Player, system } from "@minecraft/server";
import { MessageBox } from "@minecraft/server-ui";

// Run `/scriptevent example:fasttravel` in chat to open the prompt.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:fasttravel" || !(sourceEntity instanceof Player)) return;

  const box = new MessageBox(sourceEntity, "Fast Travel");
  box.body("Fast travel costs 5 gold coins.");
  box.button1("Travel");
  box.button2WithOptions("Stay Here", {
    tooltip: "Cancel fast travel and keep coins",
    imageDetails: { imagePackId: "core", imageSrc: "textures/items/barrier" },
  });

  box.show().then((result) => {
    if (result.selection === 1) {
      sourceEntity.sendMessage("Fast travel canceled.");
    } else {
      sourceEntity.sendMessage("Fast traveling now.");
    }
  });
});
