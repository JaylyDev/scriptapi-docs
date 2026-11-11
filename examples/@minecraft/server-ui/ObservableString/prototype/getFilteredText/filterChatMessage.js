import { Player, system } from "@minecraft/server";
import { ObservableString } from "@minecraft/server-ui";

// Run `/scriptevent example:filterchatmessage` in chat to try this example.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:filterchatmessage" || !(sourceEntity instanceof Player)) return;

  const chatMessage = new ObservableString("Hello world", { clientWritable: true });

  // Check the string against Minecraft text filtering rules for the player.
  chatMessage.getFilteredText(sourceEntity).then((filteredResult) => {
    if (typeof filteredResult === "string") {
      sourceEntity.sendMessage(`Filtered message: ${filteredResult}`);
    } else {
      sourceEntity.sendMessage("Text filtering blocked the message.");
    }
  });
});
