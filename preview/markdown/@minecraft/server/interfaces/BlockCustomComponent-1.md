[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockCustomComponent

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
### Custom Components V1

Custom Components V1 is the original implementation of custom components in Minecraft. It allows you to define custom behaviors and properties for blocks, items, and entities using JSON components.

For script implementation, check out [registerBlockComponent_v1.ts](#example-registerblockcomponent_v1ts)

JSON Example:

```json
{
    "components": {
        "minecraft:custom_components": [
            "my_custom_component:name"
        ]
    }
}
```

### Custom Components V2

Custom Components V2 is a new experiment which must be enabled along with the "Beta APIs" experiment to use the new features for custom components. With the experiment enabled:

- `minecraft:custom_components` is deprecated in favor of flattened custom components
- Custom components now support parameters

#### Flattening

In the previous version of custom components, components had to be listed inside the `minecraft:custom_components` component. This is no longer required and the `minecraft:custom_components` component is deprecated. Instead, you can write your custom components similar to any other Minecraft component. For example:

```json
{
    "components": {
        "minecraft:loot": "...",
        "minecraft:collision_box": {
            "enabled": true
        },
        "my_custom_component:name": {},
        "my_custom_component:another_component": {}
    }
}
```

#### Parameters

Along with flattening a custom component in JSON, you also can provide parameters to the component. The script bindings for custom components have been upgraded to support a second parameter, `CustomComponentParameters`, which grants access to the JSON parameter list for your component. The following example shows how to use custom component parameters in script:

```json
{
    "components": {
        "some_component:name": {
            "first": "hello",
            "second": 4,
            "third": [
                "test",
                "example"
            ]
        }
    }
}
```

```typescript
type SomeComponentParams = {
    first?: string;
    second?: number;
    third?: string[];
};

system.beforeEvents.startup.subscribe(init => {
    init.blockComponentRegistry.registerCustomComponent('some_component:name', {
        onStepOn: (e : BlockComponentStepOnEvent, p : CustomComponentParameters) : {
            let params = p.params as SomeComponentParams;
            ...
        }
    });
});
```

## Source

```ts
export interface BlockCustomComponent {
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters) => void;
    onBlockStateChange?: (arg0: BlockComponentBlockStateChangeEvent, arg1: CustomComponentParameters) => void;
    onBreak?: (arg0: BlockComponentBlockBreakEvent, arg1: CustomComponentParameters) => void;
    onEntity?: (arg0: BlockComponentEntityEvent, arg1: CustomComponentParameters) => void;
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;
    onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;
    onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters) => void;
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;
    onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;
    onRedstoneUpdate?: (arg0: BlockComponentRedstoneUpdateEvent, arg1: CustomComponentParameters) => void;
    onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;
    onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;
    onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;
}
```

## Properties

### beforeOnPlayerPlace?

> `optional` **beforeOnPlayerPlace?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentPlayerPlaceBeforeEvent`](../classes/BlockComponentPlayerPlaceBeforeEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called before a player places the
block.

***

### onBlockStateChange?

> `optional` **onBlockStateChange?**: (`arg0`, `arg1`) => `void`

**`Beta`**

#### Parameters

##### arg0

[`BlockComponentBlockStateChangeEvent`](../classes/BlockComponentBlockStateChangeEvent.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

***

### onBreak?

> `optional` **onBreak?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentBlockBreakEvent`](../classes/BlockComponentBlockBreakEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

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

### onEntity?

> `optional` **onEntity?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentEntityEvent`](../classes/BlockComponentEntityEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called when an entity fires an event
to this block in the world.

***

### onEntityFallOn?

> `optional` **onEntityFallOn?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentEntityFallOnEvent`](../classes/BlockComponentEntityFallOnEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

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

[`BlockComponentOnPlaceEvent`](../classes/BlockComponentOnPlaceEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

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

[`BlockComponentPlayerBreakEvent`](../classes/BlockComponentPlayerBreakEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

***

### onPlayerInteract?

> `optional` **onPlayerInteract?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentPlayerInteractEvent`](../classes/BlockComponentPlayerInteractEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

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

[`BlockComponentRandomTickEvent`](../classes/BlockComponentRandomTickEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called when a block randomly ticks.

***

### onRedstoneUpdate?

> `optional` **onRedstoneUpdate?**: (`arg0`, `arg1`) => `void`

#### Parameters

##### arg0

[`BlockComponentRedstoneUpdateEvent`](../classes/BlockComponentRedstoneUpdateEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

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

[`BlockComponentStepOffEvent`](../classes/BlockComponentStepOffEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

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

[`BlockComponentStepOnEvent`](../classes/BlockComponentStepOnEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

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

[`BlockComponentTickEvent`](../classes/BlockComponentTickEvent-1.md)

##### arg1

[`CustomComponentParameters`](../classes/CustomComponentParameters-1.md)

#### Returns

`void`

#### Remarks

This function will be called when a block ticks.
