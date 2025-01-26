---
title: Custom Components
description: Define your own behaviors on custom blocks and items with Custom Components.
---

# Custom Components

Custom Components are introduced in Minecraft v1.21.20, which allows creators to define their own behaviors on custom blocks and items with Script API. If you are new to Custom Components, please check out [Introduction of Custom Components](https://learn.microsoft.com/en-us/minecraft/creator/documents/customcomponents) to learn the basics of Custom Components. This article only focuses on templates to attach a custom component to a custom block or item in Minecraft.

## Block Custom Components

In this example, we are attaching a block component called `content:template_component` to a block with ID `content:my_block`.

### Define Custom Component in Block JSON

```json
"minecraft:block": {
    "description": {
        "identifier": "content:my_block"
    },
    // Base Components
    "components": {
        "minecraft:custom_components": ["content:template_component"],
        "minecraft:tick": {
            "interval_range": [3, 3]
        },
```

### Register Block Component with Script API

Register block custom component using objects:

```typescript
import { world } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
  initEvent.blockComponentRegistry.registerCustomComponent(
    "content:template_component",
    {
      beforeOnPlayerPlace: (event) => {
        const { player, block, face, permutationToPlace, dimension } = event;
        event.cancel = true; // include this if canceling block placement
        // Your code here
      },
      onEntityFallOn: (event) => {
        const { entity, block, fallDistance, dimension } = event;
        // Your code here
      },
      onPlace: (event) => {
        const { block, dimension, previousBlock } = event;
        // Your code here
      },
      onPlayerDestroy: (event) => {
        const { player, block, dimension, destroyedBlockPermutation } = event;
        // Your code here
      },
      onPlayerInteract: (event) => {
        const { player, block, dimension, face, faceLocation } = event;
        // Your code here
      },
      onRandomTick: (event) => {
        const { block, dimension } = event;
        // Your code here
      },
      onStepOff: (event) => {
        const { entity, block, dimension } = event;
        // Your code here
      },
      onStepOn: (event) => {
        const { entity, block, dimension } = event;
        // Your code here
      },
      onTick: (event) => {
        const { block, dimension } = event;
        // Your code here
      },
    }
  );
});
```

Register Block Custom Component using classes:

```typescript
import {
  BlockComponentEntityFallOnEvent,
  BlockComponentOnPlaceEvent,
  BlockComponentPlayerDestroyEvent,
  BlockComponentPlayerInteractEvent,
  BlockComponentPlayerPlaceBeforeEvent,
  BlockComponentRandomTickEvent,
  BlockComponentStepOffEvent,
  BlockComponentStepOnEvent,
  BlockComponentTickEvent,
  BlockCustomComponent,
  world,
} from "@minecraft/server";

class TemplateComponent implements BlockCustomComponent {
  constructor() {
    this.beforeOnPlayerPlace = this.beforeOnPlayerPlace.bind(this);
    this.onEntityFallOn = this.onEntityFallOn.bind(this);
    this.onPlace = this.onPlace.bind(this);
    this.onPlayerDestroy = this.onPlayerDestroy.bind(this);
    this.onPlayerInteract = this.onPlayerInteract.bind(this);
    this.onRandomTick = this.onRandomTick.bind(this);
    this.onStepOff = this.onStepOff.bind(this);
    this.onStepOn = this.onStepOn.bind(this);
    this.onTick = this.onTick.bind(this);
  }
  /**
   * This function will be called before a player places the
   * block.
   */
  beforeOnPlayerPlace(event: BlockComponentPlayerPlaceBeforeEvent): void {
    // Code here
  }
  /**
   * This function will be called when an entity falls onto the
   * block that this custom component is bound to.
   */
  onEntityFallOn(event: BlockComponentEntityFallOnEvent): void {
    // Code here
  }
  /**
   * This function will be called when the block that this custom
   * component is bound to is placed.
   */
  onPlace(event: BlockComponentOnPlaceEvent): void {
    // Code here
  }
  /**
   * This function will be called when a player destroys a
   * specific block.
   */
  onPlayerDestroy(event: BlockComponentPlayerDestroyEvent): void {
    // Code here
  }
  /**
   * This function will be called when a player sucessfully
   * interacts with the block that this custom component is bound
   * to.
   */
  onPlayerInteract(event: BlockComponentPlayerInteractEvent): void {
    // Code here
  }
  /**
   * This function will be called when a block randomly ticks.
   */
  onRandomTick(event: BlockComponentRandomTickEvent): void {
    // Code here
  }
  /**
   * This function will be called when an entity steps off the
   * block that this custom component is bound to.
   */
  onStepOff(event: BlockComponentStepOffEvent): void {
    // Code here
  }
  /**
   * This function will be called when an entity steps onto the
   * block that this custom component is bound to.
   */
  onStepOn(event: BlockComponentStepOnEvent): void {
    // Code here
  }
  /**
   * This function will be called when a block ticks.
   */
  onTick(event: BlockComponentTickEvent): void {
    // Code here
  }
}

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
  initEvent.blockComponentRegistry.registerCustomComponent(
    "content:template_component",
    new TemplateComponent()
  );
});
```

## Item Custom Components

In this example, we are attaching an item component called `content:my_item_component` to an item with ID `content:my_item`.

### Define Custom Component in Block JSON

```json
"minecraft:item": {
    "description": {
        "identifier": "content:my_item"
    },
    // Base Components
    "components": {
        "minecraft:custom_components": ["content:my_item_component"],
```

### Register Item Component with Script API

Register item custom component using objects:

```typescript
import { world } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
  initEvent.itemComponentRegistry.registerCustomComponent(
    "content:my_item_component",
    {
      onBeforeDurabilityDamage(event) {
        const { attackingEntity, durabilityDamage, hitEntity, itemStack } =
          event;
        // Your code here
      },
      onCompleteUse(event) {
        const { itemStack, source } = event;
        // Your code here
      },
      onConsume(event) {
        const { itemStack, source } = event;
        // Your code here
      },
      onHitEntity(event) {
        const { attackingEntity, hadEffect, hitEntity, itemStack } = event;
        // Your code here
      },
      onMineBlock(event) {
        const { block, itemStack, minedBlockPermutation, source } = event;
        // Your code here
      },
      onUse(event) {
        const { itemStack, source } = event;
        // Your code here
      },
      onUseOn(event) {
        const { source, usedOnBlockPermutation } = event;
        // Your code here
      },
    }
  );
});
```

Register Item Custom Component using classes:

```typescript
import {
  ItemComponentBeforeDurabilityDamageEvent,
  ItemComponentCompleteUseEvent,
  ItemComponentConsumeEvent,
  ItemComponentHitEntityEvent,
  ItemComponentMineBlockEvent,
  ItemComponentUseEvent,
  ItemComponentUseOnEvent,
  ItemCustomComponent,
  world,
} from "@minecraft/server";

class MyItemComponent implements ItemCustomComponent {
  constructor() {
    this.onBeforeDurabilityDamage = this.onBeforeDurabilityDamage.bind(this);
    this.onCompleteUse = this.onCompleteUse.bind(this);
    this.onConsume = this.onConsume.bind(this);
    this.onHitEntity = this.onHitEntity.bind(this);
    this.onMineBlock = this.onMineBlock.bind(this);
    this.onUse = this.onUse.bind(this);
    this.onUseOn = this.onUseOn.bind(this);
  }
  /**
   * This function will be called when an item containing this
   * component is hitting an entity and about to take durability
   * damage.
   */
  onBeforeDurabilityDamage(
    event: ItemComponentBeforeDurabilityDamageEvent
  ): void {
    // Code here
  }
  /**
   * This function will be called when an item containing this
   * component's use duration was completed.
   */
  onCompleteUse(event: ItemComponentCompleteUseEvent): void {
    // Code here
  }
  /**
   * This function will be called when an item containing this
   * component is eaten by an entity.
   */
  onConsume(event: ItemComponentConsumeEvent): void {
    // Code here
  }
  /**
   * This function will be called when an item containing this
   * component is used to hit another entity.
   */
  onHitEntity(event: ItemComponentHitEntityEvent): void {
    // Code here
  }
  /**
   * This function will be called when an item containing this
   * component is used to mine a block.
   */
  onMineBlock(event: ItemComponentMineBlockEvent): void {
    // Code here
  }
  /**
   * This function will be called when an item containing this
   * component is used by a player.
   */
  onUse(event: ItemComponentUseEvent): void {
    // Code here
  }
  /**
   * This function will be called when an item containing this
   * component is used on a block.
   */
  onUseOn(event: ItemComponentUseOnEvent): void {
    // Code here
  }
}

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
  initEvent.itemComponentRegistry.registerCustomComponent(
    "content:my_item_component",
    new MyItemComponent()
  );
});
```

## Q&A

Questions and answers about Blocks & Items Custom Components are extracted from [Blocks and Items Q&A 2024/08/30](https://wiki.bedrock.dev/meta/blocks-items-qna.html) from Bedrock Wiki. Check out there for Q&A related to other parts of Minecraft Script API.

### Holiday Creator Features replaced with Custom Components

- **Q**: How did you come up with the very interesting recent changes and what motivated you? Why was replacing hcf with custom components a good idea in your opinion?
- **A**: HCF events had some issues with stability, expandability, and was overall (we felt) clunky to use. Eventually it was decided that we needed a completely different solution for long term support of the feature. Scripting is far more stable, easier to expand with more functionality, and is more inline with other existing features in addition to being more powerful. We iterated on several approaches to integrating scripting and JSON events which eventually led us to what we have today with custom components. We do have a few improvements coming to custom components sometime next year that we are excited to share with you all! Overall, custom components we thought provided more power to creators and had far better long term support from the Bedrock platform than HCF events did.

## Data Binding, Parameters

- **Q**: Are there any plans to allow data binding to custom components instead of the has or does not have interface we have currently?
- **A**: This is a feature we are looking forward to doing and will be coming sometime next year. We want to flatten custom components into something that looks and feels more like other components.

- **Q**: Does this include parameters or will they be coming sooner? Paramaters would make custom components much more shareable across items and blocks, as well as between projects.
- **A**: Both custom component flattening and parameters are likely to be released together, and yes will also likely require scripting version 2.0.0. For now we are saying that both of these features will be coming sometime next year

## Plans for onEquip/onUnequip events?

- **Q**: It would be very helpful if the item custom components interface (or world.afterEvents) supported an event that fired when one of the `equippable` slots changed.

  Perhaps `onEquip(arg: {slot: ContainerSlot})` and
  `onUnequip(arg:{slot: ContainerSlot, previousItemStack: ItemStack})`

  This would enable the creation of efficient passive effects (helmet that gives night vision, etc.) without the performance impact of constantly checking each player's equippable slots using runInterval, as is required now.

- **A**: We have the concept of inventory events - including equipment events. We'd want to consider this both at the "custom item component" event.

  It's not something we're working on right now but something I think we'd like to get to in the medium or longer term
