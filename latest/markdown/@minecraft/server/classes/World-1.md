[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / World

# Class: World

A class that wraps the state of a world - a set of
dimensions and the environment of Minecraft.

## Source

```ts
export class World {
    private constructor();
    readonly afterEvents: WorldAfterEvents;
    readonly beforeEvents: WorldBeforeEvents;
    readonly gameRules: GameRules;
readonly isHardcore: boolean;
    readonly scoreboard: Scoreboard;
    readonly seed: string;
    readonly structureManager: StructureManager;
    readonly tickingAreaManager: TickingAreaManager;
    broadcastClientMessage(id: string, value: string): void;
    clearDynamicProperties(): void;
    getAbsoluteTime(): number;
    getAimAssist(): AimAssistRegistry;
    getAllPlayers(): Player[];
    getDay(): number;
    getDefaultSpawnLocation(): Vector3;
    getDifficulty(): Difficulty;
    getDimension(dimensionId: string): Dimension;
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    getEntity(id: string): Entity | undefined;
    getLootTableManager(): LootTableManager;
    getMoonPhase(): MoonPhase;
    getPackSettings(): Record<string, boolean | number | string>;
    getPlayers(options?: EntityQueryOptions): Player[];
    getTimeOfDay(): number;
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    setAbsoluteTime(absoluteTime: number): void;
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    setDifficulty(difficulty: Difficulty): void;
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    stopMusic(): void;
}
```

## Constructors

### Constructor

> `private` **new World**(): `World`

#### Returns

`World`

## Properties

### afterEvents

> `readonly` **afterEvents**: [`WorldAfterEvents`](WorldAfterEvents-1.md)

#### Remarks

Contains a set of events that are applicable to the entirety
of the world.  Event callbacks are called in a deferred
manner. Event callbacks are executed in read-write mode.

This property can be read in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

const callback = world.afterEvents.itemUse.subscribe((event) => {
if (event.itemStack.typeId == "minecraft:water_bucket") {
   event.source.sendMessage("You used water bucket once.");

   // Unsubscribe callback after first use
   world.afterEvents.itemUse.unsubscribe(callback);
}
});
```

***

### beforeEvents

> `readonly` **beforeEvents**: [`WorldBeforeEvents`](WorldBeforeEvents-1.md)

#### Remarks

Contains a set of events that are applicable to the entirety
of the world. Event callbacks are called immediately. Event
callbacks are executed in read-only mode.

This property can be read in early-execution mode.

#### Examples

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function customCommand(targetLocation: DimensionLocation) {
  const chatCallback = world.beforeEvents.chatSend.subscribe((eventData) => {
    if (eventData.message.includes("cancel")) {
      // Cancel event if the message contains "cancel"
      eventData.cancel = true;
    } else {
      const args = eventData.message.split(" ");

      if (args.length > 0) {
        switch (args[0].toLowerCase()) {
          case "echo":
            // Send a modified version of chat message
            world.sendMessage(`Echo '${eventData.message.substring(4).trim()}'`);
            break;
          case "help":
            world.sendMessage(`Available commands: echo <message>`);
            break;
        }
      }
    }
  });
}
```

```js
// Check out how BeforeEvents privilege system work:
// https://wiki.bedrock.dev/scripting/script-server.html#beforeevents-privilege-system
import { world, system, TimeOfDay } from "@minecraft/server";

// Use system.run()
world.beforeEvents.chatSend.subscribe((event) => {
event.cancel = true;
// setTime changes world state, must be run after its execution by a tick
system.run(() => {
   world.setTimeOfDay(TimeOfDay.Night);
});
});

/**
@param {number} ticks
/
function sleep(ticks) {
return new Promise((resolve) => {
   system.runTimeout(() => resolve(), ticks);
});
}

// Or execute function at a later tick using async functions
world.beforeEvents.chatSend.subscribe(async (event) => {
// synchronous code
event.cancel = true;

// asynchronous code
await sleep(10); // Pretend you have a sleep function that returns a promise that resolves in 10 ticks
world.setTimeOfDay(TimeOfDay.Night);
});
```

```js
import { system, world } from "@minecraft/server";

const callback = world.beforeEvents.itemUse.subscribe((event) => {
if (event.itemStack.typeId == "minecraft:water_bucket") {
   event.source.sendMessage("You cannot use water bucket at this time, please try again.");
   event.cancel = true;

   // Unsubscribe callback after first use
   system.run(() => world.beforeEvents.itemUse.unsubscribe(callback));
}
});
```

***

### gameRules

> `readonly` **gameRules**: [`GameRules`](GameRules-1.md)

#### Remarks

The game rules that apply to the world.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.gameRules.doDayLightCycle = false;
world.gameRules.doEntityDrops = false;
world.gameRules.doFireTick = false;
world.gameRules.doWeatherCycle = false;
world.gameRules.doMobSpawning = false;
```

***

### isHardcore

> `readonly` **isHardcore**: `boolean`

#### Example

```js
import { world } from "@minecraft/server";

// Subscribe to the `playerSpawn` event, which is triggered when the world is initialized
world.afterEvents.playerSpawn.subscribe(() => {
   // Check if the world is in hardcore mode
   // Notify players about the current mode
   if (world.isHardcore) {
       world.sendMessage("Welcome to Hardcore mode! Be careful, as death is permanent.");
   } else {
       world.sendMessage("This world is not in Hardcore mode. Play safely!");
   }
});
```

***

### scoreboard

> `readonly` **scoreboard**: [`Scoreboard`](Scoreboard-1.md)

#### Remarks

Returns the general global scoreboard that applies to the
world.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";
const money = world.scoreboard.getObjective("money");
```

***

### seed

> `readonly` **seed**: `string`

#### Remarks

The world seed.

#### World Ready

This property can't be read in early-execution mode.

***

### structureManager

> `readonly` **structureManager**: [`StructureManager`](StructureManager-1.md)

#### Remarks

Returns the manager for [Structure](Structure-1.md) related APIs.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.structureManager.getWorldStructureIds().forEach((id) => {
const structure = world.structureManager.get(id);
structure.isValid;
});
```

***

### tickingAreaManager

> `readonly` **tickingAreaManager**: [`TickingAreaManager`](TickingAreaManager-1.md)

#### Remarks

Manager for adding, removing and querying pack specific
ticking areas.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### broadcastClientMessage()

> **broadcastClientMessage**(`id`, `value`): `void`

**`Beta`**

#### Parameters

##### id

`string`

The message identifier.

##### value

`string`

The message.

#### Returns

`void`

#### Remarks

A method that is internal-only, used for broadcasting
specific messages between client and server.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### clearDynamicProperties()

> **clearDynamicProperties**(): `void`

#### Returns

`void`

#### Remarks

Clears the set of dynamic properties declared for this
behavior pack within the world.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.clearDynamicProperties();
```

***

### getAbsoluteTime()

> **getAbsoluteTime**(): `number`

#### Returns

`number`

#### Remarks

Returns the absolute time since the start of the world.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

const gametime = world.getAbsoluteTime();
world.sendMessage("Current gametime: " + gametime);
```

***

### getAimAssist()

> **getAimAssist**(): [`AimAssistRegistry`](AimAssistRegistry.md)

**`Beta`**

#### Returns

[`AimAssistRegistry`](AimAssistRegistry.md)

#### Remarks

The aim-assist presets and categories that can be used in
the world.

#### World Ready

This function can't be called in early-execution mode.

***

### getAllPlayers()

> **getAllPlayers**(): [`Player`](Player-1.md)[]

#### Returns

[`Player`](Player-1.md)[]

#### Remarks

Returns an array of all active players within the world.

#### Throws

This function can throw errors.

[CommandError](CommandError-1.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { EntityHealthComponent, system, world } from "@minecraft/server";

system.runInterval(() => {
for (const player of world.getAllPlayers()) {
   const health = player.getComponent(EntityHealthComponent.componentId);
   player.onScreenDisplay.setActionBar(
       `Name: ${player.name} | Health: ${health.currentValue.toFixed()} / ${health.effectiveMax}`
   );
}
}, 5000);
```

***

### getDay()

> **getDay**(): `number`

#### Returns

`number`

The current day, determined by the world time divided by the
number of ticks per day. New worlds start at day 0.

#### Remarks

Returns the current day.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.sendMessage("Day " + world.getDay());
```

***

### getDefaultSpawnLocation()

> **getDefaultSpawnLocation**(): [`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

The default Overworld spawn location. By default, the Y
coordinate is 32767, indicating a player's spawn height is
not fixed and will be determined by surrounding blocks.

#### Remarks

Returns the default Overworld spawn location.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

const spawnLocation = world.getDefaultSpawnLocation();
world.sendMessage(`Spawn location: ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z}`);
```

***

### getDifficulty()

> **getDifficulty**(): [`Difficulty`](../enumerations/Difficulty-1.md)

#### Returns

[`Difficulty`](../enumerations/Difficulty-1.md)

Returns the world difficulty.

#### Remarks

Gets the difficulty from the world.

#### World Ready

This function can't be called in early-execution mode.

***

### getDimension()

> **getDimension**(`dimensionId`): [`Dimension`](Dimension-1.md)

#### Parameters

##### dimensionId

`string`

The name of the dimension. For example, "overworld",
"nether" or "the_end".

#### Returns

[`Dimension`](Dimension-1.md)

The requested dimension

#### Remarks

Returns a dimension object.

#### Throws

Throws if the given dimension name is invalid

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world } from "@minecraft/server";

world.getDimension("nether");
```

```js
import { world } from "@minecraft/server";

world.getDimension("overworld");
```

```js
import { world } from "@minecraft/server";

world.getDimension("the_end");
```

***

### getDynamicProperty()

> **getDynamicProperty**(`identifier`): `string` \| `number` \| `boolean` \| [`Vector3`](../interfaces/Vector3-1.md) \| `undefined`

#### Parameters

##### identifier

`string`

The property identifier.

#### Returns

`string` \| `number` \| `boolean` \| [`Vector3`](../interfaces/Vector3-1.md) \| `undefined`

Returns the value for the property, or undefined if the
property has not been set.

#### Remarks

Returns a property value.

#### Throws

Throws if the given dynamic property identifier is not
defined.

#### Examples

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicProperty(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let number = world.getDynamicProperty("samplelibrary:number");

  log("Current value is: " + number);

  if (number === undefined) {
    number = 0;
  }

  if (typeof number !== "number") {
    log("Number is of an unexpected type.");
    return -1;
  }

  world.setDynamicProperty("samplelibrary:number", number + 1);
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicPropertyInJsonBlob(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let paintStr = world.getDynamicProperty("samplelibrary:longerjson");
  let paint: { color: string; intensity: number } | undefined = undefined;

  log("Current value is: " + paintStr);

  if (paintStr === undefined) {
    paint = {
      color: "purple",
      intensity: 0,
    };
  } else {
    if (typeof paintStr !== "string") {
      log("Paint is of an unexpected type.");
      return -1;
    }

    try {
      paint = JSON.parse(paintStr);
    } catch (e) {
      log("Error parsing serialized struct.");
      return -1;
    }
  }

  if (!paint) {
    log("Error parsing serialized struct.");
    return -1;
  }

  paint.intensity++;
  paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
  world.setDynamicProperty("samplelibrary:longerjson", paintStr);
}
```

```js
import { world } from "@minecraft/server";

// Subscribe to the `playerSpawn` event, which is triggered when a player joins the world
world.afterEvents.playerSpawn.subscribe((eventData) => {
// Extract the player entity from the event data
const player = eventData.player;

// Attempt to retrieve a custom dynamic property
const playersCount = world.getDynamicProperty("playersCount");

if (typeof playersCount !== "number") {
   // If the property doesn't exist, set a default value
   player.setDynamicProperty("playersCount", 1);
} else {
   // If the property exists, increment its value
   player.setDynamicProperty("playersCount", playersCount + 1);
}
});
```

#### World Ready

This function can't be called in early-execution mode.

***

### getDynamicPropertyIds()

> **getDynamicPropertyIds**(): `string`[]

#### Returns

`string`[]

A string array of active dynamic property identifiers.

#### Remarks

Gets a set of dynamic property identifiers that have been
set in this world.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.getDynamicPropertyIds().forEach((id) => {
const value = world.getDynamicProperty(id)!;
world.sendMessage(`Dynamic property ${id} has value ${value}`);
});
world.sendMessage("There are " + world.getDynamicPropertyIds().length + " dynamic properties");
```

***

### getDynamicPropertyTotalByteCount()

> **getDynamicPropertyTotalByteCount**(): `number`

#### Returns

`number`

#### Remarks

Gets the total byte count of dynamic properties. This could
potentially be used for your own analytics to ensure you're
not storing gigantic sets of dynamic properties.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.getDynamicPropertyTotalByteCount();
```

***

### getEntity()

> **getEntity**(`id`): [`Entity`](Entity-1.md) \| `undefined`

#### Parameters

##### id

`string`

The id of the entity.

#### Returns

[`Entity`](Entity-1.md) \| `undefined`

The requested entity object.

#### Remarks

Returns an entity based on the provided id.

#### Throws

Throws if the given entity id is invalid.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Entity::id - format: '-451021564564561'
const entityId = world
.getDimension("overworld")
.spawnEntity("minecraft:npc", { x: 0, y: 70, z: 0 }, { initialPersistence: true }).id;
world.getEntity(entityId).typeId; // minecraft:npc
```

***

### getLootTableManager()

> **getLootTableManager**(): [`LootTableManager`](LootTableManager-1.md)

#### Returns

[`LootTableManager`](LootTableManager-1.md)

A loot table manager with a variety of loot generation
methods.

#### Remarks

Returns a manager capable of generating loot from an
assortment of sources.

#### World Ready

This function can't be called in early-execution mode.

***

### getMoonPhase()

> **getMoonPhase**(): [`MoonPhase`](../enumerations/MoonPhase-1.md)

#### Returns

[`MoonPhase`](../enumerations/MoonPhase-1.md)

#### Remarks

Returns the MoonPhase for the current time.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { MoonPhase, world } from "@minecraft/server";

// Get the current moon phase
const moonPhase: MoonPhase = world.getMoonPhase();

// Display a message based on the current moon phase
switch (moonPhase) {
case MoonPhase.FullMoon:
   world.sendMessage("It's full moon!");
   break;
case MoonPhase.WaningGibbous:
   world.sendMessage("It's waning gibbous moon!");
   break;
// Add cases for other moon phases as needed
default:
   world.sendMessage("It's another phase of the moon.");
}
```

***

### getPackSettings()

> **getPackSettings**(): `Record`\<`string`, `boolean` \| `number` \| `string`\>

**`Beta`**

#### Returns

`Record`\<`string`, `boolean` \| `number` \| `string`\>

#### Remarks

Returns a map of pack setting name and value pairs.

This function can be called in early-execution mode.

***

### getPlayers()

> **getPlayers**(`options?`): [`Player`](Player-1.md)[]

#### Parameters

##### options?

[`EntityQueryOptions`](../interfaces/EntityQueryOptions-1.md)

Additional options that can be used to filter the set of
players returned.

#### Returns

[`Player`](Player-1.md)[]

A player array.

#### Remarks

Returns a set of players based on a set of conditions
defined via the EntityQueryOptions set of filter criteria.

#### Throws

Throws if the provided EntityQueryOptions are invalid.

[CommandError](CommandError-1.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world } from "@minecraft/server";
world.getPlayers({ families: ["player"] });
```

```ts
import { EntityQueryOptions, world } from "@minecraft/server";

const entityQueryOptions: EntityQueryOptions = {
minLevel: 10,
maxLevel: 30,
tags: ["team_red"],
excludeNames: ["Admin"],
};

const filteredPlayers = world.getPlayers(entityQueryOptions);
console.log(
"Filtered Players:",
filteredPlayers.map((player) => player.name)
);
```

***

### getTimeOfDay()

> **getTimeOfDay**(): `number`

#### Returns

`number`

The time of day, in ticks, between 0 and 24000.

#### Remarks

Returns the time of day.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { TimeOfDay, system, world } from "@minecraft/server";

function GetWorldTime() {
const daytime = world.getTimeOfDay() + 6000;
const datetime = new Date(daytime * 3.6 * 1000);
const hours = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
const minutes = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();

return { hours, minutes };
}

system.runInterval(() => {
const { hours, minutes } = GetWorldTime();
for (const player of world.getAllPlayers()) {
   player.onScreenDisplay.setActionBar(`Time - ${hours}:${minutes}`);
}
});
```

***

### playMusic()

> **playMusic**(`trackId`, `musicOptions?`): `void`

#### Parameters

##### trackId

`string`

##### musicOptions?

[`MusicOptions`](../interfaces/MusicOptions-1.md)

#### Returns

`void`

#### Remarks

Plays a particular music track for all players.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.PropertyOutOfBoundsError](../../common/classes/PropertyOutOfBoundsError.md)

#### Examples

```typescript
import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, DimensionLocation } from "@minecraft/server";

function playMusicAndSound(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const musicOptions: MusicOptions = {
    fade: 0.5,
    loop: true,
    volume: 1.0,
  };
  world.playMusic("music.menu", musicOptions);

  const worldSoundOptions: WorldSoundOptions = {
    pitch: 0.5,
    volume: 4.0,
  };
  world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);

  const playerSoundOptions: PlayerSoundOptions = {
    pitch: 1.0,
    volume: 1.0,
  };

  players[0].playSound("bucket.fill_water", playerSoundOptions);
}
```

```js
import { world } from "@minecraft/server";

