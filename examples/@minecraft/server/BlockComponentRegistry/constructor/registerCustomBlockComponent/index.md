## @minecraft/server v1.x example

```typescript
import { world, BlockCustomComponent } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
  initEvent.blockComponentRegistry.registerCustomComponent("custom:my_block", {
    beforeOnPlayerPlace: (event) => {
      console.log("Block about to be placed");
    },
    onEntityFallOn: (event) => {
      console.log("Entity fell on block");
    },
    onPlace: (event) => {
      console.log("Block was placed");
    },
    onPlayerDestroy: (event) => {
      console.log("Player destroyed block");
    },
    onPlayerInteract: (event) => {
      console.log("Player interacted with block");
    },
    onRandomTick: (event) => {
      console.log("Block random tick");
    },
    onStepOff: (event) => {
      console.log("Entity stepped off block");
    },
    onStepOn: (event) => {
      console.log("Entity stepped on block");
    },
    onTick: (event) => {
      console.log("Block tick");
    }
  });
});
```

## @minecraft/server v2.x example

```typescript
import { system, BlockCustomComponent, BlockComponentPlayerPlaceBeforeEvent, 
         BlockComponentEntityFallOnEvent, BlockComponentOnPlaceEvent, 
         BlockComponentPlayerBreakEvent, BlockComponentPlayerInteractEvent,
         BlockComponentRandomTickEvent, BlockComponentStepOffEvent,
         BlockComponentStepOnEvent, BlockComponentTickEvent,
         CustomComponentParameters } from "@minecraft/server";

system.beforeEvents.startup.subscribe((startupEvent) => {
  startupEvent.blockComponentRegistry.registerCustomComponent("custom:my_block", {
    beforeOnPlayerPlace: (event: BlockComponentPlayerPlaceBeforeEvent, params: CustomComponentParameters) => {
      console.log("Block about to be placed");
    },
    onEntityFallOn: (event: BlockComponentEntityFallOnEvent, params: CustomComponentParameters) => {
      console.log("Entity fell on block");
    },
    onPlace: (event: BlockComponentOnPlaceEvent, params: CustomComponentParameters) => {
      console.log("Block was placed");
    },
    onPlayerBreak: (event: BlockComponentPlayerBreakEvent, params: CustomComponentParameters) => {
      console.log("Player broke block"); // Note: onPlayerDestroy was renamed to onPlayerBreak
    },
    onPlayerInteract: (event: BlockComponentPlayerInteractEvent, params: CustomComponentParameters) => {
      console.log("Player interacted with block");
    },
    onRandomTick: (event: BlockComponentRandomTickEvent, params: CustomComponentParameters) => {
      console.log("Block random tick");
    },
    onStepOff: (event: BlockComponentStepOffEvent, params: CustomComponentParameters) => {
      console.log("Entity stepped off block");
    },
    onStepOn: (event: BlockComponentStepOnEvent, params: CustomComponentParameters) => {
      console.log("Entity stepped on block");
    },
    onTick: (event: BlockComponentTickEvent, params: CustomComponentParameters) => {
      console.log("Block tick");
    }
  });
});
```
