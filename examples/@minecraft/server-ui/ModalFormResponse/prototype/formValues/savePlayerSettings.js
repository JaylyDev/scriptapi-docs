import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:saveplayersettings` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:saveplayersettings" || !(sourceEntity instanceof Player)) return;

  const form = new ModalFormData();
  form.title("Player Settings");
  form.textField("Nickname", "Your name");
  form.toggle("Show Rank", { defaultValue: true });

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) return;

    // `formValues` contains the values in the order controls were added.
    const [nickname, showRank] = response.formValues;
    sourceEntity.sendMessage(`Saved: Nickname = ${nickname}, Show Rank = ${showRank}`);
  });
});
