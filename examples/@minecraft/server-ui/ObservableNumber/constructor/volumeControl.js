import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason, ObservableNumber } from "@minecraft/server-ui";

// Run `/scriptevent example:volumecontrol` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:volumecontrol" || !(sourceEntity instanceof Player)) return;

  const soundVolume = new ObservableNumber(50, { clientWritable: true });
  soundVolume.subscribe((volume) => {
    sourceEntity.sendMessage(`Volume adjusted to: ${volume}`);
  });

  const form = new CustomForm(sourceEntity, "Audio Controls");
  form.slider("Sound Volume", soundVolume, 0, 100);

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the audio controls.");
    } else {
      sourceEntity.sendMessage("You closed the audio controls.");
    }
  });
});
