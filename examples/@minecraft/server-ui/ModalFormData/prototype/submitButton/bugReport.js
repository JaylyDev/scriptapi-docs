import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:bugreport` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:bugreport" || !(sourceEntity instanceof Player)) return;

  const form = new ModalFormData();
  form.title("Bug Report");
  form.textField("Summary", "Describe what happened");
  form.submitButton("Send Report");

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) return;
    const [summary] = response.formValues;
    sourceEntity.sendMessage(`Report sent: ${summary}`);
  });
});
