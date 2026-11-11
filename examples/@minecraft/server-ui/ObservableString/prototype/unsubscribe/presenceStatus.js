import { Player, system } from "@minecraft/server";
import { CustomForm, ObservableString } from "@minecraft/server-ui";

const statuses = ["Online", "Away", "In Minigame", "Offline"];

// Run `/scriptevent example:presencestatus` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:presencestatus" || !(sourceEntity instanceof Player)) return;

  const playerStatus = new ObservableString("Online");
  const listener = playerStatus.subscribe((status) => {
    sourceEntity.sendMessage(`Status changed to ${status}.`);
  });

  const form = new CustomForm(sourceEntity, "Presence Status");
  // `unsubscribe` removes the listener so it stops receiving changes.
  form.button("Unsubscribe", () => playerStatus.unsubscribe(listener));
  form.button("Subscribe", () => playerStatus.subscribe(listener));

  // Pick a random status every 2 seconds (40 ticks) so the listener receives updates while subscribed.
  const intervalId = system.runInterval(() => {
    playerStatus.setData(statuses[Math.floor(Math.random() * statuses.length)]);
  }, 40);

  // `show` resolves when the player closes the form. Stop the changes then.
  form.show().then(() => system.clearRun(intervalId));
});
