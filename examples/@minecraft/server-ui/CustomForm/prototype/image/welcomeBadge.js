import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:welcomebadge` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:welcomebadge" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Welcome Badge");
  form.image("textures/ui/World", "core", { width: 0.5 });
  form.label("Welcome to the realm.");

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the welcome badge.");
    } else {
      sourceEntity.sendMessage("You closed the welcome badge.");
    }
  });
});
