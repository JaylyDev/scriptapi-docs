import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:guildregistration` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:guildregistration" || !(sourceEntity instanceof Player)) return;

  const form = new ModalFormData();
  form.title("Registration");
  form.label("Enter your guild application details below.");
  form.textField("Guild Tag", "3 to 4 letters");

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) return;
    const [tag] = response.formValues;
    sourceEntity.sendMessage(`Applied with tag: ${tag}`);
  });
});
