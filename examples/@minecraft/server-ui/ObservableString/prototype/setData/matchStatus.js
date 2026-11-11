import { Player, system } from "@minecraft/server";
import { ObservableString } from "@minecraft/server-ui";

// Run `/scriptevent example:matchstatus` in chat to try this example.
system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id !== "example:matchstatus" || !(sourceEntity instanceof Player)) return;

  const titleMessage = new ObservableString("Starting Match");
  titleMessage.subscribe((newTitle) => {
    sourceEntity.sendMessage(`Title changed to: ${newTitle}`);
  });

  titleMessage.setData("Match in Progress");
});
