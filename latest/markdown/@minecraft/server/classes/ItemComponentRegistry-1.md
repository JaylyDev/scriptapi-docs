[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemComponentRegistry

# Class: ItemComponentRegistry

Provides the functionality for registering custom components
for items.

## Example

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

## Source

```ts
export class ItemComponentRegistry {
    private constructor();
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}
```

## Constructors

### Constructor

> `private` **new ItemComponentRegistry**(): `ItemComponentRegistry`

#### Returns

`ItemComponentRegistry`

## Methods

### registerCustomComponent()

> **registerCustomComponent**(`name`, `itemCustomComponent`): `void`

#### Parameters

##### name

`string`

The id that represents this custom component. Must have a
namespace. This id can be specified in a item's JSON
configuration under the 'minecraft:custom_components' item
component.

##### itemCustomComponent

[`ItemCustomComponent`](../interfaces/ItemCustomComponent-1.md)

The collection of event functions that will be called when
the event occurs on an item using this custom component id.

#### Returns

`void`

#### Remarks

Registers an item custom component that can be used in item
JSON configuration.

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[CustomComponentInvalidRegistryError](CustomComponentInvalidRegistryError-1.md)

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[ItemCustomComponentAlreadyRegisteredError](ItemCustomComponentAlreadyRegisteredError-1.md)

[ItemCustomComponentReloadNewComponentError](ItemCustomComponentReloadNewComponentError-1.md)

[ItemCustomComponentReloadNewEventError](ItemCustomComponentReloadNewEventError-1.md)

[ItemCustomComponentReloadVersionError](ItemCustomComponentReloadVersionError-1.md)

[NamespaceNameError](NamespaceNameError-1.md)

#### Example

```ts
import { BlockPermutation, ItemComponentMineBlockEvent, ItemCustomComponent, system } from "@minecraft/server";

class MineDiamondComponent implements ItemCustomComponent {
onMineBlock(e: ItemComponentMineBlockEvent): void {
   const { minedBlockPermutation, block } = e;
   if (minedBlockPermutation.matches("minecraft:diamond_ore")) {
       block.setPermutation(BlockPermutation.resolve("minecraft:stone"));
   }
}
}

system.beforeEvents.startup.subscribe((event) => {
event.itemComponentRegistry.registerCustomComponent("jayly:custom_item", new MineDiamondComponent());
});
```
