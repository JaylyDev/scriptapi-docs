import { Player, system } from "@minecraft/server";
import { CustomForm, ObservableBoolean } from "@minecraft/server-ui";

// Run `/scriptevent example:flightmonitor` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:flightmonitor" || !(sourceEntity instanceof Player)) return;

  const flightMode = new ObservableBoolean(false);
  // `subscribe` returns the callback. Keep it so `unsubscribe` can remove the same listener.
  const listener = flightMode.subscribe((value) => {
    sourceEntity.sendMessage(`Flight mode changed to ${value}.`);
  });

  const form = new CustomForm(sourceEntity, "Flight Monitor");
  form.button("Unsubscribe", () => flightMode.unsubscribe(listener));
  form.button("Subscribe", () => flightMode.subscribe(listener));

  // Toggle the boolean every 2 seconds (40 ticks) so the listener receives changes.
  const intervalId = system.runInterval(() => {
    flightMode.setData(!flightMode.getData());
  }, 40);

  // `show` resolves when the player closes the form. Stop the changes then.
  form.show().then(() => system.clearRun(intervalId));
});
