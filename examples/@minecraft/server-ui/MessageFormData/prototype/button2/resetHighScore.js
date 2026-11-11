import { Player, system } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:resethighscore` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:resethighscore" || !(sourceEntity instanceof Player)) return;

  const form = new MessageFormData();
  form.title("Reset High Score");
  form.body("Are you sure you want to reset your local high score?");
  form.button1("Yes, Reset");
  form.button2("No, Keep Score");

  form.show(sourceEntity).then((response) => {
    if (response.canceled || response.selection === undefined) return;
    if (response.selection === 0) {
      sourceEntity.sendMessage("Reset high score.");
    } else {
      sourceEntity.sendMessage("Kept high score.");
    }
  });
});
