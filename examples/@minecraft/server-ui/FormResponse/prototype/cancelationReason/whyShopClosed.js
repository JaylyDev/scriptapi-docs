import { Player, system } from "@minecraft/server";
import { ActionFormData, FormCancelationReason } from "@minecraft/server-ui";

// Run `/scriptevent example:whyshopclosed` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:whyshopclosed" || !(sourceEntity instanceof Player)) return;

  const form = new ActionFormData();
  form.title("Item Shop");
  form.button("Buy Apple");

  form.show(sourceEntity).then((response) => {
    if (!response.canceled) {
      sourceEntity.sendMessage("Purchased an apple.");
      return;
    }

    // `cancelationReason` explains why the form closed without a selection.
    if (response.cancelationReason === FormCancelationReason.UserBusy) {
      sourceEntity.sendMessage("Could not open shop because you were busy.");
    } else if (response.cancelationReason === FormCancelationReason.UserClosed) {
      sourceEntity.sendMessage("You dismissed the shop menu.");
    }
  });
});
