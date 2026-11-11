import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:servercontrols` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:servercontrols" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Server Controls");
  form.header("Gameplay Rules");
  form.button("Toggle Fall Damage", () => {
    sourceEntity.sendMessage("Updated fall damage setting.");
  });

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the controls form.");
    } else {
      sourceEntity.sendMessage("You closed the controls form.");
    }
  });
});
