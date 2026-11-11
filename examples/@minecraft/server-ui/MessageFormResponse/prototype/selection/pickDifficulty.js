import { Player, system } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:pickdifficulty` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:pickdifficulty" || !(sourceEntity instanceof Player)) return;

  const form = new MessageFormData();
  form.title("Difficulty Prompt");
  form.body("Increase monster spawn rate for extra loot?");
  form.button1("Yes, Increase");
  form.button2("No, Keep Normal");

  form.show(sourceEntity).then((response) => {
    if (response.canceled) return;

    // `selection` is 0 when the player presses `button1` and 1 for `button2`.
    if (response.selection === 0) {
      sourceEntity.sendMessage("Harder difficulty selected.");
    } else {
      sourceEntity.sendMessage("Normal difficulty kept.");
    }
  });
});
