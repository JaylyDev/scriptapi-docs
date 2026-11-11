import { system } from "@minecraft/server";

// Register custom item components before the world finishes loading.
system.beforeEvents.startup.subscribe(({ itemComponentRegistry }) => {
  itemComponentRegistry.registerCustomComponent("custom:starter_item_logic", {
    // Runs before durability damage is applied when hitting an entity.
    onBeforeDurabilityDamage(event) {
      const { attackingEntity, hitEntity, itemStack } = event;

      // Example beginner behavior: make the item unbreakable.
      event.durabilityDamage = 0;

      console.warn(
        `[ItemCustomComponent] ${attackingEntity?.typeId} hit ${hitEntity?.typeId} with ${itemStack?.typeId}.`
      );
    },

    // Runs when the item is used by a player.
    onUse(event) {
      const { source, itemStack } = event;
      console.warn(`[ItemCustomComponent] ${source?.typeId} used ${itemStack?.typeId}.`);
    },

    // Runs when the item is used on a block.
    onUseOn(event) {
      const { source, usedOnBlockPermutation } = event;
      console.warn(
        `[ItemCustomComponent] ${source?.typeId} used item on ${usedOnBlockPermutation?.type.id}.`
      );
    },

    // Runs when the item mines a block.
    onMineBlock(event) {
      const { source, block, minedBlockPermutation } = event;
      console.warn(
        `[ItemCustomComponent] ${source?.typeId} mined ${block?.typeId} and broke ${minedBlockPermutation?.type.id}.`
      );
    },

    // Runs when the item hits an entity.
    onHitEntity(event) {
      const { attackingEntity, hitEntity, hadEffect } = event;
      console.warn(
        `[ItemCustomComponent] ${attackingEntity?.typeId} hit ${hitEntity?.typeId}. hadEffect=${hadEffect}`
      );
    },

    // Requires minecraft:use_modifiers on the item.
    onCompleteUse(event) {
      const { source, itemStack } = event;
      console.warn(`[ItemCustomComponent] ${source?.typeId} completed use on ${itemStack?.typeId}.`);
    },

    // Requires minecraft:use_modifiers and minecraft:food on the item.
    onConsume(event) {
      const { source, itemStack } = event;
      console.warn(`[ItemCustomComponent] ${source?.typeId} consumed ${itemStack?.typeId}.`);
    },
  });
});