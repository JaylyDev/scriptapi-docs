[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerSpawnAfterEventSignal

# Class: PlayerSpawnAfterEventSignal

Registers an event when a player is spawned (or re-spawned
after death) and fully ready within the world.

## Example

```js
import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe((eventData) => {
   const { player, initialSpawn } = eventData;
   if (!initialSpawn) return;

   // This runs when the player joins the game for the first time!
});
```

## Constructors

### Constructor

> `private` **new PlayerSpawnAfterEventSignal**(): `PlayerSpawnAfterEventSignal`

#### Returns

`PlayerSpawnAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Registers a new event receiver for this particular type of
event.

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

De-registers an event receiver for the player spawn event.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
