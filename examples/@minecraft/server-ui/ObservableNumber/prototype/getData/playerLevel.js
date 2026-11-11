import { Player, system } from "@minecraft/server";
import { ObservableNumber } from "@minecraft/server-ui";

// Run `/scriptevent example:playerlevel` in chat to try this example.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:playerlevel" || !(sourceEntity instanceof Player)) return;

  const currentLevel = new ObservableNumber(5);
  const level = currentLevel.getData();
  sourceEntity.sendMessage(`Current player level: ${level}`);
});
