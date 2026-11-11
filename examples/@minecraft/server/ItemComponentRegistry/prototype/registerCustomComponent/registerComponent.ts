import { BlockPermutation, ItemComponentMineBlockEvent, ItemCustomComponent, system } from "@minecraft/server";

class MineDiamondComponent implements ItemCustomComponent {
  onMineBlock(e: ItemComponentMineBlockEvent): void {
    const { minedBlockPermutation, block } = e;
    if (minedBlockPermutation.matches('minecraft:diamond_ore')) {
      block.setPermutation(BlockPermutation.resolve('minecraft:stone'));
    }
  };
}

system.beforeEvents.startup.subscribe(event => {
  event.itemComponentRegistry.registerCustomComponent('jayly:custom_item', new MineDiamondComponent());
});