// Subscribe to the `playerSpawn` event, which is triggered when a player joins the world
world.afterEvents.playerSpawn.subscribe((eventData) => {
const player = eventData.player;

// Play a music track for the player when they join the world
player.playMusic("minecraft:music.game", {
   volume: 1.0, // Volume level of the music (1.0 is normal)
   fade: 0.5, // Fade in/out time in seconds
});

player.sendMessage("Welcome! Enjoy the music while you play.");
});
```

#### World Ready

This function can't be called in early-execution mode.

***

### queueMusic()

> **queueMusic**(`trackId`, `musicOptions?`): `void`

#### Parameters

##### trackId

`string`

Identifier of the music track to play.

##### musicOptions?

[`MusicOptions`](../interfaces/MusicOptions-1.md)

Additional options for the music track.

#### Returns

`void`

#### Remarks

Queues an additional music track for players. If a track is
not playing, a music track will play.

This function can't be called in restricted-execution mode.

#### Throws

An error will be thrown if volume is less than 0.0.
An error will be thrown if fade is less than 0.0.

[minecraftcommon.PropertyOutOfBoundsError](../../common/classes/PropertyOutOfBoundsError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.queueMusic("music.game.swamp_music", { loop: true });
```

***

### sendMessage()

> **sendMessage**(`message`): `void`

