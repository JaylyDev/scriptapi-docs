[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / Trigger

# Class: Trigger

Represents a trigger for firing an event.

## Example

```ts
import { Trigger } from "@minecraft/server";

// Create a trigger for entity events
// Triggers are used to define when and how certain events should fire

// Example of creating a trigger
const entityTrigger: Trigger = {
   eventName: "custom:on_player_interact",
};

// Example usage in entity components or behavior
function setupEntityTrigger() {
   // Triggers are typically used in entity definitions or components
   // to specify when certain events should be triggered

   const interactionTrigger: Trigger = {
       eventName: "custom:interaction_event",
   };

   console.log(`Trigger set for event: ${interactionTrigger.eventName}`);

   // Triggers can be used with:
   // - Entity behavior components
   // - Block interaction events
   // - Custom gameplay mechanics

   return interactionTrigger;
}

// Usage
const trigger = setupEntityTrigger();

// Example of multiple triggers for different events
const triggers: Trigger[] = [
   { eventName: "custom:on_spawn" },
   { eventName: "custom:on_death" },
   { eventName: "custom:on_interact" },
];

console.log(`Created ${triggers.length} triggers for different events`);
```

## Source

```ts
export class Trigger {
    eventName: string;
    constructor(eventName: string);
}
```

## Constructors

### Constructor

> **new Trigger**(`eventName`): `Trigger`

#### Parameters

##### eventName

`string`

#### Returns

`Trigger`

#### Remarks

Creates a new trigger.

## Properties

### eventName

> **eventName**: `string`

#### Remarks

Event name of the trigger.

#### World Ready

This property can't be read in early-execution mode.
