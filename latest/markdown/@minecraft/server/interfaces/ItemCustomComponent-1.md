[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemCustomComponent

# Interface: ItemCustomComponent

Contains a set of events that will be raised for an item.
This object must be bound using the ItemComponentRegistry.

## Examples

```js
import { system } from "@minecraft/server";

// Register custom item components before the world finishes loading.
system.beforeEvents.startup.subscribe(({ itemComponentRegistry }) => {
   itemComponentRegistry.registerCustomComponent("custom:starter_item_logic", {
       // Runs before durability damage is applied when hitting an entity.
       onBeforeDurabilityDamage(event) {
           const { attackingEntity, hitEntity, itemStack } = event;

           // Example beginner behavior: make the item unbreakable.
           event.durabilityDamage = 0;

           console.warn(
               `[ItemCustomComponent] ${attackingEntity?.typeId} hit ${hitEntity?.typeId} with ${itemStack?.typeId}.`
           );
       },

       // Runs when the item is used by a player.
       onUse(event) {
           const { source, itemStack } = event;
           console.warn(`[ItemCustomComponent] ${source?.typeId} used ${itemStack?.typeId}.`);
       },

       // Runs when the item is used on a block.
       onUseOn(event) {
           const { source, usedOnBlockPermutation } = event;
           console.warn(`[ItemCustomComponent] ${source?.typeId} used item on ${usedOnBlockPermutation?.type.id}.`);
       },

       // Runs when the item mines a block.
       onMineBlock(event) {
           const { source, block, minedBlockPermutation } = event;
           console.warn(
               `[ItemCustomComponent] ${source?.typeId} mined ${block?.typeId} and broke ${minedBlockPermutation?.type.id}.`
           );
       },

       // Runs when the item hits an entity.
       onHitEntity(event) {
           const { attackingEntity, hitEntity, hadEffect } = event;
           console.warn(
               `[ItemCustomComponent] ${attackingEntity?.typeId} hit ${hitEntity?.typeId}. hadEffect=${hadEffect}`
           );
       },

       // Requires minecraft:use_modifiers on the item.
       onCompleteUse(event) {
           const { source, itemStack } = event;
           console.warn(`[ItemCustomComponent] ${source?.typeId} completed use on ${itemStack?.typeId}.`);
       },

       // Requires minecraft:use_modifiers and minecraft:food on the item.
       onConsume(event) {
           const { source, itemStack } = event;
           console.warn(`[ItemCustomComponent] ${source?.typeId} consumed ${itemStack?.typeId}.`);
       },
   });
});
```

```ts
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
           console.warn(
               `[ItemCustomComponent] ${attackingEntity?.typeId} hit ${hitEntity?.typeId}. hadEffect=${hadEffect}`
           );
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
```

```ts
import {
   system,
   CustomComponentParameters,
   ItemComponentBeforeDurabilityDamageEvent,
   ItemComponentCompleteUseEvent,
   ItemComponentConsumeEvent,
   ItemComponentHitEntityEvent,
   ItemComponentMineBlockEvent,
   ItemComponentUseEvent,
   ItemComponentUseOnEvent,
} from "@minecraft/server";

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
       },
   });
});
```

```ts
import { system } from "@minecraft/server";

system.beforeEvents.startup.subscribe((initEvent) => {
   initEvent.itemComponentRegistry.registerCustomComponent("custom:item", {
       onBeforeDurabilityDamage(event) {
           const { attackingEntity, durabilityDamage, hitEntity, itemStack } = event;
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
   });
});
```
Register your component during startup, then attach it in your item JSON using your component identifier (for example, `custom:starter_item_logic`).

## Setup Steps

1. Register your custom item component in `system.beforeEvents.startup`.
2. Add one or more event handlers in the component object.
3. Attach that component id in your item's `components` object.
4. Add required vanilla dependencies for specific events (listed below).

## Event Handlers You Can Use

- `onBeforeDurabilityDamage(event)`: Runs before durability damage is applied when hitting an entity. You can modify `event.durabilityDamage`.
- `onCompleteUse(event)`: Runs when an item's use duration finishes.
  Dependency: item must include `minecraft:use_modifiers`.
- `onConsume(event)`: Runs when an item is consumed.
  Dependency: item must include both `minecraft:use_modifiers` and `minecraft:food`.
- `onHitEntity(event)`: Runs when the item hits an entity.
- `onMineBlock(event)`: Runs when the item mines a block.
- `onUse(event)`: Runs when a player uses the item.
- `onUseOn(event)`: Runs when the item is used on a block.

## Item JSON Example

Use format version `1.21.90` or newer and bind your custom component id:

```json
{
  "format_version": "1.26.10",
  "minecraft:item": {
    "description": {
      "identifier": "custom:starter_tool"
    },
    "components": {
      "custom:starter_item_logic": {},
      "minecraft:use_modifiers": {
        "use_duration": 5
      }
    }
  }
}
```

If you also use `onConsume`, add `minecraft:food` to `components`.

> Reference: https://wiki.bedrock.dev/items/item-events

## Source

```ts
export interface ItemCustomComponent {
    onBeforeDurabilityDamage?: (
        arg0: ItemComponentBeforeDurabilityDamageEvent,
        arg1: CustomComponentParameters,
    ) => void;
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}
```

## Properties

### onBeforeDurabilityDamage?

> `optional` **onBeforeDurabilityDamage?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`ItemComponentBeforeDurabilityDamageEvent`](../classes/ItemComponentBeforeDurabilityDamageEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called when an item containing this
component is hitting an entity and about to take durability
damage.

***

### onCompleteUse?

> `optional` **onCompleteUse?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`ItemComponentCompleteUseEvent`](../classes/ItemComponentCompleteUseEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called when an item containing this
component's use duration was completed.

***

### onConsume?

> `optional` **onConsume?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`ItemComponentConsumeEvent`](../classes/ItemComponentConsumeEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called when an item containing this
component is eaten by an entity.

***

### onHitEntity?

> `optional` **onHitEntity?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`ItemComponentHitEntityEvent`](../classes/ItemComponentHitEntityEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called when an item containing this
component is used to hit another entity.

***

### onMineBlock?

> `optional` **onMineBlock?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`ItemComponentMineBlockEvent`](../classes/ItemComponentMineBlockEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called when an item containing this
component is used to mine a block.

***

### onUse?

> `optional` **onUse?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`ItemComponentUseEvent`](../classes/ItemComponentUseEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called when an item containing this
component is used by a player.

***

### onUseOn?

> `optional` **onUseOn?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`ItemComponentUseOnEvent`](../classes/ItemComponentUseOnEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called when an item containing this
component is used on a block.
