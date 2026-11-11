import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason } from "@minecraft/server-ui";

// Run `/scriptevent example:spacebeforebutton` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:spacebeforebutton" || !(sourceEntity instanceof Player)) return;

  const form = new CustomForm(sourceEntity, "Layout Spacing");
  form.header("Top Section");
  form.spacer();
  form.button("Continue", () => {
    sourceEntity.sendMessage("Proceeding.");
  });

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the form.");
    } else {
      sourceEntity.sendMessage("You closed the form.");
    }
  });
});
