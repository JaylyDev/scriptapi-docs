import { Player, system } from "@minecraft/server";
import { ObservableUIRawMessage } from "@minecraft/server-ui";

// Run `/scriptevent example:supporterbadge` in chat to try this example.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:supporterbadge" || !(sourceEntity instanceof Player)) return;

  const badgeMessage = new ObservableUIRawMessage({
    rawtext: [{ text: "Gold Tier Supporter" }],
  });

  const messageData = badgeMessage.getData();
  const text = messageData.rawtext?.[0]?.text;
  if (text) {
    sourceEntity.sendMessage(`Supporter badge: ${text}.`);
  }
});
