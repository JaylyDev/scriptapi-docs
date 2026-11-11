import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:musicvolume` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:musicvolume" || !(sourceEntity instanceof Player)) return;

  const form = new ModalFormData();
  form.title("Audio Setup");
  form.slider("Music Volume", 0, 100, { defaultValue: 50, valueStep: 5 });

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) return;
    const [volume] = response.formValues;
    sourceEntity.sendMessage(`Music volume set to: ${volume}`);
  });
});
