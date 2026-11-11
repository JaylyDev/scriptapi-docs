import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:teleporthub` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:teleporthub" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Teleport Hub");
  form.button("Teleport to Spawn", () => {
    sourceEntity.sendMessage("Teleported to spawn.");
  });

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the teleport hub.");
    } else {
      sourceEntity.sendMessage("You closed the teleport hub.");
    }
  });
});
