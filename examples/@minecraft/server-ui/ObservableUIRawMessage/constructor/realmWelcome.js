import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason, ObservableUIRawMessage } from "@minecraft/server-ui";

// Run `/scriptevent example:realmwelcome` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:realmwelcome" || !(sourceEntity instanceof Player)) return;

  const welcomeMessage = new ObservableUIRawMessage({
    rawtext: [{ text: "Welcome to " }, { text: "the realm!" }],
  });

  const form = new CustomForm(sourceEntity, welcomeMessage);
  form.label("Thanks for visiting our realm.");

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the welcome form.");
    } else {
      sourceEntity.sendMessage("You closed the welcome form.");
    }
  });
});
