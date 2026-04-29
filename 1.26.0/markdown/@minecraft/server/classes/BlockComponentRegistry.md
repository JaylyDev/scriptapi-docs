[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / BlockComponentRegistry

# Class: BlockComponentRegistry

## Example

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

## Constructors

### Constructor

> `private` **new BlockComponentRegistry**(): `BlockComponentRegistry`

#### Returns

`BlockComponentRegistry`

## Methods

### registerCustomComponent()

> **registerCustomComponent**(`name`, `customComponent`): `void`

#### Parameters

##### name

`string`

##### customComponent

[`BlockCustomComponent`](../interfaces/BlockCustomComponent.md)

#### Returns

`void`

#### Remarks

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[BlockCustomComponentAlreadyRegisteredError](BlockCustomComponentAlreadyRegisteredError.md)

[BlockCustomComponentReloadNewComponentError](BlockCustomComponentReloadNewComponentError.md)

[BlockCustomComponentReloadNewEventError](BlockCustomComponentReloadNewEventError.md)

[BlockCustomComponentReloadVersionError](BlockCustomComponentReloadVersionError.md)

[CustomComponentInvalidRegistryError](CustomComponentInvalidRegistryError.md)

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[NamespaceNameError](NamespaceNameError.md)

#### Example

```ts
import { BlockComponentStepOnEvent, BlockCustomComponent, BlockPermutation, system } from "@minecraft/server";

class TurnToAirComponent implements BlockCustomComponent {
onStepOn(data: BlockComponentStepOnEvent) {
   data.block.setPermutation(BlockPermutation.resolve("minecraft:emerald_block"));
}
}

system.beforeEvents.startup.subscribe((event) => {
event.blockComponentRegistry.registerCustomComponent("jayly:custom_block", new TurnToAirComponent());
});
```
