import { Player, system } from "@minecraft/server";
import { ObservableNumber } from "@minecraft/server-ui";

// Run `/scriptevent example:raisescore` in chat to try this example.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:raisescore" || !(sourceEntity instanceof Player)) return;

  const score = new ObservableNumber(100);
  score.subscribe((newScore) => {
    sourceEntity.sendMessage(`Score changed to ${newScore}.`);
  });

  score.setData(250);
});
