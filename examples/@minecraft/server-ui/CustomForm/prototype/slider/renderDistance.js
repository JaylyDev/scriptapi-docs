import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason, ObservableNumber } from "@minecraft/server-ui";

// Run `/scriptevent example:renderdistance` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:renderdistance" || !(sourceEntity instanceof Player)) return;

  const renderDistance = new ObservableNumber(8, { clientWritable: true });
  renderDistance.subscribe((newDistance) => {
    sourceEntity.sendMessage(`Render distance set to ${newDistance} chunks.`);
  });

  const form = new CustomForm(sourceEntity, "Video Settings");
  form.slider("Render Distance (Chunks)", renderDistance, 4, 16, { step: 2 });

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the settings form.");
    } else {
      sourceEntity.sendMessage("You closed the settings form.");
    }
  });
});
