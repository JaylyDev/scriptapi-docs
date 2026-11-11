import { Player, system } from "@minecraft/server";
import { CustomForm, ObservableUIRawMessage } from "@minecraft/server-ui";

const eventNotices = [
  { rawtext: [{ text: "Event: Parkour challenge open!" }] },
  { rawtext: [{ text: "Event: Arena battles starting!" }] },
  { rawtext: [{ text: "Event: Scavenger hunt underway!" }] },
];

// Run `/scriptevent example:eventsfeed` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:eventsfeed" || !(sourceEntity instanceof Player)) return;

  const eventFeed = new ObservableUIRawMessage({
    rawtext: [{ text: "Event: Gathering participants..." }],
  });
  const listener = eventFeed.subscribe((data) => {
    sourceEntity.sendMessage(`Feed: ${data.rawtext?.[0]?.text}`);
  });

  const form = new CustomForm(sourceEntity, "Events Feed");
  // `unsubscribe` removes the listener so it stops receiving changes.
  form.button("Unsubscribe", () => eventFeed.unsubscribe(listener));
  form.button("Subscribe", () => eventFeed.subscribe(listener));

  // Change the notice every 2 seconds (40 ticks) so the listener receives updates while subscribed.
  const intervalId = system.runInterval(() => {
    eventFeed.setData(eventNotices[Math.floor(Math.random() * eventNotices.length)]);
  }, 40);

  // `show` resolves when the player closes the form. Stop the changes then.
  form.show().then(() => system.clearRun(intervalId));
});
