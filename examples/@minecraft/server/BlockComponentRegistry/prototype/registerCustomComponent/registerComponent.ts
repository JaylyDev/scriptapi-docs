import { BlockComponentStepOnEvent, BlockCustomComponent, BlockPermutation, system } from "@minecraft/server";

class TurnToAirComponent implements BlockCustomComponent {
  onStepOn(data: BlockComponentStepOnEvent) {
    data.block.setPermutation(BlockPermutation.resolve("minecraft:emerald_block"));
  }
}

system.beforeEvents.startup.subscribe(event => {
  event.blockComponentRegistry.registerCustomComponent('jayly:custom_block', new TurnToAirComponent());
});