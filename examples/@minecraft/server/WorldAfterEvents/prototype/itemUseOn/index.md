Example: Subscribe to the `itemUse` event, which is triggered when a player uses an item on a block.

```js
// Script by WavePlayz
import { world } from "@minecraft/server";

world.afterEvents.itemUseOn.subscribe(eventData => {
    const { source, block, itemStack } = eventData;
    const { x, y, z } = block.location;
    
    world.sendMessage(`${source.name} used item ${itemStack.typeId} on block at ${x}, ${y}, ${z}`);
});
```
