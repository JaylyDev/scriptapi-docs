[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / BlockCustomComponent

# Interface: BlockCustomComponent

Contains a set of events that will be raised for a block.
This object must be bound using the BlockRegistry.

## Examples

```ts
import { system } from "@minecraft/server";

// Use world.beforeEvents.worldInitialize.subscribe if you're using @minecraft/server v1
system.beforeEvents.startup.subscribe((initEvent) => {
   initEvent.blockComponentRegistry.registerCustomComponent("custom:block", {
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
       onPlayerBreak: (event) => {
           const { player, block, dimension, brokenBlockPermutation } = event;
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
   });
});
```

```ts
import {
   system,
   BlockComponentPlayerPlaceBeforeEvent,
   BlockComponentEntityFallOnEvent,
   BlockComponentOnPlaceEvent,
   BlockComponentPlayerBreakEvent,
   BlockComponentPlayerInteractEvent,
   BlockComponentRandomTickEvent,
   BlockComponentStepOffEvent,
   BlockComponentStepOnEvent,
   BlockComponentTickEvent,
   CustomComponentParameters,
} from "@minecraft/server";

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
```

## Properties

### beforeOnPlayerPlace?

> `optional` **beforeOnPlayerPlace?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentPlayerPlaceBeforeEvent`](../classes/BlockComponentPlayerPlaceBeforeEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called before a player places the
block.

***

### onBreak?

> `optional` **onBreak?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentBlockBreakEvent`](../classes/BlockComponentBlockBreakEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called when a specific block is
destroyed.
Changes in block permutations will not trigger this event.
Fill Command and SetBlock Command can trigger this event
when changing a block permutation only when using destroy
mode.
Custom blocks with the "minecraft:replaceable" component
will not trigger the event when replaced.

***

### onEntityFallOn?

> `optional` **onEntityFallOn?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentEntityFallOnEvent`](../classes/BlockComponentEntityFallOnEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called when an entity falls onto the
block that this custom component is bound to.

***

### onPlace?

> `optional` **onPlace?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentOnPlaceEvent`](../classes/BlockComponentOnPlaceEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called when the block that this custom
component is bound to is placed.

***

### onPlayerBreak?

> `optional` **onPlayerBreak?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentPlayerBreakEvent`](../classes/BlockComponentPlayerBreakEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

***

### onPlayerInteract?

> `optional` **onPlayerInteract?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentPlayerInteractEvent`](../classes/BlockComponentPlayerInteractEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called when a player sucessfully
interacts with the block that this custom component is bound
to.

***

### onRandomTick?

> `optional` **onRandomTick?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentRandomTickEvent`](../classes/BlockComponentRandomTickEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called when a block randomly ticks.

***

### onRedstoneUpdate?

> `optional` **onRedstoneUpdate?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentRedstoneUpdateEvent`](../classes/BlockComponentRedstoneUpdateEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called when an 'onRedstoneUpdate'
engine event occurs if the block has a
`minecraft:redstone_consumer` component and the redstone
signal strength is >= to the components `min_power` field.

***

### onStepOff?

> `optional` **onStepOff?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentStepOffEvent`](../classes/BlockComponentStepOffEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called when an entity steps off the
block that this custom component is bound to.

***

### onStepOn?

> `optional` **onStepOn?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentStepOnEvent`](../classes/BlockComponentStepOnEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called when an entity steps onto the
block that this custom component is bound to.

***

### onTick?

> `optional` **onTick?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentTickEvent`](../classes/BlockComponentTickEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters.md)

#### Returns

`void`

#### Remarks

This function will be called when a block ticks.
