import { Player, system } from "@minecraft/server";
import { CustomForm, DataDrivenScreenClosedReason, ObservableNumber } from "@minecraft/server-ui";

// Run `/scriptevent example:chooseheroclass` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:chooseheroclass" || !(sourceEntity instanceof Player)) return;

  const classNames = ["Warrior", "Mage", "Rogue"];
  const selectedClass = new ObservableNumber(0, { clientWritable: true });
  selectedClass.subscribe((value) => {
    const heroClass = classNames[value] ?? "Unknown";
    sourceEntity.sendMessage(`Selected class: ${heroClass}.`);
  });

  const form = new CustomForm(sourceEntity, "Hero Class");
  form.dropdown("Choose Class", selectedClass, [
    { label: "Warrior", value: 0 },
    { label: "Mage", value: 1 },
    { label: "Rogue", value: 2 },
  ]);

  form.show().then((reason) => {
    if (reason === DataDrivenScreenClosedReason.ServerClosed) {
      sourceEntity.sendMessage("The server closed the hero class form.");
    } else {
      sourceEntity.sendMessage("You closed the hero class form.");
    }
  });
});
