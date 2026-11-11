import { Player, system } from "@minecraft/server";
import { DataDrivenScreenClosedReason, MessageBox } from "@minecraft/server-ui";

// Run `/scriptevent example:weatheralert` in chat to open the prompt.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:weatheralert" || !(sourceEntity instanceof Player)) return;

  const box = new MessageBox(sourceEntity, "Weather Alert");
  box.body("Thunderstorm approaching the area.");
  box.button1("Acknowledge");
  box.show().then((result) => {
    if (result.selection === 0) {
      sourceEntity.sendMessage("You acknowledged the weather alert.");
    } else if (result.closeReason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the weather alert.");
    } else {
      sourceEntity.sendMessage("You closed the weather alert.");
    }
  });

  // Check whether the message box is still open before closing it.
  system.runTimeout(() => {
    if (box.isShowing()) {
      sourceEntity.sendMessage("Message box is still visible. Closing now.");
      box.close();
    }
  }, 60);
});
