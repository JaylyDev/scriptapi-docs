import { Player, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:warpmenu` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:warpmenu" || !(sourceEntity instanceof Player)) return;

  const destinations = ["Spawn", "Market"];

  const form = new ActionFormData();
  form.title("Warp Menu");
  form.body("Choose a destination to visit:");
  form.button(destinations[0], "textures/items/compass");
  form.button(destinations[1], "textures/items/emerald");

  form.show(sourceEntity).then((response) => {
    if (response.canceled || response.selection === undefined) return;
    const destination = destinations[response.selection];
    sourceEntity.sendMessage(`Warping to ${destination}.`);
  });
});
