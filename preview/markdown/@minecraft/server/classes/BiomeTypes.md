[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BiomeTypes

# Class: BiomeTypes

**`Rc`**

Supports a catalog of available biome types registered
within Minecraft.

## Source

```ts
export class BiomeTypes {
    private constructor();
    static get(typeName: string): BiomeType | undefined;
    static getAll(): BiomeType[];
}
```

## Constructors

### Constructor

> `private` **new BiomeTypes**(): `BiomeTypes`

#### Returns

`BiomeTypes`

## Methods

### get()

> `static` **get**(`typeName`): [`BiomeType`](BiomeType.md) \| `undefined`

#### Parameters

##### typeName

`string`

Identifier of the biome.  Generally, namespaced identifiers
(e.g., minecraft:frozen_peaks) should be used.

#### Returns

[`BiomeType`](BiomeType.md) \| `undefined`

If the biome exists, a BiomeType object is returned. If not,
undefined is returned.

#### Remarks

Returns a specific biome type.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world, system, BlockTypes } from "@minecraft/server"; // Import necessary modules from the Minecraft server API

// Listen for the `chatSend` event, which is triggered when a player sends a message in chat
world.afterEvents.chatSend.subscribe(async (eventData) => {
// Destructure the `eventData` object to get the sender (player who sent the message) and the message itself
const { sender, message } = eventData;

// Check if the player sent the message "find biome"
if (message === "find biome") {
   // Send a message to all players in the world, asking the player to close the chat
   world.sendMessage("Close chat (2s)");

   // Wait for 2 seconds (40 ticks) before continuing the script
   await system.waitTicks(20 * 2);

   // Define the biome ID to search for (in this case, "plains")
   const biomeId = BlockTypes.get("plains").id;

   // Define the dimensions of the bounding box (the area within which the search will be conducted)
   const length = 100;
   const height = 100;
   const width = 100;

   // Create a `BiomeSearchOptions` object with the defined bounding box dimensions
   const biomeSearchOptions = {
       boundingSize: { x: length, y: height, z: width },
   };

   // Use the player's current dimension to find the closest biome matching the specified `biomeId`
   // The search will start from the player's current location and use the `biomeSearchOptions`
   const biomeLocation = sender.dimension.findClosestBiome(sender.location, biomeId, biomeSearchOptions);

   // Check if a biome was found
   if (biomeLocation) {
       // If found, send a message to the player with the coordinates of the biome
       sender.sendMessage(
           `Found biome '${biomeId}' at location: ${biomeLocation.x}, ${biomeLocation.y}, ${biomeLocation.z}`
       );
   } else {
       // If not found, send a message to the player indicating that the biome was not found
       sender.sendMessage(`Biome '${biomeId}' not found`);
   }
}
});
```

***

### getAll()

> `static` **getAll**(): [`BiomeType`](BiomeType.md)[]

#### Returns

[`BiomeType`](BiomeType.md)[]

#### Remarks

Returns all registered biome types within Minecraft

#### World Ready

This function can't be called in early-execution mode.
