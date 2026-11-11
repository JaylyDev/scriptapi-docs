import { Player, system } from "@minecraft/server";
import { CustomForm, ObservableUIRawMessage } from "@minecraft/server-ui";

const alerts = [
  { rawtext: [{ text: "Maintenance in 1 hour." }] },
  { rawtext: [{ text: "Double XP weekend active!" }] },
  { rawtext: [{ text: "New community event started." }] },
];

// Run `/scriptevent example:serveralerts` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:serveralerts" || !(sourceEntity instanceof Player)) return;

  const announcement = new ObservableUIRawMessage({
    rawtext: [{ text: "Welcome to the server!" }],
  });
  // `subscribe` returns the callback. Keep it so `unsubscribe` can remove the same listener.
  const listener = announcement.subscribe((data) => {
    sourceEntity.sendMessage(`Notice: ${data.rawtext?.[0]?.text}`);
  });

  const form = new CustomForm(sourceEntity, "Alerts");
  form.button("Unsubscribe", () => announcement.unsubscribe(listener));
  form.button("Subscribe", () => announcement.subscribe(listener));

  // Change the announcement every 2 seconds (40 ticks) so the listener receives updates.
  const intervalId = system.runInterval(() => {
    announcement.setData(alerts[Math.floor(Math.random() * alerts.length)]);
  }, 40);

  // `show` resolves when the player closes the form. Stop the changes then.
  form.show().then(() => system.clearRun(intervalId));
});
