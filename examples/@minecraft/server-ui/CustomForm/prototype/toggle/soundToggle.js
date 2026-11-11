import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason, ObservableBoolean } from "@minecraft/server-ui";

// Run `/scriptevent example:soundtoggle` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:soundtoggle" || !(sourceEntity instanceof Player)) return;

  const soundEnabled = new ObservableBoolean(true, { clientWritable: true });
  soundEnabled.subscribe((enabled) => {
    sourceEntity.sendMessage(`Background music ${enabled ? "enabled" : "disabled"}.`);
  });

  const form = new CustomForm(sourceEntity, "Preferences");
  form.toggle("Play Background Music", soundEnabled);

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed preferences.");
    } else {
      sourceEntity.sendMessage("You closed preferences.");
    }
  });
});
