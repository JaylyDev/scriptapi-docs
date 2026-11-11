import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:whispersettings` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:whispersettings" || !(sourceEntity instanceof Player)) return;

  const form = new ModalFormData();
  form.title("Chat Settings");
  form.toggle("Receive Private Whispers", { defaultValue: true });

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) return;
    const [whispersEnabled] = response.formValues;
    sourceEntity.sendMessage(`Whispers enabled: ${whispersEnabled}`);
  });
});
