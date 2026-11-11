import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason, ObservableString } from "@minecraft/server-ui";

// Run `/scriptevent example:guildtageditor` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:guildtageditor" || !(sourceEntity instanceof Player)) return;

  const guildTag = new ObservableString("Vanguard", { clientWritable: true });
  guildTag.subscribe((text) => {
    sourceEntity.sendMessage(`Guild tag updated: ${text}`);
  });

  const form = new CustomForm(sourceEntity, "Guild Editor");
  form.textField("Guild Tag", guildTag);

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the guild editor.");
    } else {
      sourceEntity.sendMessage("You closed the guild editor.");
    }
  });
});
