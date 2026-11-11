import {
  CustomComponentParameters,
  ItemComponentBeforeDurabilityDamageEvent,
  ItemComponentCompleteUseEvent,
  ItemComponentConsumeEvent,
  ItemComponentHitEntityEvent,
  ItemComponentMineBlockEvent,
  ItemComponentUseEvent,
  ItemComponentUseOnEvent,
  system,
} from "@minecraft/server";

// Register custom item components before the world finishes loading.
system.beforeEvents.startup.subscribe(({ itemComponentRegistry }) => {
  itemComponentRegistry.registerCustomComponent("custom:starter_item_logic", {
    // Runs before durability damage is applied when hitting an entity.
    onBeforeDurabilityDamage(event: ItemComponentBeforeDurabilityDamageEvent, _params: CustomComponentParameters) {
      const { attackingEntity, hitEntity, itemStack } = event;

      // Example beginner behavior: make the item unbreakable.
      event.durabilityDamage = 0;

      console.warn(
        `[ItemCustomComponent] ${attackingEntity?.typeId} hit ${hitEntity?.typeId} with ${itemStack?.typeId}.`
      );
    },

    // Runs when the item is used by a player.
    onUse(event: ItemComponentUseEvent, _params: CustomComponentParameters) {
      const { source, itemStack } = event;
      console.warn(`[ItemCustomComponent] ${source?.typeId} used ${itemStack?.typeId}.`);
    },

    // Runs when the item is used on a block.
    onUseOn(event: ItemComponentUseOnEvent, _params: CustomComponentParameters) {
      const { source, usedOnBlockPermutation } = event;
      console.warn(`[ItemCustomComponent] ${source?.typeId} used item on ${usedOnBlockPermutation?.type.id}.`);
    },

    // Runs when the item mines a block.
    onMineBlock(event: ItemComponentMineBlockEvent, _params: CustomComponentParameters) {
      const { source, block, minedBlockPermutation } = event;
      console.warn(
        `[ItemCustomComponent] ${source?.typeId} mined ${block?.typeId} and broke ${minedBlockPermutation?.type.id}.`
      );
    },

    // Runs when the item hits an entity.
    onHitEntity(event: ItemComponentHitEntityEvent, _params: CustomComponentParameters) {
      const { attackingEntity, hitEntity, hadEffect } = event;
      console.warn(`[ItemCustomComponent] ${attackingEntity?.typeId} hit ${hitEntity?.typeId}. hadEffect=${hadEffect}`);
    },

    // Requires minecraft:use_modifiers on the item.
    onCompleteUse(event: ItemComponentCompleteUseEvent, _params: CustomComponentParameters) {
      const { source, itemStack } = event;
      console.warn(`[ItemCustomComponent] ${source?.typeId} completed use on ${itemStack?.typeId}.`);
    },

    // Requires minecraft:use_modifiers and minecraft:food on the item.
    onConsume(event: ItemComponentConsumeEvent, _params: CustomComponentParameters) {
      const { source, itemStack } = event;
      console.warn(`[ItemCustomComponent] ${source?.typeId} consumed ${itemStack?.typeId}.`);
    },
  });
});
