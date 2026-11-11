import { Player, system } from "@minecraft/server";
import { CustomForm, ObservableBoolean } from "@minecraft/server-ui";

// Run `/scriptevent example:shieldstatus` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:shieldstatus" || !(sourceEntity instanceof Player)) return;

  const shieldActive = new ObservableBoolean(true);
  const listener = shieldActive.subscribe((value) => {
    sourceEntity.sendMessage(`Shield active: ${value}`);
  });

  const form = new CustomForm(sourceEntity, "Shield Status");
  // `unsubscribe` removes the listener so it stops receiving changes.
  form.button("Unsubscribe", () => shieldActive.unsubscribe(listener));
  form.button("Subscribe", () => shieldActive.subscribe(listener));

  // Toggle the boolean every 2 seconds (40 ticks) so the listener receives changes while subscribed.
  const intervalId = system.runInterval(() => {
    shieldActive.setData(!shieldActive.getData());
  }, 40);

  // `show` resolves when the player closes the form. Stop the changes then.
  form.show().then(() => system.clearRun(intervalId));
});
