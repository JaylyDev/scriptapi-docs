import { Player, system } from "@minecraft/server";
import { DataDrivenScreenClosedReason, MessageBox } from "@minecraft/server-ui";

// Run `/scriptevent example:matchready` in chat to open the prompt.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:matchready" || !(sourceEntity instanceof Player)) return;

  const box = new MessageBox(sourceEntity, "Match Ready");
  box.body("Starting arena match. Closes automatically in 3 seconds.");
  box.button1("Ready");
  box.show().then((result) => {
    if (result.selection === 0) {
      sourceEntity.sendMessage("You confirmed you are ready.");
    } else if (result.closeReason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the match prompt.");
    } else {
      sourceEntity.sendMessage("You closed the match prompt.");
    }
  });

  // Close the message box after 3 seconds (60 ticks).
  system.runTimeout(() => {
    if (box.isShowing()) {
      box.close();
    }
  }, 60);
});
