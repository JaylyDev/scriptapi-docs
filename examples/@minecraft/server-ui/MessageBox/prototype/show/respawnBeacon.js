import { Player, system } from "@minecraft/server";
import { DataDrivenScreenClosedReason, MessageBox } from "@minecraft/server-ui";

// Run `/scriptevent example:respawnbeacon` in chat to open the prompt.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:respawnbeacon" || !(sourceEntity instanceof Player)) return;

  const box = new MessageBox(sourceEntity, "Respawn Beacon");
  box.body("Do you want to set your spawn point here?");
  box.button1("Set Spawn");
  box.button2("Cancel");

  box.show().then((result) => {
    if (result.selection === 0) {
      sourceEntity.sendMessage("Spawn point set.");
    } else if (result.selection === 1) {
      sourceEntity.sendMessage("Spawn point unchanged.");
    } else if (result.closeReason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the beacon prompt.");
    } else {
      sourceEntity.sendMessage("You closed the beacon prompt.");
    }
  });
});
