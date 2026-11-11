import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:accountoverview` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:accountoverview" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Account Overview");
  form.label("Manage account settings.");
  form.divider();
  form.button("Log Out", () => {
    sourceEntity.sendMessage("Logged out.");
  });

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the account overview.");
    } else {
      sourceEntity.sendMessage("You closed the account overview.");
    }
  });
});
