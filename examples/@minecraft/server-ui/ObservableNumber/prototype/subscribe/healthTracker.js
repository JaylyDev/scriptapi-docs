import { Player, system } from "@minecraft/server";
import { CustomForm, ObservableNumber } from "@minecraft/server-ui";

const levels = [10, 20, 30, 40, 50];

// Run `/scriptevent example:healthtracker` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:healthtracker" || !(sourceEntity instanceof Player)) return;

  const healthPercentage = new ObservableNumber(100);
  // `subscribe` returns the callback. Keep it so `unsubscribe` can remove the same listener.
  const listener = healthPercentage.subscribe((value) => {
    sourceEntity.sendMessage(`Health updated to ${value} percent.`);
  });

  const form = new CustomForm(sourceEntity, "Health Tracker");
  form.button("Unsubscribe", () => healthPercentage.unsubscribe(listener));
  form.button("Subscribe", () => healthPercentage.subscribe(listener));

  // Pick a random level every 2 seconds (40 ticks) so the listener receives changes.
  const intervalId = system.runInterval(() => {
    healthPercentage.setData(levels[Math.floor(Math.random() * levels.length)]);
  }, 40);

  // `show` resolves when the player closes the form. Stop the changes then.
  form.show().then(() => system.clearRun(intervalId));
});
