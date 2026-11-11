import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:worldoptions` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:worldoptions" || !(sourceEntity instanceof Player)) return;

  const form = new ModalFormData();
  form.title("Custom World Options");
  form.toggle("Keep Inventory", { defaultValue: true });

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) return;
    const [keepInventory] = response.formValues;
    sourceEntity.sendMessage(`Keep Inventory set to: ${keepInventory}`);
  });
});
