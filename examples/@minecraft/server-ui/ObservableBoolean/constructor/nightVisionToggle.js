import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason, ObservableBoolean } from "@minecraft/server-ui";

// Run `/scriptevent example:nightvisiontoggle` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:nightvisiontoggle" || !(sourceEntity instanceof Player)) return;

  const nightVision = new ObservableBoolean(false, { clientWritable: true });
  nightVision.subscribe((enabled) => {
    sourceEntity.sendMessage(`Night Vision set to ${enabled}.`);
  });

  const form = new CustomForm(sourceEntity, "Visual Perks");
  form.toggle("Night Vision", nightVision);

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the perks form.");
    } else {
      sourceEntity.sendMessage("You closed the perks form.");
    }
  });
});
