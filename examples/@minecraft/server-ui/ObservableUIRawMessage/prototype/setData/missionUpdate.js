import { Player, system } from "@minecraft/server";
import { ObservableUIRawMessage } from "@minecraft/server-ui";

// Run `/scriptevent example:missionupdate` in chat to try this example.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:missionupdate" || !(sourceEntity instanceof Player)) return;

  const missionText = new ObservableUIRawMessage({
    rawtext: [{ text: "Phase 1: Explore Caves" }],
  });
  missionText.subscribe((data) => {
    sourceEntity.sendMessage(`Mission updated: ${data.rawtext?.[0]?.text}`);
  });

  missionText.setData({
    rawtext: [{ text: "Phase 2: Defeat Boss" }],
  });
});
