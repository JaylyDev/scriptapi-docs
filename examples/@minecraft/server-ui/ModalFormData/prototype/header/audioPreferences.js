import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:audiopreferences` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:audiopreferences" || !(sourceEntity instanceof Player)) return;

  const form = new ModalFormData();
  form.title("Preferences");
  form.header("Audio Controls");
  form.slider("Volume", 0, 100, { defaultValue: 80, valueStep: 10 });

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) return;
    const [volume] = response.formValues;
    sourceEntity.sendMessage(`Saved volume: ${volume}`);
  });
});
