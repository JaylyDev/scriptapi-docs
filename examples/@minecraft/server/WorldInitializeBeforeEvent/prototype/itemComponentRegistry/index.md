## @minecraft/server v1.x example

```javascript
import { BlockPermutation, ItemComponentMineBlockEvent, ItemCustomComponent, world } from "@minecraft/server";

class MineDiamondComponent implements ItemCustomComponent {
  onMineBlock(e: ItemComponentMineBlockEvent): void {
    const { minedBlockPermutation, block } = e;
    if (minedBlockPermutation.matches('minecraft:diamond_ore')) {
      block.setPermutation(BlockPermutation.resolve('minecraft:stone'));
    }
  };
}

world.beforeEvents.worldInitialize.subscribe(event => {
  event.itemComponentRegistry.registerCustomComponent('jayly:custom_item', new MineDiamondComponent());
});
```

## @minecraft/server v2.x example

```javascript
import { BlockPermutation, ItemComponentMineBlockEvent, ItemCustomComponent, world } from "@minecraft/server";
class MineDiamondComponent implements ItemCustomComponent {
  onMineBlock(e: ItemComponentMineBlockEvent): void {
    const { minedBlockPermutation, block } = e;
    if (minedBlockPermutation.matches('minecraft:diamond_ore')) {
      block.setPermutation(BlockPermutation.resolve('minecraft:stone'));
    }
  };
}
