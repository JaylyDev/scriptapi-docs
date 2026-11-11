import { system, CustomComponentParameters, ItemComponentBeforeDurabilityDamageEvent,
         ItemComponentCompleteUseEvent, ItemComponentConsumeEvent, ItemComponentHitEntityEvent,
         ItemComponentMineBlockEvent, ItemComponentUseEvent, ItemComponentUseOnEvent } from "@minecraft/server";

system.beforeEvents.startup.subscribe((startupEvent) => {
  startupEvent.itemComponentRegistry.registerCustomComponent("custom:item", {
    onBeforeDurabilityDamage(event: ItemComponentBeforeDurabilityDamageEvent, params: CustomComponentParameters) {
        const { attackingEntity, durabilityDamage, hitEntity, itemStack } = event;
        // Your code here
    },
    onCompleteUse(event: ItemComponentCompleteUseEvent, params: CustomComponentParameters) {
        const { itemStack, source } = event;
        // Your code here
    },
    onConsume(event: ItemComponentConsumeEvent, params: CustomComponentParameters) {
        const { itemStack, source } = event;
        // Your code here
    },
    onHitEntity(event: ItemComponentHitEntityEvent, params: CustomComponentParameters) {
        const { attackingEntity, hadEffect, hitEntity, itemStack } = event;
        // Your code here
    },
    onMineBlock(event: ItemComponentMineBlockEvent, params: CustomComponentParameters) {
        const { block, itemStack, minedBlockPermutation, source } = event;
        // Your code here
    },
    onUse(event: ItemComponentUseEvent, params: CustomComponentParameters) {
        const { itemStack, source } = event;
        // Your code here
    },
    onUseOn(event: ItemComponentUseOnEvent, params: CustomComponentParameters) {
        const { source, usedOnBlockPermutation } = event;
        // Your code here
    }
  })
});
