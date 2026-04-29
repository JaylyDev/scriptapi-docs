[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockExplodeAfterEventSignal

# Class: BlockExplodeAfterEventSignal

Manages callbacks that are connected to when an explosion
occurs, as it impacts individual blocks.

## Example

```ts
import { world, BlockExplodeAfterEvent } from "@minecraft/server";

// Subscribe to the blockExplode event
world.afterEvents.blockExplode.subscribe((event: BlockExplodeAfterEvent) => {
   const { source, block, explodedBlockPermutation, dimension } = event;

   // Log details of the explosion event
   console.log(`Block exploded at position: ${block.location}`);
   console.log(`Block type: ${explodedBlockPermutation.type.id}`);
   console.log(`Dimension: ${dimension.id}`);
   if (source) {
       console.log(`Explosion caused by: ${source.id}`);
   } else {
       console.log(`Explosion caused by an unknown source`);
   }

   // Example: Create an explosion at the block location
   dimension.createExplosion(block.location, 5, { causesFire: true });
});
```

## Source

```ts
export class BlockExplodeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new BlockExplodeAfterEventSignal**(): `BlockExplodeAfterEventSignal`

#### Returns

`BlockExplodeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an explosion
occurs, as it impacts individual blocks.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

Removes a callback from being called when an explosion
occurs, as it impacts individual blocks.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
