import { Player, system } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:gamedifficulty` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:gamedifficulty" || !(sourceEntity instanceof Player)) return;

  const difficulties = ["Easy", "Normal", "Hard"];

  const form = new ModalFormData();
  form.title("Game Settings");
  form.dropdown("Difficulty", difficulties, { defaultValueIndex: 1 });

  form.show(sourceEntity).then((response) => {
    if (response.canceled || !response.formValues) return;
    const [difficultyIndex] = response.formValues;
    const difficulty = typeof difficultyIndex === "number" ? difficulties[difficultyIndex] : undefined;
    if (difficulty) {
      sourceEntity.sendMessage(`Selected difficulty: ${difficulty}.`);
    }
  });
});
