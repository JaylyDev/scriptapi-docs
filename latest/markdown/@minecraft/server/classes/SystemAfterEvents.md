[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / SystemAfterEvents

# Class: SystemAfterEvents

Provides a set of events that fire within the broader
scripting system within Minecraft.

## Source

```ts
export class SystemAfterEvents {
    private constructor();
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}
```

## Constructors

### Constructor

> `private` **new SystemAfterEvents**(): `SystemAfterEvents`

#### Returns

`SystemAfterEvents`

## Properties

### scriptEventReceive

> `readonly` **scriptEventReceive**: [`ScriptEventCommandMessageAfterEventSignal`](ScriptEventCommandMessageAfterEventSignal.md)

#### Remarks

An event that fires when a /scriptevent command is set. This
provides a way for commands and other systems to trigger
behavior within script.

This property can be read in early-execution mode.

#### Examples

```js
import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
const { id, message, sourceEntity, sourceType } = event;

// Handle script events from entities
if (sourceEntity && sourceType === "Entity") {
   world.sendMessage(`Script event ${id}: ${message} from ${sourceEntity.typeId}`);
}
});

// Send a test script event
world.getPlayers().forEach((player) => {
player.runCommand("scriptevent wiki:test Hello World");
});
```

```js
import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
const { id, message, sourceType } = event;

// console.log removed for example clarity // wiki:test
// console.log removed for example clarity // Hello World
// console.log removed for example clarity // Server
});

world.getDimension("overworld").runCommand("scriptevent wiki:test Hello World");
```
