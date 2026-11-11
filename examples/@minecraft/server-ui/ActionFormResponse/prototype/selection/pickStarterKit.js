import { Player, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:pickstarterkit` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:pickstarterkit" || !(sourceEntity instanceof Player)) return;

  const form = new ActionFormData();
  form.title("Choose Starter Kit");
  form.button("Warrior");
  form.button("Archer");

  form.show(sourceEntity).then((response) => {
    if (response.canceled) return;

    // `selection` holds the index of the button the player chose.
    if (response.selection === 0) {
      sourceEntity.sendMessage("You picked the Warrior kit.");
    } else if (response.selection === 1) {
      sourceEntity.sendMessage("You picked the Archer kit.");
    }
  });
});
