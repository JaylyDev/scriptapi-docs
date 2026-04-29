[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / SystemBeforeEvents

# Class: SystemBeforeEvents

A set of events that fire before an actual action occurs. In
most cases, you can potentially cancel or modify the
impending event. Note that in before events any APIs that
modify gameplay state will not function and will throw an
error.

## Example

```ts
import { system, StartupEvent, ShutdownEvent } from "@minecraft/server";

// Example of handling system startup events
function setupSystemEventListeners() {
   // Handle startup events
   system.beforeEvents.startup.subscribe((event: StartupEvent) => {
       console.log("Server is starting up!");

       // Register custom block components during startup
       event.blockComponentRegistry.registerCustomComponent("custom:my_block", {
           onPlayerInteract: (eventData, params) => {
               console.log("Custom block was interacted with!");
           },
           onPlace: (eventData, params) => {
               console.log("Custom block was placed!");
           },
       });

       // Register custom item components during startup
       event.itemComponentRegistry.registerCustomComponent("custom:my_item", {
           onUse: (eventData, params) => {
               console.log("Custom item was used!");
           },
           onHitEntity: (eventData, params) => {
               console.log("Custom item hit an entity!");
           },
       });

       // Register custom commands during startup
       event.customCommandRegistry.registerCommand(
           {
               name: "custom:hello",
               description: "A simple greeting command",
               permissionLevel: 0, // Any permission level
               cheatsRequired: false,
               mandatoryParameters: [],
               optionalParameters: [],
           },
           (origin, args) => {
               return {
                   status: 0, // Success
                   message: "Hello from custom command!",
               };
           }
       );

       console.log("Custom components and commands registered successfully!");
   });

   // Handle shutdown events
   system.beforeEvents.shutdown.subscribe((event: ShutdownEvent) => {
       console.log("Server is shutting down!");

       // Perform cleanup operations
       console.log("Performing cleanup operations...");

       // Save any important data
       console.log("Saving important data before shutdown...");

       // Log final statistics
       console.log("Server shutdown cleanup completed.");
   });
}

// Example: Check if we're in an editor world
function checkEditorWorld() {
   if (system.isEditorWorld) {
       console.log("Running in Minecraft Editor world");
       // Handle editor-specific logic
   } else {
       console.log("Running in regular Minecraft world");
       // Handle normal gameplay logic
   }
}

// Call these functions to set up the listeners
setupSystemEventListeners();
checkEditorWorld();
```

## Source

```ts
export class SystemBeforeEvents {
    private constructor();
    readonly shutdown: ShutdownBeforeEventSignal;
    readonly startup: StartupBeforeEventSignal;
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}
```

## Constructors

### Constructor

> `private` **new SystemBeforeEvents**(): `SystemBeforeEvents`

#### Returns

`SystemBeforeEvents`

## Properties

### shutdown

> `readonly` **shutdown**: [`ShutdownBeforeEventSignal`](ShutdownBeforeEventSignal-1.md)

#### Remarks

This property can be read in early-execution mode.

***

### startup

> `readonly` **startup**: [`StartupBeforeEventSignal`](StartupBeforeEventSignal-1.md)

#### Remarks

This property can be read in early-execution mode.

***

### watchdogTerminate

> `readonly` **watchdogTerminate**: [`WatchdogTerminateBeforeEventSignal`](WatchdogTerminateBeforeEventSignal.md)

**`Beta`**

#### Remarks

Fires when the scripting watchdog shuts down the server. The
can be due to using too much memory, or by causing
significant slowdown or hang.
To prevent shutdown, set the event's cancel property to
true.

This property can be read in early-execution mode.

#### Example

```js
import { system } from "@minecraft/server";

system.beforeEvents.watchdogTerminate.subscribe((event) => {
event.cancel = true;
console.warn(`[Watchdog] Canceled critical exception of type '${event.terminateReason}`);
});
```
