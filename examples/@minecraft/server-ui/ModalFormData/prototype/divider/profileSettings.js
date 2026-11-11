import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:profilesettings` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:profilesettings" || !(sourceEntity instanceof Player)) return;

  const form = new ModalFormData();
  form.title("Profile Settings");
  form.textField("Display Name", "Enter name");
  form.divider();
  form.toggle("Show Online Status", { defaultValue: true });

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) return;
    const [name, onlineStatus] = response.formValues;
    sourceEntity.sendMessage(`Saved: Name = ${name}, Online = ${onlineStatus}`);
  });
});
