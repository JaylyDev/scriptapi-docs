import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:createclan` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:createclan" || !(sourceEntity instanceof Player)) return;

  const form = new ModalFormData();
  form.title("Clan Creation");
  form.textField("Clan Name", "e.g. Ironclads", { defaultValue: "Miners" });

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) return;
    const [clanName] = response.formValues;
    sourceEntity.sendMessage(`Clan created: ${clanName}`);
  });
});