#### Parameters

##### message

`string` \| [`RawMessage`](../interfaces/RawMessage-1.md) \| (`string` \| [`RawMessage`](../interfaces/RawMessage-1.md))[]

The message to be displayed.

#### Returns

`void`

#### Remarks

Sends a message to all players.

#### Throws

This method can throw if the provided [RawMessage](../interfaces/RawMessage-1.md) is
in an invalid format. For example, if an empty `name` string
is provided to `score`.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Subscribe to the `playerSpawn` event, which is triggered when a player joins the world
world.afterEvents.playerSpawn.subscribe((eventData) => {
// ignore if player respawns
if (!eventData.initialSpawn) return;

const player = eventData.player;

// Construct a welcome message for the player who just joined
const welcomeMessage = `Welcome ${player.name}! Have fun in the world of Minecraft!`;

// Use world.sendMessage to broadcast the message to all players in the world
world.sendMessage(welcomeMessage);

// Notify the player specifically with a different message
player.sendMessage("Feel free to explore and build your adventure!");
});
```

***

### setAbsoluteTime()

> **setAbsoluteTime**(`absoluteTime`): `void`

#### Parameters

##### absoluteTime

`number`

The world time, in ticks.

#### Returns

`void`

#### Remarks

Sets the world time.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { TimeOfDay, world } from "@minecraft/server";
world.setAbsoluteTime(TimeOfDay.Noon);
```

