import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:closeafterthreeseconds` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:closeafterthreeseconds" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Visibility Panel");
  form.label("Monitoring form visibility state.");
  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the visibility panel.");
    } else {
      sourceEntity.sendMessage("You closed the visibility panel.");
    }
  });

  // Check whether the form is still open before closing it.
  system.runTimeout(() => {
    if (form.isShowing()) {
      sourceEntity.sendMessage("Form is open. Closing now.");
      form.close();
    }
  }, 60);
});
