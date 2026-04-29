[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-gametest](../README.md) / SimulatedPlayer

# Class: SimulatedPlayer

A simulated player can be used within GameTests to represent
how a player moves throughout the world and to support
testing of how entities and the environment will react to a
player. This type derives much of its structure and methods
from the [minecraftserver.Player](../../server/classes/Player.md) type. Note that many
types of events that may be available for entities more
broadly, such as item use events, may not fire in the same
capacity for simulated players.

## Extends

- [`Player`](../../server/classes/Player.md)

## Constructors

### Constructor

> `private` **new SimulatedPlayer**(): `SimulatedPlayer`

#### Returns

`SimulatedPlayer`

#### Overrides

[`Player`](../../server/classes/Player.md).[`constructor`](../../server/classes/Player.md#constructor)

## Properties

### camera

> `readonly` **camera**: [`Camera`](../../server/classes/Camera.md)

#### Remarks

The player's Camera.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { EasingType, system, world } from "@minecraft/server";

function runCutscene() {
for (const player of world.getPlayers()) {
   const location = player.location;
   player.camera.setCamera("minecraft:free", {
       location: { x: location.x, y: location.y + 10, z: location.z },
       rotation: { x: 90, y: 0 },
   });
   system.run(() => {
       player.camera.setCamera("minecraft:free", {
           location: player.getHeadLocation(),
           rotation: player.getRotation(),
           easeOptions: {
               easeTime: 1.0,
               easeType: EasingType.InCubic,
           },
       });
       system.runTimeout(() => {
           player.camera.clear();
           player.runCommand("/inputpermission @s camera enabled");
           player.runCommand("/inputpermission @s movement enabled");
       }, 20);
   });
   player.runCommand("/inputpermission @s camera disabled");
   player.runCommand("/inputpermission @s movement disabled");
}
}

runCutscene();
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`camera`](../../server/classes/Player.md#camera)

***

### clientSystemInfo

> `readonly` **clientSystemInfo**: [`ClientSystemInfo`](../../server/classes/ClientSystemInfo.md)

#### Remarks

Contains the player's device information.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`clientSystemInfo`](../../server/classes/Player.md#clientsysteminfo)

***

### commandPermissionLevel

> **commandPermissionLevel**: [`CommandPermissionLevel`](../../server/enumerations/CommandPermissionLevel.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

This is related to Operator Permission Levels (The `op-permission-level` setting in `server.properties` file in Minecraft Bedrock Dedicated Server).

This property determines the default permission level assigned to players when using the `/op` command. This affects which commands they can use unless explicitly set in `permissions.json`.

---

## Level 0 – General Commands

Allows only non-destructive, informational, and communication-related commands. Ideal for minimal permissions.

Example level 0 commands: `/help`, `/tell`

---

## Level 1 – Basic / Game Director Commands

Adds access to gameplay-related commands such as gamemode changes, teleporting, and giving items. Suitable for creative players or minor helpers.

Example level 1 commands: `/aimassist`, `/camera`

---

## Level 2 – Game Management / Admin Commands

Example level 2 commands: `/op`, `/deop`

Grants access to moderation tools like kicking and banning players. Useful for server moderators or staff.

---

## Level 3 – Moderation / Host Commands

Provides some access to server and management commands. This is the command permission level for the host when launching a Minecraft world from the client.

Example level 3 command: `/setmaxplayers`

---

## Level 4 – Full Administrative Access / Owner Commands

Provides full access to all server and management commands. Intended only for server owners or trusted administrators.

Example level 4 commands: `/changesetting`, `/stop`

> Additional info by [Visual1mpact](https://github.com/Visual1mpact)

#### Inherited from

[`Player`](../../server/classes/Player.md).[`commandPermissionLevel`](../../server/classes/Player.md#commandpermissionlevel)

***

### dimension

> `readonly` **dimension**: [`Dimension`](../../server/classes/Dimension.md)

#### Remarks

Dimension that the entity is currently within.

#### Throws

This property can throw when used.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { ItemStack, world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
entity.dimension.spawnItem(new ItemStack("minecraft:diamond_sword"), entity.location);
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`dimension`](../../server/classes/Player.md#dimension)

***

### graphicsMode

> `readonly` **graphicsMode**: [`GraphicsMode`](../../server/enumerations/GraphicsMode.md)

#### Remarks

Gets the current graphics mode of the player's client. This
can be changed in the Video section of the settings menu
based on what hardware is available.

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`graphicsMode`](../../server/classes/Player.md#graphicsmode)

***

### headRotation

> `readonly` **headRotation**: [`Vector2`](../../server/interfaces/Vector2.md)

#### Remarks

Rotation of the head across pitch and yaw angles.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier of the entity. This identifier is intended
to be consistent across loads of a world instance. No
meaning should be inferred from the value and structure of
this unique identifier - do not parse or interpret it. This
property is accessible even if [Entity.isValid](../../server/classes/Entity.md#isvalid) is
false.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { Entity, world } from "@minecraft/server";

/**
Gets entity id
@param {Entity} entity
/
function showId(entity) {
entity.runCommand("say My entity ID: " + entity.id);
}

for (const entity of world.getDimension("overworld").getEntities()) {
showId(entity);
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`id`](../../server/classes/Player.md#id)

***

### inputInfo

> `readonly` **inputInfo**: [`InputInfo`](../../server/classes/InputInfo.md)

#### Remarks

Contains the player's input information.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`inputInfo`](../../server/classes/Player.md#inputinfo)

***

### inputPermissions

> `readonly` **inputPermissions**: [`PlayerInputPermissions`](../../server/classes/PlayerInputPermissions.md)

#### Remarks

Input permissions of the player.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`inputPermissions`](../../server/classes/Player.md#inputpermissions)

***

### isClimbing

> `readonly` **isClimbing**: `boolean`

#### Remarks

Whether the entity is touching a climbable block. For
example, a player next to a ladder or a spider next to a
stone wall.

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
// Get all overworld entities
for (const entity of world.getDimension("overworld").getEntities()) {
   if (entity.isClimbing) {
       entity.runCommand("say I'm climbing!");
   }
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isClimbing`](../../server/classes/Player.md#isclimbing)

***

### isEmoting

> `readonly` **isEmoting**: `boolean`

#### Remarks

If true, the player is currently emoting.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isEmoting`](../../server/classes/Player.md#isemoting)

***

### isFalling

> `readonly` **isFalling**: `boolean`

#### Remarks

Whether the entity has a fall distance greater than 0, or
greater than 1 while gliding.

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
for (const player of world.getAllPlayers()) {
   player.sendMessage(`isFalling - ${player.isFalling}`);
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isFalling`](../../server/classes/Player.md#isfalling)

***

### isFlying

> `readonly` **isFlying**: `boolean`

#### Remarks

Whether the player is flying. For example, in Creative or
Spectator mode.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
for (const player of world.getAllPlayers()) {
   player.sendMessage(`player is flying: ${player.isFlying}`);
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isFlying`](../../server/classes/Player.md#isflying)

***

### isGliding

> `readonly` **isGliding**: `boolean`

#### Remarks

Whether the player is gliding with Elytra.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
for (const player of world.getAllPlayers()) {
   player.sendMessage(`player is gliding with Elytra: ${player.isGliding}`);
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isGliding`](../../server/classes/Player.md#isgliding)

***

### isInWater

> `readonly` **isInWater**: `boolean`

#### Remarks

Whether any part of the entity is inside a water block.

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
for (const player of world.getAllPlayers()) {
   player.sendMessage(`player in water: ${player.isInWater}`);
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isInWater`](../../server/classes/Player.md#isinwater)

***

### isJumping

> `readonly` **isJumping**: `boolean`

#### Remarks

Whether the player is jumping. This will remain true while
the player is holding the jump action.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
for (const player of world.getAllPlayers()) {
   player.sendMessage(`player is jumping: ${player.isJumping}`);
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isJumping`](../../server/classes/Player.md#isjumping)

***

### isOnGround

> `readonly` **isOnGround**: `boolean`

#### Remarks

Whether the entity is on top of a solid block. This property
may behave in unexpected ways. This property will always be
true when an Entity is first spawned, and if the Entity has
no gravity this property may be incorrect.

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
for (const player of world.getAllPlayers()) {
   player.sendMessage(`player on ground: ${player.isOnGround}`);
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isOnGround`](../../server/classes/Player.md#isonground)

***

### isSleeping

> `readonly` **isSleeping**: `boolean`

#### Remarks

If true, the entity is currently sleeping.

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isSleeping`](../../server/classes/Player.md#issleeping)

***

### isSneaking

> **isSneaking**: `boolean`

#### Remarks

Whether the entity is sneaking - that is, moving more slowly
and more quietly.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Examples

```ts
import { system, world } from "@minecraft/server";

system.runInterval(() => {
for (const entity of world.getDimension("overworld").getEntities()) {
   // Force entity to not sneak
   entity.isSneaking = false;
}
});
```

```ts
import { DimensionLocation, MolangVariableMap, Vector3, system, world } from "@minecraft/server";

function spawnConfetti(location: DimensionLocation) {
for (let i = 0; i < 100; i++) {
   const molang = new MolangVariableMap();

   molang.setColorRGB("variable.color", {
       red: Math.random(),
       green: Math.random(),
       blue: Math.random(),
   });

   const newLocation: Vector3 = {
       x: location.x + Math.floor(Math.random() * 8) - 4,
       y: location.y + Math.floor(Math.random() * 8) - 4,
       z: location.z + Math.floor(Math.random() * 8) - 4,
   };
   location.dimension.spawnParticle("minecraft:colored_flame_particle", newLocation, molang);
}
}

system.runInterval(() => {
for (const player of world.getPlayers()) {
   if (player.isSneaking) {
       spawnConfetti({
           dimension: player.dimension,
           x: player.location.x,
           y: player.location.y,
           z: player.location.z,
       });
       player.sendMessage("player is sneaking");
   }
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isSneaking`](../../server/classes/Player.md#issneaking)

***

### isSprinting

> **isSprinting**: `boolean`

#### Remarks

Returns whether the simulated player is sprinting.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Overrides

[`Player`](../../server/classes/Player.md).[`isSprinting`](../../server/classes/Player.md#issprinting)

***

### isSwimming

> `readonly` **isSwimming**: `boolean`

#### Remarks

Whether the entity is in the swimming state. For example, a
player using the swim action or a fish in water.

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isSwimming`](../../server/classes/Player.md#isswimming)

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the entity can be manipulated by script. A
Player is considered valid when it's EntityLifetimeState is
set to Loaded.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { system, world } from "@minecraft/server";

const zombie = world.getDimension("overworld").spawnEntity("minecraft:zombie", world.getDefaultSpawnLocation());

const id = system.runInterval(() => {
if (!zombie.isValid) {
   system.clearRun(id);
   return;
}
const location = zombie.location;
for (const player of world.getPlayers()) {
   player.sendMessage(
       `Zombie location: (${location.x.toFixed(2)}, ${location.y.toFixed(2)}, ${location.z.toFixed(2)})`
   );
}
});
```
# isValid() Method to Property Migration (v1 to v2)

In v2, `isValid()` method has been changed to `isValid` property for all components and entities.

## V1 Example (Legacy)
```javascript
// Method call
if (entity.isValid()) {
  // Entity is valid
}

// Component example
component.isValid();
```

## V2 Example (Current)
```javascript
// Property access
if (entity.isValid) {
  // Entity is valid
}

// Component example
component.isValid;
```

## Key Changes
- **Method to Property**: Remove parentheses `()` after `isValid`
- **Return Value**: Same boolean result, just different access pattern
- **Applies to**: All entities, components, and structures

#### Inherited from

[`Player`](../../server/classes/Player.md).[`isValid`](../../server/classes/Player.md#isvalid)

***

### level

> `readonly` **level**: `number`

#### Remarks

The current overall level for the player, based on their
experience.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
player.onScreenDisplay.setActionBar(
   `Level: ${player.level}, xp at current level: ${player.xpEarnedAtCurrentLevel} / ${player.totalXpNeededForNextLevel}`
);
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`level`](../../server/classes/Player.md#level)

***

### localizationKey

> `readonly` **localizationKey**: `string`

#### Remarks

Key for the localization of this entity's name used in .lang
files.

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`localizationKey`](../../server/classes/Player.md#localizationkey)

***

### location

> `readonly` **location**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

Current location of the entity.

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { Player, world } from "@minecraft/server";

world.afterEvents.buttonPush.subscribe((event) => {
if (event.source instanceof Player) {
   const { x, y, z } = event.source.location;
   event.source.sendMessage(`Your location: ${x}, ${y}, ${z}`);
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`location`](../../server/classes/Player.md#location)

***

### name

> `readonly` **name**: `string`

#### Remarks

Name of the player.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe((event) => {
world.sendMessage("Welcome to the server, " + event.player.name + "!");
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`name`](../../server/classes/Player.md#name)

***

### nameTag

> **nameTag**: `string`

#### Remarks

Given name of the entity.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe(({ message }) => {
if (message === "dinnerbone:true") {
   for (const entity of world.getDimension("overworld").getEntities()) {
       entity.nameTag = "Dinnerbone";
   }
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`nameTag`](../../server/classes/Player.md#nametag)

***

### onScreenDisplay

> `readonly` **onScreenDisplay**: [`ScreenDisplay`](../../server/classes/ScreenDisplay.md)

#### Remarks

Contains methods for manipulating the on-screen display of a
Player.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Examples

```ts
import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
player.onScreenDisplay.setActionBar("Hello World");
}
```

```ts
import { HudElement, world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
player.onScreenDisplay.hideAllExcept([HudElement.Hotbar]);
}
```

```ts
import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
player.onScreenDisplay.setTitle("  "); // spaces needed
player.onScreenDisplay.updateSubtitle("Insert Subtitle");
}
```

```ts
import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
player.onScreenDisplay.setTitle("Hello World");
player.onScreenDisplay.updateSubtitle("Welcome to the server!");
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`onScreenDisplay`](../../server/classes/Player.md#onscreendisplay)

***

### playerPermissionLevel

> `readonly` **playerPermissionLevel**: [`PlayerPermissionLevel`](../../server/enumerations/PlayerPermissionLevel.md)

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`playerPermissionLevel`](../../server/classes/Player.md#playerpermissionlevel)

***

### scoreboardIdentity?

> `readonly` `optional` **scoreboardIdentity?**: [`ScoreboardIdentity`](../../server/classes/ScoreboardIdentity.md)

#### Remarks

Returns a scoreboard identity that represents this entity.
Will remain valid when the entity is killed.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`scoreboardIdentity`](../../server/classes/Player.md#scoreboardidentity)

***

### selectedSlotIndex

> **selectedSlotIndex**: `number`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

for (const player of world.getPlayers()) {
const inventory = player.getComponent("inventory");
const selectedItem = inventory.container.getItem(player.selectedSlotIndex);
player.sendMessage("Selected Item: " + selectedItem.typeId);
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`selectedSlotIndex`](../../server/classes/Player.md#selectedslotindex)

***

### target?

> `readonly` `optional` **target?**: [`Entity`](../../server/classes/Entity.md)

**`Beta`**

#### Remarks

Retrieves or sets an entity that is used as the target of
AI-related behaviors, like attacking. If the entity
currently has no target returns undefined.

#### Throws

This property can throw when used.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

`minecraftserver.Player.target`

***

### totalXpNeededForNextLevel

> `readonly` **totalXpNeededForNextLevel**: `number`

#### Remarks

The overall total set of experience needed to achieve the
next level for a player.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { Player, system, world } from "@minecraft/server";

function countdownFromTen(player: Player) {
player.addLevels(-10000);
player.addLevels(11);
const id = system.runInterval(() => {
   player.addExperience(Math.round(-player.totalXpNeededForNextLevel / 10));
   if (player.getTotalXp() === 0) {
       system.clearRun(id);
   }
   if (player.xpEarnedAtCurrentLevel == 0) {
       player.addLevels(-1);
       player.addExperience(player.totalXpNeededForNextLevel - 1);
   }
}, 2);
}
for (const player of world.getPlayers()) {
countdownFromTen(player);
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`totalXpNeededForNextLevel`](../../server/classes/Player.md#totalxpneededfornextlevel)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the type of the entity - for example,
'minecraft:skeleton'. This property is accessible even if
[Entity.isValid](../../server/classes/Entity.md#isvalid) is false.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { system, world } from "@minecraft/server";

// This event triggers when world is loaded
system.runInterval(() => {
const entity = world.getDimension("overworld").getEntities()[0];
// Finally, show that location as title
entity.runCommand(
   `title @a actionbar X: ${Math.floor(entity.location.x)} | Y: ${Math.floor(entity.location.y)} | Z: ${Math.floor(
       entity.location.z
   )}`
);
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`typeId`](../../server/classes/Player.md#typeid)

***

### xpEarnedAtCurrentLevel

> `readonly` **xpEarnedAtCurrentLevel**: `number`

#### Remarks

The current set of experience achieved for the player.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`xpEarnedAtCurrentLevel`](../../server/classes/Player.md#xpearnedatcurrentlevel)

## Methods

### addEffect()

> **addEffect**(`effectType`, `duration`, `options?`): [`Effect`](../../server/classes/Effect.md) \| `undefined`

#### Parameters

##### effectType

`string` \| [`EffectType`](../../server/classes/EffectType.md)

Type of effect to add to the entity.

##### duration

`number`

Amount of time, in ticks, for the effect to apply. There are
20 ticks per second. Use [TicksPerSecond](../../server/variables/TicksPerSecond.md) constant to
convert between ticks and seconds. The value must be within
the range [0, 20000000].

##### options?

[`EntityEffectOptions`](../../server/interfaces/EntityEffectOptions.md)

Additional options for the effect.

#### Returns

[`Effect`](../../server/classes/Effect.md) \| `undefined`

Returns nothing if the effect was added or updated
successfully. This can throw an error if the duration or
amplifier are outside of the valid ranges, or if the effect
does not exist.

#### Remarks

Adds or updates an effect, like poison, to the entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### Examples

```typescript
import { DimensionLocation } from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";

function spawnPoisonedVillager(
    targetLocation: DimensionLocation
) {
  const villagerType = "minecraft:villager_v2<minecraft:ageable_grow_up>";
  const villager = targetLocation.dimension.spawnEntity(villagerType, targetLocation);
  const duration = 20;

  villager.addEffect(MinecraftEffectTypes.Poison, duration, { amplifier: 1 });
}
```

```typescript
import { DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes, MinecraftEffectTypes } from "@minecraft/vanilla-data";

function quickFoxLazyDog(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const fox = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
    x: targetLocation.x + 1,
    y: targetLocation.y + 2,
    z: targetLocation.z + 3,
  });

  fox.addEffect(MinecraftEffectTypes.Speed, 10, {
    amplifier: 2,
  });
  log("Created a fox.");

  const wolf = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Wolf, {
    x: targetLocation.x + 4,
    y: targetLocation.y + 2,
    z: targetLocation.z + 3,
  });
  wolf.addEffect(MinecraftEffectTypes.Slowness, 10, {
    amplifier: 2,
  });
  wolf.isSneaking = true;
  log("Created a sneaking wolf.", 1);
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`addEffect`](../../server/classes/Player.md#addeffect)

***

### addExperience()

> **addExperience**(`amount`): `number`

#### Parameters

##### amount

`number`

Amount of experience to add. Note that this can be negative.
Min/max bounds at -2^24 ~ 2^24

#### Returns

`number`

Returns the current experience of the Player.

#### Remarks

Adds/removes experience to/from the Player and returns the
current experience of the Player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Player, world } from "@minecraft/server";

// Command equivalent to /xp player 100
function addExperience(player: Player) {
const xpAdded = player.addExperience(100);
console.log(`Player ${player.name} now has ${xpAdded} experience points.`);
}

for (const player of world.getPlayers()) {
addExperience(player);
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`addExperience`](../../server/classes/Player.md#addexperience)

***

### addLevels()

> **addLevels**(`amount`): `number`

#### Parameters

##### amount

`number`

Amount to add to the player. Min/max bounds at -2^24 ~ 2^24

#### Returns

`number`

Returns the current level of the Player.

#### Remarks

Adds/removes level to/from the Player and returns the
current level of the Player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Player, world } from "@minecraft/server";

// Command equivalent to /xp player 5L
function addLevels(player: Player) {
const levels = player.addLevels(5);
console.log(`Player ${player.name} now has ${levels} levels.`);
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`addLevels`](../../server/classes/Player.md#addlevels)

***

### addTag()

> **addTag**(`tag`): `boolean`

#### Parameters

##### tag

`string`

Content of the tag to add. The tag must be less than 256
characters.

#### Returns

`boolean`

Returns true if the tag was added successfully. This can
fail if the tag already exists on the entity.

#### Remarks

Adds a specified tag to an entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### Example

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function tagsQuery(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    const mobTypeId = mobs[i % mobs.length];
    const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
    entity.addTag("mobparty." + mobTypeId);
  }

  const eqo: EntityQueryOptions = {
    tags: ["mobparty.skeleton"],
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.kill();
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`addTag`](../../server/classes/Player.md#addtag)

***

### applyDamage()

> **applyDamage**(`amount`, `options?`): `boolean`

#### Parameters

##### amount

`number`

Amount of damage to apply.

##### options?

[`EntityApplyDamageByProjectileOptions`](../../server/interfaces/EntityApplyDamageByProjectileOptions.md) \| [`EntityApplyDamageOptions`](../../server/interfaces/EntityApplyDamageOptions.md)

Additional options about the source of damage, which may add
additional effects or spur additional behaviors on this
entity.

#### Returns

`boolean`

Whether the entity takes any damage. This can return false
if the entity is invulnerable or if the damage applied is
less than or equal to 0.

#### Remarks

Applies a set of damage to an entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

minecraftcommon.UnsupportedFunctionalityError

#### Examples

```typescript
import { system, EntityHealthComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function applyDamageThenHeal(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);

  skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton

  system.runTimeout(() => {
    const health = skelly.getComponent(EntityComponentTypes.Health) as EntityHealthComponent;
    log("Skeleton health before heal: " + health?.currentValue);
    health?.resetToMaxValue();
    log("Skeleton health after heal: " + health?.currentValue);
  }, 20);
}
```

```js
import { world, EntityDamageCause } from "@minecraft/server";
const player = world.getAllPlayers()[0];
player.applyDamage(1000, {
cause: EntityDamageCause.wither,
});
```

```js
import { world } from "@minecraft/server";
world.afterEvents.itemUse.subscribe((event) => {
const player = event.source;
const damageApplied = player.applyDamage(10);
console.log(`Damage applied: ${damageApplied}`);
});
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`applyDamage`](../../server/classes/Player.md#applydamage)

***

### applyImpulse()

> **applyImpulse**(`vector`): `void`

#### Parameters

##### vector

[`Vector3`](../../server/interfaces/Vector3.md)

Impulse vector.

#### Returns

`void`

#### Remarks

Applies impulse vector to the current velocity of the
entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### Example

```typescript
import { DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function applyImpulse(targetLocation: DimensionLocation) {
  const zombie = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Zombie, targetLocation);

  zombie.clearVelocity();

  // throw the zombie up in the air
  zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`applyImpulse`](../../server/classes/Player.md#applyimpulse)

***

### applyKnockback()

> **applyKnockback**(`horizontalForce`, `verticalStrength`): `void`

#### Parameters

##### horizontalForce

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### verticalStrength

`number`

Knockback strength for the vertical vector.

#### Returns

`void`

#### Remarks

Applies impulse vector to the current velocity of the
entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

minecraftcommon.UnsupportedFunctionalityError

#### Example

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function bounceSkeletons(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
  }

  const eqo: EntityQueryOptions = {
    type: "skeleton",
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.applyKnockback(0, 0, 0, 1);
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

## Example for @minecraft/server v2

The following example (updated of the above - bounceSkeleton.ts) spawns several mobs, then applies a knockback to all skeletons.

```ts
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function bounceSkeletons(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];
  const horizontalForce = { x: 5, z: 4 }; // horizontal knockback strength - xz vector
  const verticalStrength = 0.3;           // upward knockback strength

  // Spawn 10 mobs in a pattern
  for (let i = 0; i < 10; i++) {
    targetLocation.dimension.spawnEntity(
      mobs[i % mobs.length],
      targetLocation
    );
  }

  const eqo: EntityQueryOptions = { type: "skeleton" };

  // Apply knockback to all skeletons in the area
  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.applyKnockback(horizontalForce, verticalStrength);
  }
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`applyKnockback`](../../server/classes/Player.md#applyknockback)

***

### attack()

> **attack**(): `boolean`

#### Returns

`boolean`

#### Remarks

Causes the simulated player to make an attack 'swipe'.
Returns true if the attack was performed - for example, the
player was not on cooldown and had a valid target. Target
selection is performed by raycasting from the player's head.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### attackEntity()

> **attackEntity**(`entity`): `boolean`

#### Parameters

##### entity

[`Entity`](../../server/classes/Entity.md)

#### Returns

`boolean`

#### Remarks

Causes the simulated player to attack the provided target.
Returns true if the attack was performed - for example, the
player was not on cooldown and had a valid target. The
attack can be performed at any distance and does not require
line of sight to the target entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### breakBlock()

> **breakBlock**(`blockLocation`, `direction?`): `boolean`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to interact with.

##### direction?

[`Direction`](../../server/enumerations/Direction.md)

Direction to place the specified item within.
Defaults to: 1

#### Returns

`boolean`

#### Remarks

Destroys the block at blockLocation, respecting the rules of
the server player's game mode. The block will be hit until
broken, an item is used or stopBreakingBlock is called.
Returns true if the block at blockLocation is solid.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestError](GameTestError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### chat()

> **chat**(`message`): `void`

#### Parameters

##### message

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### clearDynamicProperties()

> **clearDynamicProperties**(): `void`

#### Returns

`void`

#### Remarks

Clears all dynamic properties that have been set on this
entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
entity.clearDynamicProperties();
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`clearDynamicProperties`](../../server/classes/Player.md#cleardynamicproperties)

***

### clearPropertyOverridesForEntity()

> **clearPropertyOverridesForEntity**(`targetEntity`): `void`

#### Parameters

##### targetEntity

`string` \| [`Entity`](../../server/classes/Entity.md)

The Entity or the ID of the Entity whose Entity Property
overrides are being cleared.

#### Returns

`void`

#### Remarks

For this player, removes all overrides of any Entity
Properties on the target Entity. This change is not applied
until the next tick and will not apply to other players.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the Entity or Entity ID is invalid.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`clearPropertyOverridesForEntity`](../../server/classes/Player.md#clearpropertyoverridesforentity)

***

### clearVelocity()

> **clearVelocity**(): `void`

#### Returns

`void`

#### Remarks

Sets the current velocity of the Entity to zero.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### Example

```typescript
import { DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function applyImpulse(targetLocation: DimensionLocation) {
  const zombie = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Zombie, targetLocation);

  zombie.clearVelocity();

  // throw the zombie up in the air
  zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`clearVelocity`](../../server/classes/Player.md#clearvelocity)

***

### disconnect()

> **disconnect**(): `void`

#### Returns

`void`

#### Remarks

Simulates and performs a disconnection of the simulated
player from the world.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### dropSelectedItem()

> **dropSelectedItem**(): `boolean`

#### Returns

`boolean`

#### Remarks

Drops the simulated player's selected item

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### eatItem()

> **eatItem**(`itemStack`): `void`

**`Beta`**

#### Parameters

##### itemStack

[`ItemStack`](../../server/classes/ItemStack.md)

The item to eat.

#### Returns

`void`

#### Remarks

Eats an item, providing the item's hunger and saturation
effects to the player. Can only be used on food items.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the item is not a food item.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

`minecraftserver.Player.eatItem`

***

### extinguishFire()

> **extinguishFire**(`useEffects?`): `boolean`

#### Parameters

##### useEffects?

`boolean`

Whether to show any visual effects connected to the
extinguishing.
Defaults to: true

#### Returns

`boolean`

Returns whether the entity was on fire.

#### Remarks

Extinguishes the fire if the entity is on fire. Note that
you can call getComponent('minecraft:onfire') and, if
present, the entity is on fire.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### Example

```typescript
import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);

  skelly.setOnFire(20, true);

  system.runTimeout(() => {
    const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
    log(onfire?.onFireTicksRemaining + " fire ticks remaining.");

    skelly.extinguishFire(true);
    log("Never mind. Fire extinguished.");
  }, 20);
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`extinguishFire`](../../server/classes/Player.md#extinguishfire)

***

### fly()

> **fly**(): `void`

#### Returns

`void`

#### Remarks

Causes the simulated player to start flying as though they
were flying in creative mode. For flying with Elytra, see
function glide.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getAABB()

> **getAABB**(): [`AABB`](../../server/interfaces/AABB.md)

#### Returns

[`AABB`](../../server/interfaces/AABB.md)

An axis-aligned bounding box.

#### Remarks

Gets the entity's collision bounds.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getAABB`](../../server/classes/Player.md#getaabb)

***

### getAimAssist()

> **getAimAssist**(): [`PlayerAimAssist`](../../server/classes/PlayerAimAssist.md)

**`Beta`**

#### Returns

[`PlayerAimAssist`](../../server/classes/PlayerAimAssist.md)

#### Remarks

The player's aim-assist settings.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

`minecraftserver.Player.getAimAssist`

***

### getAllBlocksStandingOn()

> **getAllBlocksStandingOn**(`options?`): [`Block`](../../server/classes/Block.md)[]

#### Parameters

##### options?

[`GetBlocksStandingOnOptions`](../../server/interfaces/GetBlocksStandingOnOptions.md)

Additional configuration options for what blocks are
returned.

#### Returns

[`Block`](../../server/classes/Block.md)[]

The solid blocks that this entity is directly standing on.
Returns an empty list if the entity is jumping or flying.

#### Remarks

Gets the solid blocks that this entity is directly standing
on. Ignores pressure plates.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getAllBlocksStandingOn`](../../server/classes/Player.md#getallblocksstandingon)

***

### getBlockFromViewDirection()

> **getBlockFromViewDirection**(`options?`): [`BlockRaycastHit`](../../server/interfaces/BlockRaycastHit.md) \| `undefined`

#### Parameters

##### options?

[`BlockRaycastOptions`](../../server/interfaces/BlockRaycastOptions.md)

Additional configuration options for the ray cast.

#### Returns

[`BlockRaycastHit`](../../server/interfaces/BlockRaycastHit.md) \| `undefined`

Returns the first intersecting block from the direction that
this entity is looking at.

#### Remarks

Returns the first intersecting block from the direction that
this entity is looking at.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
const blockHit = entity.getBlockFromViewDirection();

if (blockHit) {
   console.log("Block Hit:");
   console.log("Block:", blockHit.block);
   console.log("Face:", blockHit.face);
   console.log("Face Location:", JSON.stringify(blockHit.faceLocation));
} else {
   console.log("No block in view direction.");
}
}
```

```js
import { BlockPermutation, world } from "@minecraft/server";

const entity = world.getDimension("overworld").spawnEntity("minecraft:fox", { x: 0, y: 0, z: 0 });
const blockHit = entity.getBlockFromViewDirection();

if (blockHit) {
blockHit.block.setPermutation(BlockPermutation.resolve("minecraft:bedrock"));
} else {
console.log("No block in view direction.");
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getBlockFromViewDirection`](../../server/classes/Player.md#getblockfromviewdirection)

***

### getBlockStandingOn()

> **getBlockStandingOn**(`options?`): [`Block`](../../server/classes/Block.md) \| `undefined`

#### Parameters

##### options?

[`GetBlocksStandingOnOptions`](../../server/interfaces/GetBlocksStandingOnOptions.md)

Additional configuration options for what block is returned.

#### Returns

[`Block`](../../server/classes/Block.md) \| `undefined`

A single solid block closest to the center of the entity
that this entity is directly standing on. Undefined if
entity is flying or jumping.

#### Remarks

Gets a single solid block closest to the center of the
entity that this entity is directly standing on. Ignores
pressure plates.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getBlockStandingOn`](../../server/classes/Player.md#getblockstandingon)

***

### getComponent()

> **getComponent**\<`T`\>(`componentId`): [`EntityComponentReturnType`](../../server/type-aliases/EntityComponentReturnType.md)\<`T`\> \| `undefined`

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### componentId

`T`

The identifier of the component (e.g., 'minecraft:health').
If no namespace prefix is specified, 'minecraft:' is
assumed. Available component IDs can be found as part of the
[EntityComponentTypes](../../server/enumerations/EntityComponentTypes.md) enum.

#### Returns

[`EntityComponentReturnType`](../../server/type-aliases/EntityComponentReturnType.md)\<`T`\> \| `undefined`

Returns the component if it exists on the entity, otherwise
undefined.

#### Remarks

Gets a component (that represents additional capabilities)
for an entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world } from "@minecraft/server";

for (const player of world.getPlayers()) {
const health = player.getComponent("health");
player.sendMessage("Your health is " + health.currentValue + "/" + health.effectiveMax);
health.setCurrentValue(15); // set player to 15 hp
health.resetToMaxValue(); // reset player to max hp
}
```

```js
import { ItemStack, world } from "@minecraft/server";

world.afterEvents.buttonPush.subscribe((event) => {
const entity = event.source;
entity.getComponent("inventory").container.addItem(new ItemStack("minecraft:dirt", 1));
});
```

```js
import { world } from "@minecraft/server";

const itemEntities = world.getDimension("overworld").getEntities({ type: "minecraft:item" });
for (const itemEntity of itemEntities) {
const item = itemEntity.getComponent("item");
item.itemStack.keepOnDeath = true;
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getComponent`](../../server/classes/Player.md#getcomponent)

***

### getComponents()

> **getComponents**(): [`EntityComponent`](../../server/classes/EntityComponent.md)[]

#### Returns

[`EntityComponent`](../../server/classes/EntityComponent.md)[]

#### Remarks

Returns all scripting components that are present on this
entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
const components = entity.getComponents();
console.log(`Number of components: ${components.length}: ${components.map((component) => component.typeId)}`);
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getComponents`](../../server/classes/Player.md#getcomponents)

***

### getControlScheme()

> **getControlScheme**(): [`ControlScheme`](../../server/enumerations/ControlScheme.md)

#### Returns

[`ControlScheme`](../../server/enumerations/ControlScheme.md)

#### Remarks

Returns the player's current control scheme.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getControlScheme`](../../server/classes/Player.md#getcontrolscheme)

***

### getDynamicProperty()

> **getDynamicProperty**(`identifier`): `string` \| `number` \| `boolean` \| [`Vector3`](../../server/interfaces/Vector3.md) \| `undefined`

#### Parameters

##### identifier

`string`

The property identifier.

#### Returns

`string` \| `number` \| `boolean` \| [`Vector3`](../../server/interfaces/Vector3.md) \| `undefined`

Returns the value for the property, or undefined if the
property has not been set.

#### Remarks

Returns a property value.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Vector3, system, world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe((event) => {
event.entity.setDynamicProperty("spawn_location", event.entity.location); // set location spawn
});

world.beforeEvents.entityRemove.subscribe((event) => {
const location = event.removedEntity.getDynamicProperty("spawn_location") as Vector3; // get location spawn
const dimension = event.removedEntity.dimension;
system.run(() => {
   dimension.spawnEntity<string>(event.removedEntity.typeId, location);
});
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getDynamicProperty`](../../server/classes/Player.md#getdynamicproperty)

***

### getDynamicPropertyIds()

> **getDynamicPropertyIds**(): `string`[]

#### Returns

`string`[]

A string array of the dynamic properties set on this entity.

#### Remarks

Returns the available set of dynamic property identifiers
that have been used on this entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Player, system } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
// Type /scriptevent bp:entries to see this message
if (event.id === "bp:entries" && event.sourceEntity instanceof Player) {
   event.sourceEntity.sendMessage("Here's your dynamic properties entries:");

   // Display all dynamic properties
   for (const id of event.sourceEntity.getDynamicPropertyIds()) {
       event.sourceEntity.sendMessage(`- ${id}: ${event.sourceEntity.getDynamicProperty(id)}`);
   }
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getDynamicPropertyIds`](../../server/classes/Player.md#getdynamicpropertyids)

***

### getDynamicPropertyTotalByteCount()

> **getDynamicPropertyTotalByteCount**(): `number`

#### Returns

`number`

#### Remarks

Returns the total size, in bytes, of all the dynamic
properties that are currently stored for this entity. This
includes the size of both the key and the value.  This can
be useful for diagnosing performance warning signs - if, for
example, an entity has many megabytes of associated dynamic
properties, it may be slow to load on various devices.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Player, system } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
// Type /scriptevent dp:size to see this message
if (event.id === "dp:size" && event.sourceEntity instanceof Player) {
   // Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity.
   const byteCount = event.sourceEntity.getDynamicPropertyTotalByteCount();

   // Send the byte count to the player
   event.sourceEntity.sendMessage(`Dynamic Properties Byte Count: ${byteCount}`);
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getDynamicPropertyTotalByteCount`](../../server/classes/Player.md#getdynamicpropertytotalbytecount)

***

### getEffect()

> **getEffect**(`effectType`): [`Effect`](../../server/classes/Effect.md) \| `undefined`

#### Parameters

##### effectType

`string` \| [`EffectType`](../../server/classes/EffectType.md)

The effect identifier.

#### Returns

[`Effect`](../../server/classes/Effect.md) \| `undefined`

Effect object for the specified effect, undefined if the
effect is not present, or throws an error if the effect does
not exist.

#### Remarks

Returns the effect for the specified EffectType on the
entity, undefined if the effect is not present, or throws an
error if the effect does not exist.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { Player, world } from "@minecraft/server";

/**
@param {Player} player
/
function hasNightVision(player) {
const nightVision = player.getEffect("night_vision");
if (nightVision) {
   return true;
} else return false;
}

for (const player of world.getAllPlayers()) {
if (hasNightVision(player)) {
   player.sendMessage("You have night vision.");
} else {
   player.sendMessage("You don't have night vision.");
}
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getEffect`](../../server/classes/Player.md#geteffect)

***

### getEffects()

> **getEffects**(): [`Effect`](../../server/classes/Effect.md)[]

#### Returns

[`Effect`](../../server/classes/Effect.md)[]

List of effects.

#### Remarks

Returns a set of effects applied to this entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
for (const effect of player.getEffects()) {
   player.sendMessage(
       `Effect: ${effect.displayName} | Duration: ${effect.duration} | Amplifier: ${effect.amplifier}`
   );
}
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getEffects`](../../server/classes/Player.md#geteffects)

***

### getEntitiesFromViewDirection()

> **getEntitiesFromViewDirection**(`options?`): [`EntityRaycastHit`](../../server/interfaces/EntityRaycastHit.md)[]

#### Parameters

##### options?

[`EntityRaycastOptions`](../../server/interfaces/EntityRaycastOptions.md)

Additional configuration options for the ray cast.

#### Returns

[`EntityRaycastHit`](../../server/interfaces/EntityRaycastHit.md)[]

Returns a set of entities from the direction that this
entity is looking at.

#### Remarks

Gets the entities that this entity is looking at by
performing a ray cast from the view of this entity.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

minecraftcommon.UnsupportedFunctionalityError

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import type { EntityRaycastOptions } from "@minecraft/server";
import { world } from "@minecraft/server";

// Optional: Configure ray cast options
const raycastOptions: EntityRaycastOptions = {
maxDistance: 10, // Set your desired maximum distance
};

// Perform the ray cast

for (const entity of world.getDimension("overworld").getEntities()) {
const entitiesInView = entity.getEntitiesFromViewDirection(raycastOptions);

// Log the results
entitiesInView.forEach((hit) => {
   console.log(`Entity hit at distance ${hit.distance} blocks.`);
   console.log("Entity details:", hit.entity); // You can access properties/methods of the hit entity
});
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getEntitiesFromViewDirection`](../../server/classes/Player.md#getentitiesfromviewdirection)

***

### getGameMode()

> **getGameMode**(): [`GameMode`](../../server/enumerations/GameMode.md)

#### Returns

[`GameMode`](../../server/enumerations/GameMode.md)

#### Remarks

Retrieves the active gamemode for this player, if specified.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
const gameMode = player.getGameMode();
player.sendMessage(`Your game mode is ${gameMode}`);
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getGameMode`](../../server/classes/Player.md#getgamemode)

***

### getHeadLocation()

> **getHeadLocation**(): [`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

Returns the current location of the head component of this
entity.

#### Remarks

Returns the current location of the head component of this
entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Player } from "@minecraft/server";

function freezePlayerCamera(player: Player) {
player.camera.setCamera("minecraft:free", {
   location: player.getHeadLocation(),
   rotation: player.getRotation(),
});
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getHeadLocation`](../../server/classes/Player.md#getheadlocation)

***

### getItemCooldown()

> **getItemCooldown**(`cooldownCategory`): `number`

#### Parameters

##### cooldownCategory

`string`

Specifies the cooldown category to retrieve the current
cooldown for.

#### Returns

`number`

#### Remarks

Gets the current item cooldown time for a particular
cooldown category.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

const player = world.getAllPlayers()[0];
const cooldown = player.getItemCooldown("equipment");
// console.log removed for example clarity
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getItemCooldown`](../../server/classes/Player.md#getitemcooldown)

***

### getProperty()

> **getProperty**(`identifier`): `string` \| `number` \| `boolean` \| `undefined`

#### Parameters

##### identifier

`string`

The entity Property identifier.

#### Returns

`string` \| `number` \| `boolean` \| `undefined`

Returns the current property value. For enum properties, a
string is returned. For float and int properties, a number
is returned. For undefined properties, undefined is
returned.

#### Remarks

Gets an entity Property value. If the property was set using
the setProperty function within the same tick, the updated
value will not be reflected until the subsequent tick.

#### Throws

Throws if the entity is invalid.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

const entity = world.getDimension("overworld").getEntities({ type: "create:dummy" })[0];
entity.setProperty("create:rotation_offset", 1);
console.warn(entity.getProperty("create:rotation_offset"));
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getProperty`](../../server/classes/Player.md#getproperty)

***

### getRotation()

> **getRotation**(): [`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

Returns a Vec2 containing the rotation of this entity (in
degrees).

#### Remarks

Returns the current rotation component of this entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((event) => {
const message = event.message;
const player = event.sender;
if (message === "rotation get") {
   event.cancel = true;
   const rotation = player.getRotation();
   player.sendMessage(`Spawn point location: ${rotation.x} ${rotation.y}`);
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getRotation`](../../server/classes/Player.md#getrotation)

***

### getSpawnPoint()

> **getSpawnPoint**(): [`DimensionLocation`](../../server/interfaces/DimensionLocation.md) \| `undefined`

#### Returns

[`DimensionLocation`](../../server/interfaces/DimensionLocation.md) \| `undefined`

#### Remarks

Gets the current spawn point of the player.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((event) => {
const message = event.message;
const player = event.sender;
if (message === "spawnpoint get") {
   event.cancel = true;
   const spawnPoint = player.getSpawnPoint();
   if (spawnPoint) {
       player.sendMessage(
           `Spawn point location: ${spawnPoint.x} ${spawnPoint.y} ${spawnPoint.z} at ${spawnPoint.dimension.id}`
       );
   } else {
       player.sendMessage(`No spawn point set.`);
   }
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getSpawnPoint`](../../server/classes/Player.md#getspawnpoint)

***

### getTags()

> **getTags**(): `string`[]

#### Returns

`string`[]

An array containing all tags as strings.

#### Remarks

Returns all tags associated with the entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
const tags = entity.getTags();
const jaylyTag = tags.find((tag) => tag.startsWith("jayly:"));
if (jaylyTag) {
   world.sendMessage(`${entity.id}: ${jaylyTag}`);
}
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getTags`](../../server/classes/Player.md#gettags)

***

### getTotalXp()

> **getTotalXp**(): `number`

#### Returns

`number`

#### Remarks

Gets the total experience of the Player.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getTotalXp`](../../server/classes/Player.md#gettotalxp)

***

### getVelocity()

> **getVelocity**(): [`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

Returns the current velocity vector of the entity.

#### Remarks

Returns the current velocity vector of the entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### Example

```typescript
import { system, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function getFireworkVelocity(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const fireworkRocket = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.FireworksRocket, targetLocation);

  system.runTimeout(() => {
    const velocity = fireworkRocket.getVelocity();

    log("Velocity of firework is: (x: " + velocity.x + ", y:" + velocity.y + ", z:" + velocity.z + ")");
  }, 5);
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getVelocity`](../../server/classes/Player.md#getvelocity)

***

### getViewDirection()

> **getViewDirection**(): [`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

Returns the current view direction of the entity.

#### Remarks

Returns the current view direction of the entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`getViewDirection`](../../server/classes/Player.md#getviewdirection)

***

### giveItem()

> **giveItem**(`itemStack`, `selectSlot?`): `boolean`

#### Parameters

##### itemStack

[`ItemStack`](../../server/classes/ItemStack.md)

Item to give.

##### selectSlot?

`boolean`

Whether to set the selected slot once given.
Defaults to: false

#### Returns

`boolean`

#### Remarks

Gives the simulated player a particular item stack.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### glide()

> **glide**(): `boolean`

#### Returns

`boolean`

Returns true if the simulated player begins to glide.
Returns false if the player is already gliding, or the
player does not have Elytra equipped, is in water or is on
the ground.

#### Remarks

Causes the simulated player to start gliding. Elytra must be
equipped and the player must be in the air.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### hasComponent()

> **hasComponent**(`componentId`): `boolean`

#### Parameters

##### componentId

`string`

The identifier of the component (e.g., 'minecraft:rideable')
to retrieve. If no namespace prefix is specified,
'minecraft:' is assumed.

#### Returns

`boolean`

Returns true if the specified component is present on this
entity.

#### Remarks

Returns true if the specified component is present on this
entity.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

const entity = world.getDimension("overworld").getEntities({ type: "minecraft:villager" })[0];
entity.hasComponent("tameable");
entity.hasComponent("inventory");
entity.hasComponent("addrider");
entity.hasComponent("is_tamed");
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`hasComponent`](../../server/classes/Player.md#hascomponent)

***

### hasTag()

> **hasTag**(`tag`): `boolean`

#### Parameters

##### tag

`string`

Identifier of the tag to test for.

#### Returns

`boolean`

Returns whether an entity has a particular tag.

#### Remarks

Returns whether an entity has a particular tag.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`hasTag`](../../server/classes/Player.md#hastag)

***

### interact()

> **interact**(): `boolean`

#### Returns

`boolean`

#### Remarks

Performs a raycast from the player’s head and interacts with
the first intersected block or entity. Returns true if the
interaction was successful. Maximum range is 6 blocks.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### interactWithBlock()

> **interactWithBlock**(`blockLocation`, `direction?`): `boolean`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to interact with.

##### direction?

[`Direction`](../../server/enumerations/Direction.md)

Direction to place the specified item within.
Defaults to: 1

#### Returns

`boolean`

#### Remarks

Causes the simulated player to interact with a block. The
block at the specified block location must be solid. Returns
true if the interaction was performed.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestError](GameTestError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### interactWithEntity()

> **interactWithEntity**(`entity`): `boolean`

#### Parameters

##### entity

[`Entity`](../../server/classes/Entity.md)

Entity to interact with.

#### Returns

`boolean`

#### Remarks

Causes the simulated player to interact with a mob. Returns
true if the interaction was performed.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### jump()

> **jump**(): `boolean`

#### Returns

`boolean`

True if a jump was performed.

#### Remarks

Causes the simulated player to jump.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### kill()

> **kill**(): `boolean`

#### Returns

`boolean`

Returns true if entity can be killed (even if it is already
dead), otherwise it returns false.

#### Remarks

Kills this entity. The entity will drop loot as normal.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### Example

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function tagsQuery(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    const mobTypeId = mobs[i % mobs.length];
    const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
    entity.addTag("mobparty." + mobTypeId);
  }

  const eqo: EntityQueryOptions = {
    tags: ["mobparty.skeleton"],
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.kill();
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`kill`](../../server/classes/Player.md#kill)

***

### lookAt()

> **lookAt**(`targetLocation`): `void`

#### Parameters

##### targetLocation

[`Vector3`](../../server/interfaces/Vector3.md)

The target location that this entity should face/look
towards.

#### Returns

`void`

#### Remarks

Sets the rotation of the entity to face a target location.
Both pitch and yaw will be set, if applicable, such as for
mobs where the pitch controls the head tilt and the yaw
controls the body rotation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

minecraftcommon.UnsupportedFunctionalityError

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`lookAt`](../../server/classes/Player.md#lookat)

***

### lookAtBlock()

> **lookAtBlock**(`blockLocation`, `duration?`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

##### duration?

[`LookDuration`](../enumerations/LookDuration.md)

Defaults to: 2

#### Returns

`void`

#### Remarks

Rotates the simulated player's head/body to look at the
given block location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestError](GameTestError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### lookAtEntity()

> **lookAtEntity**(`entity`, `duration?`): `void`

#### Parameters

##### entity

[`Entity`](../../server/classes/Entity.md)

##### duration?

[`LookDuration`](../enumerations/LookDuration.md)

Defaults to: 2

#### Returns

`void`

#### Remarks

Rotates the simulated player's head/body to look at the
given entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### lookAtLocation()

> **lookAtLocation**(`location`, `duration?`): `void`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### duration?

[`LookDuration`](../enumerations/LookDuration.md)

Defaults to: 2

#### Returns

`void`

#### Remarks

Rotates the simulated player's head/body to look at the
given location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### matches()

> **matches**(`options`): `boolean`

#### Parameters

##### options

[`EntityQueryOptions`](../../server/interfaces/EntityQueryOptions.md)

The query to perform the match against.

#### Returns

`boolean`

Returns true if the entity matches the criteria in the
passed in EntityQueryOptions, otherwise it returns false.

#### Remarks

Matches the entity against the passed in options. Uses the
location of the entity for matching if the location is not
specified in the passed in EntityQueryOptions.

#### Throws

Throws if the query options are misconfigured.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

minecraftcommon.UnsupportedFunctionalityError

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { GameMode, system, world } from "@minecraft/server";
system.runInterval(() => {
for (const player of world.getAllPlayers()) {
   const isSpectating = player.matches({ gameMode: GameMode.Spectator });
   if (isSpectating) {
       player.onScreenDisplay.setActionBar("You are spectating");
   }
}
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`matches`](../../server/classes/Player.md#matches)

***

### move()

> **move**(`westEast`, `northSouth`, `speed?`): `void`

#### Parameters

##### westEast

`number`

##### northSouth

`number`

##### speed?

`number`

Defaults to: 1

#### Returns

`void`

#### Remarks

Orders the simulated player to walk in the given direction
relative to the GameTest.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### moveRelative()

> **moveRelative**(`leftRight`, `backwardForward`, `speed?`): `void`

#### Parameters

##### leftRight

`number`

##### backwardForward

`number`

##### speed?

`number`

Defaults to: 1

#### Returns

`void`

#### Remarks

Orders the simulated player to walk in the given direction
relative to the player's current rotation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### moveToBlock()

> **moveToBlock**(`blockLocation`, `options?`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

##### options?

[`MoveToOptions`](../interfaces/MoveToOptions.md)

#### Returns

`void`

#### Remarks

Orders the simulated player to move to the given block
location in a straight line. If a move or navigation is
already playing, this will override the last
move/navigation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### moveToLocation()

> **moveToLocation**(`location`, `options?`): `void`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### options?

[`MoveToOptions`](../interfaces/MoveToOptions.md)

#### Returns

`void`

#### Remarks

Orders the simulated player to move to the given location in
a straight line. If a move or navigation is already playing,
this will override the last move/navigation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

Error

[GameTestError](GameTestError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### navigateToBlock()

> **navigateToBlock**(`blockLocation`, `speed?`): [`NavigationResult`](NavigationResult.md)

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

##### speed?

`number`

Defaults to: 1

#### Returns

[`NavigationResult`](NavigationResult.md)

#### Remarks

Orders the simulated player to move to a specific block
location using navigation. If a move or navigation is
already playing, this will override the last move/walk. Note
that if the simulated player gets stuck, that simulated
player will stop. The player must be touching the ground in
order to start navigation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestError](GameTestError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### navigateToEntity()

> **navigateToEntity**(`entity`, `speed?`): [`NavigationResult`](NavigationResult.md)

#### Parameters

##### entity

[`Entity`](../../server/classes/Entity.md)

##### speed?

`number`

Defaults to: 1

#### Returns

[`NavigationResult`](NavigationResult.md)

#### Remarks

Will use navigation to follow the selected entity to within
a one block radius. If a move or navigation is already
playing, this will override the last move/navigation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### navigateToLocation()

> **navigateToLocation**(`location`, `speed?`): [`NavigationResult`](NavigationResult.md)

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### speed?

`number`

Defaults to: 1

#### Returns

[`NavigationResult`](NavigationResult.md)

#### Remarks

Orders the simulated player to move to a specific location
using navigation. If a move or navigation is already
playing, this will override the last move/walk. Note that if
the simulated player gets stuck, that simulated player will
stop. The player must be touching the ground in order to
start navigation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestError](GameTestError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### navigateToLocations()

> **navigateToLocations**(`locations`, `speed?`): `void`

#### Parameters

##### locations

[`Vector3`](../../server/interfaces/Vector3.md)[]

A list of locations to use for routing.

##### speed?

`number`

Net speed to use for doing the navigation.
Defaults to: 1

#### Returns

`void`

#### Remarks

Use navigation to follow the route provided via the
locations parameter. If a move or navigation is already
playing, this will override the last move/navigation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestError](GameTestError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### playAnimation()

> **playAnimation**(`animationName`, `options?`): `void`

#### Parameters

##### animationName

`string`

The animation identifier. e.g. animation.creeper.swelling

##### options?

[`PlayAnimationOptions`](../../server/interfaces/PlayAnimationOptions.md)

Additional options to control the playback and transitions
of the animation.

#### Returns

`void`

#### Remarks

Cause the entity to play the given animation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`playAnimation`](../../server/classes/Player.md#playanimation)

***

### playMusic()

> **playMusic**(`trackId`, `musicOptions?`): `void`

#### Parameters

##### trackId

`string`

Identifier of the music track to play.

##### musicOptions?

[`MusicOptions`](../../server/interfaces/MusicOptions.md)

Additional options for the music track.

#### Returns

`void`

#### Remarks

Plays a music track that only this particular player can
hear.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`playMusic`](../../server/classes/Player.md#playmusic)

***

### playSound()

> **playSound**(`soundId`, `soundOptions?`): `void`

#### Parameters

##### soundId

`string`

##### soundOptions?

[`PlayerSoundOptions`](../../server/interfaces/PlayerSoundOptions.md)

Additional optional options for the sound.

#### Returns

`void`

#### Remarks

Plays a sound that only this particular player can hear.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

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

```ts
import { Player } from "@minecraft/server";

// Scripting code for `playsound
function playCreatorMusicBoxRecord(player: Player) {
player.playSound("record.creator_music_box", { location: player.location });
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`playSound`](../../server/classes/Player.md#playsound)

***

### postClientMessage()

> **postClientMessage**(`id`, `value`): `void`

**`Beta`**

#### Parameters

##### id

`string`

##### value

`string`

#### Returns

`void`

#### Remarks

This is an internal-facing method for posting a system
message to downstream clients.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

`minecraftserver.Player.postClientMessage`

***

### queueMusic()

> **queueMusic**(`trackId`, `musicOptions?`): `void`

#### Parameters

##### trackId

`string`

Identifier of the music track to play.

##### musicOptions?

[`MusicOptions`](../../server/interfaces/MusicOptions.md)

Additional options for the music track.

#### Returns

`void`

#### Remarks

Queues an additional music track that only this particular
player can hear. If a track is not playing, a music track
will play.

This function can't be called in restricted-execution mode.

#### Throws

An error will be thrown if volume is less than 0.0.
An error will be thrown if fade is less than 0.0.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Player } from "@minecraft/server";

// Surely someone enjoy minecraft ambient music
const allMusic = [
"music.overworld.bamboo_jungle",
"music.overworld.bamboo_jungle",
"music.game.basalt_deltas",
"music.game_and_wild_equal_chance",
"music.game_and_wild_equal_chance",
"music.game_and_wild_favor_game",
"music.overworld.cherry_grove",
"music.game.creative",
"music.game.credits",
"music.game.crimson_forest",
"music.overworld.deep_dark",
"music.overworld.desert",
"music.overworld.desert",
"music.overworld.desert",
"music.overworld.dripstone_caves",
"music.game.end",
"music.game.endboss",
"music.overworld.flower_forest",
"music.game_and_wild_equal_chance",
"music.game.frozen_peaks",
"music.game",
"music.overworld.grove",
"music.game.nether_wastes",
"music.overworld.jagged_peaks",
"music.overworld.jungle",
"music.overworld.jungle_edge",
"music.overworld.jungle",
"music.overworld.jungle",
"music.game_and_wild_equal_chance",
"music.overworld.lush_caves",
"music.game.swamp_music",
"music.game.meadow",
"music.game_and_wild_favor_game",
"music.menu",
"music.overworld.mesa",
"music.overworld.mesa",
"music.overworld.mesa",
"music.game.nether",
"music.game_and_wild_favor_game",
"music.game_and_wild_favor_game",
"music.game_and_wild_equal_chance",
"music.game_and_wild_equal_chance",
"music.overworld.snowy_slopes",
"music.game.soulsand_valley",
"music.overworld.stony_peaks",
"music.game.swamp_music",
"music.game.swamp_music",
"music.game.water",
];

function queueAllMusic(player: Player) {
for (const musicTrackId of allMusic) {
   player.queueMusic(musicTrackId, { fade: 1.0 });
}
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`queueMusic`](../../server/classes/Player.md#queuemusic)

***

### remove()

> **remove**(): `void`

#### Returns

`void`

#### Remarks

Immediately removes the entity from the world. The removed
entity will not perform a death animation or drop loot upon
removal.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

minecraftcommon.UnsupportedFunctionalityError

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

// Note: You cannot despawn players via entity.remove()
const entities = world.getDimension("overworld").getEntities({ excludeTypes: ["minecraft:player"] });

for (const entity of entities) {
entity.remove();
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`remove`](../../server/classes/Player.md#remove)

***

### removeEffect()

> **removeEffect**(`effectType`): `boolean`

#### Parameters

##### effectType

`string` \| [`EffectType`](../../server/classes/EffectType.md)

The effect identifier.

#### Returns

`boolean`

Returns true if the effect has been removed. Returns false
if the effect is not found or does not exist.

#### Remarks

Removes the specified EffectType on the entity, or returns
false if the effect is not present.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`removeEffect`](../../server/classes/Player.md#removeeffect)

***

### removePropertyOverrideForEntity()

> **removePropertyOverrideForEntity**(`targetEntity`, `identifier`): `void`

#### Parameters

##### targetEntity

[`Entity`](../../server/classes/Entity.md)

The Entity whose Entity Property override is being removed.

##### identifier

`string`

The Entity Property identifier.

#### Returns

`void`

#### Remarks

For this player, removes the override on an Entity Property.
This change is not applied until the next tick and will not
apply to other players.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the entity is invalid.
Throws if an invalid identifier is provided.
Throws if the provided value type does not match the
property type.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`removePropertyOverrideForEntity`](../../server/classes/Player.md#removepropertyoverrideforentity)

***

### removeTag()

> **removeTag**(`tag`): `boolean`

#### Parameters

##### tag

`string`

Content of the tag to remove.

#### Returns

`boolean`

Returns whether the tag existed on the entity.

#### Remarks

Removes a specified tag from an entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
player.removeTag("admin");
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`removeTag`](../../server/classes/Player.md#removetag)

***

### resetLevel()

> **resetLevel**(): `void`

#### Returns

`void`

#### Remarks

Resets the level of the player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
player.resetLevel();
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`resetLevel`](../../server/classes/Player.md#resetlevel)

***

### resetProperty()

> **resetProperty**(`identifier`): `string` \| `number` \| `boolean`

#### Parameters

##### identifier

`string`

The Entity Property identifier.

#### Returns

`string` \| `number` \| `boolean`

Returns the default property value. For enum properties, a
string is returned. For float and int properties, a number
is returned. For undefined properties, undefined is
returned.

#### Remarks

Resets an Entity Property back to its default value, as
specified in the Entity's definition. This property change
is not applied until the next tick.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the entity is invalid.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

Error

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`resetProperty`](../../server/classes/Player.md#resetproperty)

***

### respawn()

> **respawn**(): `boolean`

#### Returns

`boolean`

#### Remarks

Respawns the particular simulated player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### rotateBody()

> **rotateBody**(`angleInDegrees`): `void`

#### Parameters

##### angleInDegrees

`number`

#### Returns

`void`

#### Remarks

Causes the simulated player to turn by the provided angle,
relative to the player's current rotation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### runCommand()

> **runCommand**(`commandString`): [`CommandResult`](../../server/classes/CommandResult.md)

#### Parameters

##### commandString

`string`

The command string. Note: This should not include a leading
forward slash.

#### Returns

[`CommandResult`](../../server/classes/CommandResult.md)

A command result containing whether the command was
successful.

#### Remarks

Runs a synchronous command on the entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[CommandError](../../server/classes/CommandError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

world.afterEvents.entityDie.subscribe((event) => {
event.deadEntity.runCommand("say I am dead!");
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`runCommand`](../../server/classes/Player.md#runcommand)

***

### sendMessage()

> **sendMessage**(`message`): `void`

#### Parameters

##### message

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md) \| (`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md))[]

The message to be displayed.

#### Returns

`void`

#### Remarks

Sends a message to the player.

#### Throws

This method can throw if the provided [RawMessage](../../server/interfaces/RawMessage.md) is
in an invalid format. For example, if an empty `name` string
is provided to `score`.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

[RawMessageError](../../server/classes/RawMessageError.md)

#### Examples

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function nestedTranslation(targetLocation: DimensionLocation) {
  // Displays "Apple or Coal"
  const rawMessage = {
    translate: "accessibility.list.or.two",
    with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
  };
  world.sendMessage(rawMessage);
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function scoreWildcard(targetLocation: DimensionLocation) {
  // Displays the player's score for objective "obj". Each player will see their own score.
  const rawMessage = { score: { name: "*", objective: "obj" } };
  world.sendMessage(rawMessage);
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function sendBasicMessage(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].sendMessage("Hello World!");
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function sendPlayerMessages(targetLocation: DimensionLocation) {
  for (const player of world.getAllPlayers()) {
    // Displays "First or Second"
    const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
    player.sendMessage(rawMessage);

    // Displays "Hello, world!"
    player.sendMessage("Hello, world!");

    // Displays "Welcome, Amazing Player 1!"
    player.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });

    // Displays the player's score for objective "obj". Each player will see their own score.
    const rawMessageWithScore = { score: { name: "*", objective: "obj" } };
    player.sendMessage(rawMessageWithScore);

    // Displays "Apple or Coal"
    const rawMessageWithNestedTranslations = {
      translate: "accessibility.list.or.two",
      with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
    };
    player.sendMessage(rawMessageWithNestedTranslations);
  }
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function sendTranslatedMessage(
    targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  players[0].sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`sendMessage`](../../server/classes/Player.md#sendmessage)

***

### setBodyRotation()

> **setBodyRotation**(`angleInDegrees`): `void`

#### Parameters

##### angleInDegrees

`number`

#### Returns

`void`

#### Remarks

Causes the simulated player to turn to face the provided
angle, relative to the GameTest.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setControlScheme()

> **setControlScheme**(`controlScheme?`): `void`

#### Parameters

##### controlScheme?

[`ControlScheme`](../../server/enumerations/ControlScheme.md)

Control scheme type. If this argument is undefined, this
method will clear the player's control scheme back to the
player camera's default control scheme.

#### Returns

`void`

Returns nothing if the control scheme was added or updated
successfully. This can throw an InvalidArgumentError if the
control scheme is not allowed by the player's current
camera.

#### Remarks

Set a player's control scheme. The player's active camera
preset must be set by scripts like with camera.setCamera()
or commands.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`setControlScheme`](../../server/classes/Player.md#setcontrolscheme)

***

### setDynamicProperties()

> **setDynamicProperties**(`values`): `void`

#### Parameters

##### values

`Record`\<`string`, `boolean` \| `number` \| `string` \| [`Vector3`](../../server/interfaces/Vector3.md) \| `undefined`\>

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

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`setDynamicProperties`](../../server/classes/Player.md#setdynamicproperties)

***

### setDynamicProperty()

> **setDynamicProperty**(`identifier`, `value?`): `void`

#### Parameters

##### identifier

`string`

The property identifier.

##### value?

`string` \| `number` \| `boolean` \| [`Vector3`](../../server/interfaces/Vector3.md)

Data value of the property to set. If the value is null, it
will remove the property instead.

#### Returns

`void`

#### Remarks

Sets a specified property to a value.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Vector3, system, world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe((event) => {
event.entity.setDynamicProperty("spawn_location", event.entity.location); // set location spawn
});

world.beforeEvents.entityRemove.subscribe((event) => {
const location = event.removedEntity.getDynamicProperty("spawn_location") as Vector3; // get location spawn
const dimension = event.removedEntity.dimension;
system.run(() => {
   dimension.spawnEntity<string>(event.removedEntity.typeId, location);
});
});
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`setDynamicProperty`](../../server/classes/Player.md#setdynamicproperty)

***

### setGameMode()

> **setGameMode**(`gameMode?`): `void`

#### Parameters

##### gameMode?

[`GameMode`](../../server/enumerations/GameMode.md)

Active gamemode.

#### Returns

`void`

#### Remarks

Sets a gamemode override for this player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { GameMode, world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
player.setGameMode(GameMode.Creative);
}
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`setGameMode`](../../server/classes/Player.md#setgamemode)

***

### setItem()

> **setItem**(`itemStack`, `slot`, `selectSlot?`): `boolean`

#### Parameters

##### itemStack

[`ItemStack`](../../server/classes/ItemStack.md)

Item to set.

##### slot

`number`

Slot to place the given item in.

##### selectSlot?

`boolean`

Whether to set the selected slot once set.
Defaults to: false

#### Returns

`boolean`

#### Remarks

Sets a particular item for the simulated player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setOnFire()

> **setOnFire**(`seconds`, `useEffects?`): `boolean`

#### Parameters

##### seconds

`number`

Length of time to set the entity on fire.

##### useEffects?

`boolean`

Whether side-effects should be applied (e.g. thawing freeze)
and other conditions such as rain or fire protection should
be taken into consideration.
Defaults to: true

#### Returns

`boolean`

Whether the entity was set on fire. This can fail if seconds
is less than or equal to zero, the entity is wet or the
entity is immune to fire.

#### Remarks

Sets an entity on fire (if it is not in water or rain). Note
that you can call getComponent('minecraft:onfire') and, if
present, the entity is on fire.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### Example

```typescript
import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);

  skelly.setOnFire(20, true);

  system.runTimeout(() => {
    const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
    log(onfire?.onFireTicksRemaining + " fire ticks remaining.");

    skelly.extinguishFire(true);
    log("Never mind. Fire extinguished.");
  }, 20);
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`setOnFire`](../../server/classes/Player.md#setonfire)

***

### setProperty()

> **setProperty**(`identifier`, `value`): `void`

#### Parameters

##### identifier

`string`

The Entity Property identifier.

##### value

`string` \| `number` \| `boolean`

The property value. The provided type must be compatible
with the type specified in the entity's definition.

#### Returns

`void`

#### Remarks

Sets an Entity Property to the provided value. This property
change is not applied until the next tick.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the entity is invalid.
Throws if an invalid identifier is provided.
Throws if the provided value type does not match the
property type.
Throws if the provided value is outside the expected range
(int, float properties).
Throws if the provided string value does not match the set
of accepted enum values (enum properties

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

const tileEntity = world.getDimension("overworld").getEntities({ type: "create:dummy" })[0];
tileEntity.setProperty("create:rotation_offset", 1);
console.warn(tileEntity.getProperty("create:rotation_offset"));
```

#### Inherited from

[`Player`](../../server/classes/Player.md).[`setProperty`](../../server/classes/Player.md#setproperty)

***

### setPropertyOverrideForEntity()

> **setPropertyOverrideForEntity**(`targetEntity`, `identifier`, `value`): `void`

#### Parameters

##### targetEntity

[`Entity`](../../server/classes/Entity.md)

The Entity whose Entity Property is being overriden.

##### identifier

`string`

The Entity Property identifier.

##### value

`string` \| `number` \| `boolean`

The override value. The provided type must be compatible
with the type specified in the entity's definition.

#### Returns

`void`

#### Remarks

For this player, overrides an Entity Property on the target
Entity to the provided value. This property must be client
synced. This change is not applied until the next tick and
will not apply to other players.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the entity is invalid.
Throws if an invalid identifier is provided.
Throws if the provided value type does not match the
property type.
Throws if the provided value is outside the expected range
(int, float properties).
Throws if the provided string value does not match the set
of accepted enum values (enum properties)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`setPropertyOverrideForEntity`](../../server/classes/Player.md#setpropertyoverrideforentity)

***

### setRotation()

> **setRotation**(`rotation`): `void`

#### Parameters

##### rotation

[`Vector2`](../../server/interfaces/Vector2.md)

The x and y rotation of the entity (in degrees). For most
mobs, the x rotation controls the head tilt and the y
rotation controls the body rotation.

#### Returns

`void`

#### Remarks

Sets the main rotation of the entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`setRotation`](../../server/classes/Player.md#setrotation)

***

### setSkin()

> **setSkin**(`options`): `void`

#### Parameters

##### options

[`PlayerSkinData`](../interfaces/PlayerSkinData.md)

Options for the skin to set on the player.

#### Returns

`void`

#### Remarks

Updates information about the player's skin.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setSpawnPoint()

> **setSpawnPoint**(`spawnPoint?`): `void`

#### Parameters

##### spawnPoint?

[`DimensionLocation`](../../server/interfaces/DimensionLocation.md)

#### Returns

`void`

#### Remarks

Sets the current starting spawn point for this particular
player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

Error

[LocationOutOfWorldBoundariesError](../../server/classes/LocationOutOfWorldBoundariesError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`setSpawnPoint`](../../server/classes/Player.md#setspawnpoint)

***

### spawnParticle()

> **spawnParticle**(`effectName`, `location`, `molangVariables?`): `void`

#### Parameters

##### effectName

`string`

Identifier of the particle to create.

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

The location at which to create the particle emitter.

##### molangVariables?

[`MolangVariableMap`](../../server/classes/MolangVariableMap.md)

A set of optional, customizable variables that can be
adjusted for this particle.

#### Returns

`void`

#### Remarks

Creates a new particle emitter at a specified location in
the world. Only visible to the target player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

Error

[LocationInUnloadedChunkError](../../server/classes/LocationInUnloadedChunkError.md)

[LocationOutOfWorldBoundariesError](../../server/classes/LocationOutOfWorldBoundariesError.md)

#### Example

```typescript
import { world, MolangVariableMap, Vector3 } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe(event => {
    const targetLocation = event.player.location;
    for (let i = 0; i < 100; i++) {
        const molang = new MolangVariableMap();

        molang.setColorRGB('variable.color', {
            red: Math.random(),
            green: Math.random(),
            blue: Math.random()
        });

        const newLocation: Vector3 = {
            x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
            y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
            z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
        };
        event.player.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
    }
});
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`spawnParticle`](../../server/classes/Player.md#spawnparticle)

***

### startBuild()

> **startBuild**(`slot?`): `void`

#### Parameters

##### slot?

`number`

Defaults to: 0

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### startItemCooldown()

> **startItemCooldown**(`cooldownCategory`, `tickDuration`): `void`

#### Parameters

##### cooldownCategory

`string`

Specifies the cooldown category to retrieve the current
cooldown for.

##### tickDuration

`number`

Duration in ticks of the item cooldown.

#### Returns

`void`

#### Remarks

Sets the item cooldown time for a particular cooldown
category.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`startItemCooldown`](../../server/classes/Player.md#startitemcooldown)

***

### stopAllSounds()

> **stopAllSounds**(): `void`

**`Beta`**

#### Returns

`void`

#### Remarks

Stops all sounds from playing for this particular player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

`minecraftserver.Player.stopAllSounds`

***

### stopBreakingBlock()

> **stopBreakingBlock**(): `void`

#### Returns

`void`

#### Remarks

Stops destroying the block that is currently being hit.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### stopBuild()

> **stopBuild**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### stopFlying()

> **stopFlying**(): `void`

#### Returns

`void`

#### Remarks

Causes the simulated player to stop flying.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### stopGliding()

> **stopGliding**(): `void`

#### Returns

`void`

#### Remarks

Causes the simulated player to stop gliding.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### stopInteracting()

> **stopInteracting**(): `void`

#### Returns

`void`

#### Remarks

Stops interacting with entities or blocks.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### stopMoving()

> **stopMoving**(): `void`

#### Returns

`void`

#### Remarks

Stops moving/walking/following if the simulated player is
moving.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### stopMusic()

> **stopMusic**(): `void`

#### Returns

`void`

#### Remarks

Stops any music tracks from playing for this particular
player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`stopMusic`](../../server/classes/Player.md#stopmusic)

***

### stopSound()

> **stopSound**(`soundId`): `void`

**`Beta`**

#### Parameters

##### soundId

`string`

Identifier of the sound.

#### Returns

`void`

#### Remarks

Stops a sound from playing for this particular player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

`minecraftserver.Player.stopSound`

***

### stopSwimming()

> **stopSwimming**(): `void`

#### Returns

`void`

#### Remarks

Causes the simulated player to stop swimming.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### stopUsingItem()

> **stopUsingItem**(): [`ItemStack`](../../server/classes/ItemStack.md) \| `undefined`

#### Returns

[`ItemStack`](../../server/classes/ItemStack.md) \| `undefined`

Returns the item that was in use. Undefined if no item was
in use.

#### Remarks

Stops using the currently active item.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### swim()

> **swim**(): `void`

#### Returns

`void`

#### Remarks

Causes the simulated player to start swimming.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### teleport()

> **teleport**(`location`, `teleportOptions?`): `void`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

New location for the entity.

##### teleportOptions?

[`TeleportOptions`](../../server/interfaces/TeleportOptions.md)

Options regarding the teleport operation.

#### Returns

`void`

#### Remarks

Teleports the selected entity to a new location

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

minecraftcommon.UnsupportedFunctionalityError

#### Examples

```typescript
import { system, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function teleport(targetLocation: DimensionLocation) {
  const cow = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Cow, targetLocation);

  system.runTimeout(() => {
    cow.teleport(
      { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 },
      {
        facingLocation: targetLocation,
      }
    );
  }, 20);
}
```

```typescript
import { system, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function teleportMovement(targetLocation: DimensionLocation) {
  const pig = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Pig, targetLocation);

  let inc = 1;
  const runId = system.runInterval(() => {
    pig.teleport(
      { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
      {
        facingLocation: targetLocation,
      }
    );

    if (inc > 100) {
      system.clearRun(runId);
    }
    inc++;
  }, 4);
}
```

```js
import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe(({ sourceEntity, message }) => {
if (!sourceEntity) return;

if (message === "tp:nether") {
   sourceEntity.teleport({ x: 0, y: 0, z: 0 }, { dimension: world.getDimension("nether") });
}
});
```

```js
import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe(({ sourceEntity, message }) => {
if (!sourceEntity) return;

if (message === "tp:nether") {
   sourceEntity.teleport(
       { x: 0, y: 0, z: 0 },
       {
           dimension: world.getDimension("nether"),
           facingLocation: { x: 100, y: 100, z: 100 },
       }
   );
}
});
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`teleport`](../../server/classes/Player.md#teleport)

***

### triggerEvent()

> **triggerEvent**(`eventName`): `void`

#### Parameters

##### eventName

`string`

Name of the entity type event to trigger. If a namespace is
not specified, minecraft: is assumed.

#### Returns

`void`

#### Remarks

Triggers an entity type event. For every entity, a number of
events are defined in an entities' definition for key entity
behaviors; for example, creepers have a
minecraft:start_exploding type event.

This function can't be called in restricted-execution mode.

#### Throws

If the event is not defined in the definition of the entity,
an error will be thrown.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### Examples

```typescript
// A function that spawns a creeper and triggers it to explode immediately
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function spawnExplodingCreeper(location: DimensionLocation) {
    const creeper = location.dimension.spawnEntity(MinecraftEntityTypes.Creeper, location);

    creeper.triggerEvent('minecraft:start_exploding_forced');
}
```

```typescript
import { DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function triggerEvent(targetLocation: DimensionLocation) {
  const creeper = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Creeper, targetLocation);

  creeper.triggerEvent("minecraft:start_exploding_forced");
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`triggerEvent`](../../server/classes/Player.md#triggerevent)

***

### tryTeleport()

> **tryTeleport**(`location`, `teleportOptions?`): `boolean`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

Location to teleport the entity to.

##### teleportOptions?

[`TeleportOptions`](../../server/interfaces/TeleportOptions.md)

Options regarding the teleport operation.

#### Returns

`boolean`

Returns whether the teleport succeeded. This can fail if the
destination chunk is unloaded or if the teleport would
result in intersecting with blocks.

#### Remarks

Attempts to try a teleport, but may not complete the
teleport operation (for example, if there are blocks at the
destination.)

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](../../server/classes/InvalidEntityError.md)

minecraftcommon.UnsupportedFunctionalityError

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Player`](../../server/classes/Player.md).[`tryTeleport`](../../server/classes/Player.md#tryteleport)

***

### useItem()

> **useItem**(`itemStack`): `boolean`

#### Parameters

##### itemStack

[`ItemStack`](../../server/classes/ItemStack.md)

Item to use.

#### Returns

`boolean`

#### Remarks

Causes the simulated player to use an item. Does not consume
the item. Returns false if the item is on cooldown.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### useItemInSlot()

> **useItemInSlot**(`slot`): `boolean`

#### Parameters

##### slot

`number`

Index of the inventory slot.

#### Returns

`boolean`

#### Remarks

Causes the simulated player to hold and use an item in their
inventory.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### useItemInSlotOnBlock()

> **useItemInSlotOnBlock**(`slot`, `blockLocation`, `direction?`, `faceLocation?`): `boolean`

#### Parameters

##### slot

`number`

Index of the slot to use.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location to use the item upon.

##### direction?

[`Direction`](../../server/enumerations/Direction.md)

Direction to place the specified item within.
Defaults to: 1

##### faceLocation?

[`Vector3`](../../server/interfaces/Vector3.md)

Location relative to the bottom north-west corner of the
block where the item is placed.
Defaults to: null

#### Returns

`boolean`

#### Remarks

Causes the simulated player to use an item in their
inventory on a block. The block at the specified block
location must be solid. Returns true if the item was used.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestError](GameTestError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### useItemOnBlock()

> **useItemOnBlock**(`itemStack`, `blockLocation`, `direction?`, `faceLocation?`): `boolean`

#### Parameters

##### itemStack

[`ItemStack`](../../server/classes/ItemStack.md)

Item to use.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location to use the item upon.

##### direction?

[`Direction`](../../server/enumerations/Direction.md)

Direction to place the specified item within.
Defaults to: 1

##### faceLocation?

[`Vector3`](../../server/interfaces/Vector3.md)

Location relative to the bottom north-west corner of the
block where the item is placed.
Defaults to: null

#### Returns

`boolean`

#### Remarks

Causes the simulated player to use an item on a block. The
block at the specified block location must be solid. Returns
true if the item was used.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestError](GameTestError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.
