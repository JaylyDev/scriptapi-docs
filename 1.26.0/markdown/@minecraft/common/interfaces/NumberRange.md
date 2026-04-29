[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/common](../README.md) / NumberRange

# Interface: NumberRange

Represents a min/max structure for expressing a potential
range of numbers.

## Example

```js
import { Player, system, world } from "@minecraft/server";

// Get all dimensions
const overworld = world.getDimension("overworld");
const nether = world.getDimension("nether");
const end = world.getDimension("the end");

// If user sends a scriptevent command with id test:height_range, it prints the height of each dimension in a world.
system.afterEvents.scriptEventReceive.subscribe((event) => {
   if (event.id === "test:height_range") {
       // Gets the height range of every dimension
       const overworldHeight = overworld.heightRange;
       const netherHeight = nether.heightRange;
       const endHeight = end.heightRange;

       // Sends the message to player who sent the command
       if (event.sourceEntity instanceof Player) {
           event.sourceEntity.sendMessage(
               `Overworld height: ${overworldHeight.min} to ${overworldHeight.max} (Height: ${
                   overworldHeight.max - overworldHeight.min
               } blocks)`
           );
           event.sourceEntity.sendMessage(
               `Nether height: ${netherHeight.min} to ${netherHeight.max} (Height: ${
                   netherHeight.max - netherHeight.min
               } blocks)`
           );
           event.sourceEntity.sendMessage(
               `End height: ${endHeight.min} to ${endHeight.max} (Height: ${endHeight.max - endHeight.min} blocks)`
           );
       }
   }
});
```

## Properties

### max

> **max**: `number`

#### Remarks

Maximum value within a range.

***

### min

> **min**: `number`

#### Remarks

Minimum value within a range.
