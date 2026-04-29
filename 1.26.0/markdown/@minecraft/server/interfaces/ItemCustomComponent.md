[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ItemCustomComponent

# Interface: ItemCustomComponent

Contains a set of events that will be raised for an item.
This object must be bound using the ItemComponentRegistry.

## Examples

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

## Properties

### onBeforeDurabilityDamage?

> `optional` **onBeforeDurabilityDamage?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`ItemComponentBeforeDurabilityDamageEvent`](../classes/ItemComponentBeforeDurabilityDamageEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

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

[`ItemComponentCompleteUseEvent`](../classes/ItemComponentCompleteUseEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

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

[`ItemComponentConsumeEvent`](../classes/ItemComponentConsumeEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

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

[`ItemComponentHitEntityEvent`](../classes/ItemComponentHitEntityEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

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

[`ItemComponentMineBlockEvent`](../classes/ItemComponentMineBlockEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

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

[`ItemComponentUseEvent`](../classes/ItemComponentUseEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

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

[`ItemComponentUseOnEvent`](../classes/ItemComponentUseOnEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called when an item containing this
component is used on a block.
