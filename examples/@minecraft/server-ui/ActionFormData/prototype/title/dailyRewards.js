import { Player, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:dailyrewards` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:dailyrewards" || !(sourceEntity instanceof Player)) return;

  const form = new ActionFormData();
  form.title("Daily Rewards");
  form.button("Claim Reward");

  form.show(sourceEntity).then((response) => {
    if (response.canceled) return;
    sourceEntity.sendMessage("Claimed daily reward.");
  });
});
