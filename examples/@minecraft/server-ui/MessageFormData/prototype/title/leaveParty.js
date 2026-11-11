import { Player, system } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:leaveparty` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:leaveparty" || !(sourceEntity instanceof Player)) return;

  const form = new MessageFormData();
  form.title("Leave Party");
  form.body("Are you sure you want to leave your active party?");
  form.button1("Leave");
  form.button2("Stay");

  form.show(sourceEntity).then((response) => {
    if (response.canceled || response.selection === undefined) return;
    if (response.selection === 0) {
      sourceEntity.sendMessage("You chose Leave.");
    } else {
      sourceEntity.sendMessage("You chose Stay.");
    }
  });
});