***

### setDefaultSpawnLocation()

> **setDefaultSpawnLocation**(`spawnLocation`): `void`

#### Parameters

##### spawnLocation

[`Vector3`](../interfaces/Vector3-1.md)

Location of the spawn point. Note that this is assumed to be
within the overworld dimension.

#### Returns

`void`

#### Remarks

Sets a default spawn location for all players.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the provided spawn location is out of bounds.

Error

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

world.setDefaultSpawnLocation({
x: 0,
y: -64,
z: 0,
});
```

***

### setDifficulty()

> **setDifficulty**(`difficulty`): `void`

#### Parameters

##### difficulty

[`Difficulty`](../enumerations/Difficulty-1.md)

The difficulty we want to set the world to.

#### Returns

`void`

#### Remarks

Sets the worlds difficulty.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setDynamicProperties()

> **setDynamicProperties**(`values`): `void`

#### Parameters

##### values

`Record`\<`string`, `boolean` \| `number` \| `string` \| [`Vector3`](../interfaces/Vector3-1.md) \| `undefined`\>

A Record of key value pairs of the dynamic properties to
set. If the data value is null, it will remove that property
instead.

#### Returns

`void`

#### Remarks

Sets multiple dynamic properties with specific values.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setDynamicProperty()

> **setDynamicProperty**(`identifier`, `value?`): `void`

#### Parameters

##### identifier

`string`

The property identifier.

##### value?

`string` \| `number` \| `boolean` \| [`Vector3`](../interfaces/Vector3-1.md)

Data value of the property to set. If the value is null, it
will remove the property instead.

#### Returns

`void`

#### Remarks

Sets a specified property to a value.

#### Throws

Throws if the given dynamic property identifier is not
defined.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

#### Examples

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicProperty(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let number = world.getDynamicProperty("samplelibrary:number");

  log("Current value is: " + number);

  if (number === undefined) {
    number = 0;
  }

  if (typeof number !== "number") {
    log("Number is of an unexpected type.");
    return -1;
  }

  world.setDynamicProperty("samplelibrary:number", number + 1);
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicPropertyInJsonBlob(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let paintStr = world.getDynamicProperty("samplelibrary:longerjson");
  let paint: { color: string; intensity: number } | undefined = undefined;

  log("Current value is: " + paintStr);

  if (paintStr === undefined) {
    paint = {
      color: "purple",
      intensity: 0,
    };
  } else {
    if (typeof paintStr !== "string") {
      log("Paint is of an unexpected type.");
      return -1;
    }

    try {
      paint = JSON.parse(paintStr);
    } catch (e) {
      log("Error parsing serialized struct.");
      return -1;
    }
  }

  if (!paint) {
    log("Error parsing serialized struct.");
    return -1;
  }

  paint.intensity++;
  paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
  world.setDynamicProperty("samplelibrary:longerjson", paintStr);
}
```

