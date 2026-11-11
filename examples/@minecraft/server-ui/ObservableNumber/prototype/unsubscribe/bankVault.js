import { Player, system } from "@minecraft/server";
import { CustomForm, ObservableNumber } from "@minecraft/server-ui";

const coinValues = [10, 25, 50, 75, 100];

// Run `/scriptevent example:bankvault` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:bankvault" || !(sourceEntity instanceof Player)) return;

  const goldCoins = new ObservableNumber(50);
  const listener = goldCoins.subscribe((coins) => {
    sourceEntity.sendMessage(`Gold count: ${coins}`);
  });

  const form = new CustomForm(sourceEntity, "Bank Vault");
  // `unsubscribe` removes the listener so it stops receiving changes.
  form.button("Unsubscribe", () => goldCoins.unsubscribe(listener));
  form.button("Subscribe", () => goldCoins.subscribe(listener));

  // Pick a random coin count every 2 seconds (40 ticks) so the listener receives changes while subscribed.
  const intervalId = system.runInterval(() => {
    goldCoins.setData(coinValues[Math.floor(Math.random() * coinValues.length)]);
  }, 40);

  // `show` resolves when the player closes the form. Stop the changes then.
  form.show().then(() => system.clearRun(intervalId));
});
