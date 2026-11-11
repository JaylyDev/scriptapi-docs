import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:playerfeedback` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:playerfeedback" || !(sourceEntity instanceof Player)) return;

  const form = new ModalFormData();
  form.title("Player Feedback");
  form.textField("Comments", "Type here");

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) {
      sourceEntity.sendMessage("Feedback form canceled.");
      return;
    }
    const [comments] = response.formValues;
    sourceEntity.sendMessage(`Feedback submitted: ${comments}`);
  });
});
