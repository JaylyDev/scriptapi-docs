import { Player, system } from "@minecraft/server";
import { ObservableBoolean } from "@minecraft/server-ui";

// Run `/scriptevent example:turnonnotifications` in chat to try this example.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:turnonnotifications" || !(sourceEntity instanceof Player)) return;

  const notifications = new ObservableBoolean(false);
  notifications.subscribe((enabled) => {
    sourceEntity.sendMessage(`Notification status changed to ${enabled}.`);
  });

  notifications.setData(true);
});
