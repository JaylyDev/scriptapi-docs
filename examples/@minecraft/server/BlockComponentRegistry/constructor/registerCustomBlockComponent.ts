import { system, BlockComponentPlayerPlaceBeforeEvent, 
         BlockComponentEntityFallOnEvent, BlockComponentOnPlaceEvent, 
         BlockComponentPlayerBreakEvent, BlockComponentPlayerInteractEvent,
         BlockComponentRandomTickEvent, BlockComponentStepOffEvent,
         BlockComponentStepOnEvent, BlockComponentTickEvent,
         CustomComponentParameters } from "@minecraft/server";

system.beforeEvents.startup.subscribe((startupEvent) => {
  startupEvent.blockComponentRegistry.registerCustomComponent("custom:block", {
    beforeOnPlayerPlace: (event: BlockComponentPlayerPlaceBeforeEvent, params: CustomComponentParameters) => {
      const { player, block, face, permutationToPlace, dimension } = event;
      event.cancel = true; // include this if canceling block placement
      // Your code here
    },
    onEntityFallOn: (event: BlockComponentEntityFallOnEvent, params: CustomComponentParameters) => {
      const { entity, block, fallDistance, dimension } = event;
      // Your code here
    },
    onPlace: (event: BlockComponentOnPlaceEvent, params: CustomComponentParameters) => {
      const { block, dimension, previousBlock } = event;
      // Your code here
    },
    onPlayerBreak: (event: BlockComponentPlayerBreakEvent, params: CustomComponentParameters) => {
      const { player, block, dimension, brokenBlockPermutation } = event;
      // Your code here
    },
    onPlayerInteract: (event: BlockComponentPlayerInteractEvent, params: CustomComponentParameters) => {
      const { player, block, dimension, face, faceLocation } = event;
      // Your code here
    },
    onRandomTick: (event: BlockComponentRandomTickEvent, params: CustomComponentParameters) => {
      const { block, dimension } = event;
      // Your code here
    },
    onStepOff: (event: BlockComponentStepOffEvent, params: CustomComponentParameters) => {
      const { entity, block, dimension } = event;
      // Your code here
    },
    onStepOn: (event: BlockComponentStepOnEvent, params: CustomComponentParameters) => {
      const { entity, block, dimension } = event;
      // Your code here
    },
    onTick: (event: BlockComponentTickEvent, params: CustomComponentParameters) => {
      const { block, dimension } = event;
      // Your code here
    },
  });
});
