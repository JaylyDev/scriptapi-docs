import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:acceptordecline` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:acceptordecline" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Confirm Action");
  form.label("Do you want to proceed with this purchase?");
  form.multiButtonRow([
    { label: "Accept", onClick: () => sourceEntity.sendMessage("Accepted.") },
    { label: "Decline", onClick: () => sourceEntity.sendMessage("Declined.") },
  ]);

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the confirmation form.");
    } else {
      sourceEntity.sendMessage("You closed the confirmation form.");
    }
  });
});
