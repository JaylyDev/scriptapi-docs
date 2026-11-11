import { Player, system } from "@minecraft/server";
import { CustomForm, ObservableString } from "@minecraft/server-ui";

const titles = ["Novice", "Adventurer", "Champion", "Legend"];

// Run `/scriptevent example:ranktitle` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:ranktitle" || !(sourceEntity instanceof Player)) return;

  const playerTitle = new ObservableString("Novice");
  // `subscribe` returns the callback. Keep it so `unsubscribe` can remove the same listener.
  const listener = playerTitle.subscribe((title) => {
    sourceEntity.sendMessage(`Rank title updated to ${title}.`);
  });

  const form = new CustomForm(sourceEntity, "Player Rank");
  form.button("Unsubscribe", () => playerTitle.unsubscribe(listener));
  form.button("Subscribe", () => playerTitle.subscribe(listener));

  // Pick a random title every 2 seconds (40 ticks) so the listener receives updates while subscribed.
  const intervalId = system.runInterval(() => {
    playerTitle.setData(titles[Math.floor(Math.random() * titles.length)]);
  }, 40);

  // `show` resolves when the player closes the form. Stop the changes then.
  form.show().then(() => system.clearRun(intervalId));
});
