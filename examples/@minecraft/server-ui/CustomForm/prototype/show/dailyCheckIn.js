import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:dailycheckin` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:dailycheckin" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Daily Check-in");
  form.label("Welcome back to another adventure day.");

  form.show().then((closeReason) => {
    if (closeReason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the daily check-in.");
    } else {
      sourceEntity.sendMessage("You closed the daily check-in.");
    }
  });
});
