# WorldInitializeBeforeEvent.blockComponentRegistry Migration (v1 to v2)

The `worldInitialize` event has been removed in v2. Use `system.beforeEvents.startup` instead.

## V1 Example (Legacy)
```javascript
import { world, BlockPermutation } from "@minecraft/server";
world.beforeEvents.worldInitialize.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent("jayly:custom_block", {
    onStepOn(data) {
      data.block.setPermutation(BlockPermutation.resolve("minecraft:emerald_block"));
    },
  });
});
```

## V2 Example (Current)
```javascript
import { system, BlockPermutation, BlockComponentStepOnEvent, CustomComponentParameters } from "@minecraft/server";
system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent("jayly:custom_block", {
    onStepOn(data: BlockComponentStepOnEvent, params: CustomComponentParameters) {
      data.block.setPermutation(BlockPermutation.resolve("minecraft:emerald_block"));
    },
  });
});
```

## Key Changes
- **Event Source**: `world.beforeEvents.worldInitialize` → `system.beforeEvents.startup`
- **Imports**: Import `system` instead of `world`
- **Type Safety**: Add explicit types for event parameters and `CustomComponentParameters`
- **Component Methods**: Same functionality but with proper type annotations
