import { world, Player, BlockPermutation } from "@minecraft/server";

// Subscribe to the itemUse event before it happens
world.beforeEvents.itemUse.subscribe((event) => {
  const { source, itemStack } = event;
  if (!(source instanceof Player)) return;

  event.cancel = true; // Cancel the default item use behavior
  source.sendMessage("You can't use " + itemStack.typeId);
});