```js
import { world } from "@minecraft/server";

// Subscribe to the `playerSpawn` event, which is triggered when a player joins the world
world.afterEvents.playerSpawn.subscribe((eventData) => {
// Extract the player entity from the event data
const player = eventData.player;

// Attempt to retrieve a custom dynamic property
let playersCount = world.getDynamicProperty("playersCount");

// If the property doesn't exist
playersCount ??= 0;

// set a default value
// @ts-ignore assuming playersCount is a number
player.setDynamicProperty("playersCount", playersCount + 1);
});
```

#### World Ready

This function can't be called in early-execution mode.

***

### setTimeOfDay()

> **setTimeOfDay**(`timeOfDay`): `void`

#### Parameters

##### timeOfDay

`number`

The time of day, in ticks, between 0 and 24000.

#### Returns

`void`

#### Remarks

Sets the time of day.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the provided time of day is not within the valid
range.

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```ts
import { TimeOfDay, world } from "@minecraft/server";

world.setTimeOfDay(TimeOfDay.Day);
```

```ts
import { TimeOfDay, world } from "@minecraft/server";

world.setTimeOfDay(TimeOfDay.Midnight);
```

***

### stopMusic()

> **stopMusic**(): `void`

#### Returns

`void`

#### Remarks

Stops any music tracks from playing.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.stopMusic();
```
