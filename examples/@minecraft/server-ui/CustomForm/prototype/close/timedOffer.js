import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:timedoffer` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:timedoffer" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Timed Offer");
  form.label("This offer will close in 3 seconds.");
  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the timed offer.");
    } else {
      sourceEntity.sendMessage("You closed the timed offer.");
    }
  });

  // Close the open form after 3 seconds (60 ticks).
  system.runTimeout(() => {
    if (form.isShowing()) {
      form.close();
    }
  }, 60);
});
