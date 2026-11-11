import { Player, system } from "@minecraft/server";
import { ObservableBoolean } from "@minecraft/server-ui";

// Run `/scriptevent example:autojumpstatus` in chat to try this example.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:autojumpstatus" || !(sourceEntity instanceof Player)) return;

  const autoJump = new ObservableBoolean(true);
  const isEnabled = autoJump.getData();
  sourceEntity.sendMessage(`Auto jump is currently ${isEnabled ? "enabled" : "disabled"}.`);
});
