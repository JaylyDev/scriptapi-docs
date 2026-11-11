import { Player, system } from "@minecraft/server";
import { ObservableString } from "@minecraft/server-ui";

// Run `/scriptevent example:playerstatus` in chat to try this example.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:playerstatus" || !(sourceEntity instanceof Player)) return;

  const statusNote = new ObservableString("Exploring Cave");
  const currentStatus = statusNote.getData();
  sourceEntity.sendMessage(`Player status: ${currentStatus}`);
});
