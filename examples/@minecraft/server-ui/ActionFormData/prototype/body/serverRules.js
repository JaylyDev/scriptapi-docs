import { Player, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:serverrules` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:serverrules" || !(sourceEntity instanceof Player)) return;

  const form = new ActionFormData();
  form.title("Server Rules");
  form.body("Be respectful, do not grief buildings, and have fun playing.");
  form.button("I Agree");

  form.show(sourceEntity).then((response) => {
    if (response.canceled) {
      sourceEntity.sendMessage("You closed the rules dialog.");
      return;
    }
    sourceEntity.sendMessage("You agreed to the rules.");
  });
});
