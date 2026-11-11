import { Player, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:weathervote` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:weathervote" || !(sourceEntity instanceof Player)) return;

  const weatherChoices = ["Clear Skies", "Rain Storm"];

  const form = new ActionFormData();
  form.title("Weather Vote");
  form.button(weatherChoices[0]);
  form.button(weatherChoices[1]);

  form.show(sourceEntity).then((response) => {
    if (response.canceled || response.selection === undefined) {
      sourceEntity.sendMessage("Vote canceled.");
      return;
    }
    const choice = weatherChoices[response.selection];
    sourceEntity.sendMessage(`You voted for ${choice}.`);
  });
});
