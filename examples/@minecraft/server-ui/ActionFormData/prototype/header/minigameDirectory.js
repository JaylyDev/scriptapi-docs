import { Player, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

// Run `/scriptevent example:minigamedirectory` in chat to open the form.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:minigamedirectory" || !(sourceEntity instanceof Player)) return;

  const minigames = ["Parkour Challenge", "PVP Arena"];

  const form = new ActionFormData();
  form.title("Server Directory");
  form.header("Minigames");
  form.button(minigames[0]);
  form.button(minigames[1]);

  form.show(sourceEntity).then((response) => {
    if (response.canceled || response.selection === undefined) return;
    const minigame = minigames[response.selection];
    sourceEntity.sendMessage(`You selected ${minigame}.`);
  });
});
