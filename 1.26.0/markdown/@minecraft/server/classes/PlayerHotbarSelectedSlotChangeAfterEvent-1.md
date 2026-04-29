[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerHotbarSelectedSlotChangeAfterEvent

# Class: PlayerHotbarSelectedSlotChangeAfterEvent

Contains information regarding an event after changing the
selected hotbar slot for a player.

## Example

```ts
import { world, PlayerHotbarSelectedSlotChangeAfterEvent, HotbarEventOptions } from "@minecraft/server";

// Example of handling hotbar slot change events
function setupHotbarSlotChangeListener() {
   // Basic event subscription without options
   world.afterEvents.playerHotbarSelectedSlotChange.subscribe((event: PlayerHotbarSelectedSlotChangeAfterEvent) => {
       console.log(`${event.player.name} changed hotbar selection:`);
       console.log(`Previous slot: ${event.previousSlotSelected}`);
       console.log(`New slot: ${event.newSlotSelected}`);

       if (event.itemStack) {
           console.log(`Selected item: ${event.itemStack.typeId} (amount: ${event.itemStack.amount})`);
       } else {
           console.log("Selected empty slot");
       }
   });

   // Subscription with filtering options - only monitor specific slots
   const hotbarOptions: HotbarEventOptions = {
       allowedSlots: [0, 1, 2, 8], // Only monitor first 3 slots and last slot
   };

   world.afterEvents.playerHotbarSelectedSlotChange.subscribe((event: PlayerHotbarSelectedSlotChangeAfterEvent) => {
       console.log(`Important slot change detected!`);
       console.log(`Player: ${event.player.name}`);
       console.log(`Changed to slot ${event.newSlotSelected} (monitored slot)`);

       // React to specific slot selections
       switch (event.newSlotSelected) {
           case 0:
               console.log("Player selected their primary weapon slot");
               break;
           case 1:
               console.log("Player selected their secondary tool slot");
               break;
           case 2:
               console.log("Player selected their utility slot");
               break;
           case 8:
               console.log("Player selected their special item slot");
               break;
       }
   }, hotbarOptions);
}

// Call this function to set up the event listeners
setupHotbarSlotChangeListener();
```

## Constructors

### Constructor

> `private` **new PlayerHotbarSelectedSlotChangeAfterEvent**(): `PlayerHotbarSelectedSlotChangeAfterEvent`

#### Returns

`PlayerHotbarSelectedSlotChangeAfterEvent`

## Properties

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The item stack of the new slot selected.

#### World Ready

This property can't be read in early-execution mode.

***

### newSlotSelected

> `readonly` **newSlotSelected**: `number`

#### Remarks

The new hotbar slot index selected.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Source Player for this event.

#### World Ready

This property can't be read in early-execution mode.

***

### previousSlotSelected

> `readonly` **previousSlotSelected**: `number`

#### Remarks

The previous hotbar slot index selected.

#### World Ready

This property can't be read in early-execution mode.
