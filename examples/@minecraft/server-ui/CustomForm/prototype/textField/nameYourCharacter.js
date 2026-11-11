import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason, ObservableString } from "@minecraft/server-ui";

// Run `/scriptevent example:nameyourcharacter` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:nameyourcharacter" || !(sourceEntity instanceof Player)) return;

  const playerNameInput = new ObservableString("", { clientWritable: true });
  playerNameInput.subscribe((text) => {
    sourceEntity.sendMessage(`Name updated to: ${text}`);
  });

  const form = new CustomForm(sourceEntity, "Character Setup");
  form.textField("Character Name", playerNameInput);

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed character setup.");
    } else {
      sourceEntity.sendMessage("You closed character setup.");
    }
  });
});
