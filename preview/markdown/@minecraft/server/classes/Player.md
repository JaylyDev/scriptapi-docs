[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / Player

# Class: Player

Represents a player within the world.

## Example

```js
import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
   player.sendMessage(`Hello, ${player.name}!`);
}
```

## Source

```ts
export class Player extends Entity {
    private constructor();
    readonly camera: Camera;
    readonly clientSystemInfo: ClientSystemInfo;
    commandPermissionLevel: CommandPermissionLevel;
    readonly graphicsMode: GraphicsMode;
    readonly inputInfo: InputInfo;
    readonly inputPermissions: PlayerInputPermissions;
    readonly isEmoting: boolean;
    readonly isFlying: boolean;
    readonly isGliding: boolean;
    readonly isJumping: boolean;
    readonly level: number;
    readonly name: string;
    readonly onScreenDisplay: ScreenDisplay;
    readonly playerPermissionLevel: PlayerPermissionLevel;
    selectedSlotIndex: number;
    readonly totalXpNeededForNextLevel: number;
    readonly xpEarnedAtCurrentLevel: number;
    addExperience(amount: number): number;
    addLevels(amount: number): number;
    clearPropertyOverridesForEntity(targetEntity: Entity | string): void;
    getAimAssist(): PlayerAimAssist;
    getControlScheme(): ControlScheme;
    getGameMode(): GameMode;
    getItemCooldown(cooldownCategory: string): number;
    getSpawnPoint(): DimensionLocation | undefined;
    getTotalXp(): number;
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void;
    resetLevel(): void;
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    setControlScheme(controlScheme?: ControlScheme): void;
    setGameMode(gameMode?: GameMode): void;
    setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void;
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    stopMusic(): void;
}
```

## Extends

- [`Entity`](Entity.md)

## Extended by

- [`SimulatedPlayer`](../../server-gametest/classes/SimulatedPlayer.md)

## Constructors

### Constructor

> `private` **new Player**(): `Player`

#### Returns

`Player`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### camera

> `readonly` **camera**: [`Camera`](Camera.md)

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

***

### clientSystemInfo

> `readonly` **clientSystemInfo**: [`ClientSystemInfo`](ClientSystemInfo.md)

#### Remarks

Contains the player's device information.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### commandPermissionLevel

> **commandPermissionLevel**: [`CommandPermissionLevel`](../enumerations/CommandPermissionLevel.md)

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

***

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension.md)

#### Remarks

Dimension that the entity is currently within.

#### Throws

This property can throw when used.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`dimension`](Entity.md#dimension)

***

### graphicsMode

> `readonly` **graphicsMode**: [`GraphicsMode`](../enumerations/GraphicsMode.md)

#### Remarks

Gets the current graphics mode of the player's client. This
can be changed in the Video section of the settings menu
based on what hardware is available.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

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
property is accessible even if [Entity.isValid](Entity.md#isvalid) is
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

[`Entity`](Entity.md).[`id`](Entity.md#id)

***

### inputInfo

> `readonly` **inputInfo**: [`InputInfo`](InputInfo.md)

#### Remarks

Contains the player's input information.

#### World Ready

This property can't be read in early-execution mode.

***

### inputPermissions

> `readonly` **inputPermissions**: [`PlayerInputPermissions`](PlayerInputPermissions.md)

#### Remarks

Input permissions of the player.

#### World Ready

This property can't be read in early-execution mode.

***

### isClimbing

> `readonly` **isClimbing**: `boolean`

#### Remarks

Whether the entity is touching a climbable block. For
example, a player next to a ladder or a spider next to a
stone wall.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`isClimbing`](Entity.md#isclimbing)

***

### isEmoting

> `readonly` **isEmoting**: `boolean`

#### Remarks

If true, the player is currently emoting.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### isFalling

> `readonly` **isFalling**: `boolean`

#### Remarks

Whether the entity has a fall distance greater than 0, or
greater than 1 while gliding.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`isFalling`](Entity.md#isfalling)

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

***

### isInWater

> `readonly` **isInWater**: `boolean`

#### Remarks

Whether any part of the entity is inside a water block.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`isInWater`](Entity.md#isinwater)

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

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`isOnGround`](Entity.md#isonground)

***

### isSleeping

> `readonly` **isSleeping**: `boolean`

#### Remarks

If true, the entity is currently sleeping.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`isSleeping`](Entity.md#issleeping)

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

[`Entity`](Entity.md).[`isSneaking`](Entity.md#issneaking)

***

### isSprinting

> `readonly` **isSprinting**: `boolean`

#### Remarks

Whether the entity is sprinting. For example, a player using
the sprint action, an ocelot running away or a pig boosting
with Carrot on a Stick.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`isSprinting`](Entity.md#issprinting)

***

### isSwimming

> `readonly` **isSwimming**: `boolean`

#### Remarks

Whether the entity is in the swimming state. For example, a
player using the swim action or a fish in water.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`isSwimming`](Entity.md#isswimming)

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

[`Entity`](Entity.md).[`isValid`](Entity.md#isvalid)

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

***

### localizationKey

> `readonly` **localizationKey**: `string`

#### Remarks

Key for the localization of this entity's name used in .lang
files.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`localizationKey`](Entity.md#localizationkey)

***

### location

> `readonly` **location**: [`Vector3`](../interfaces/Vector3.md)

#### Remarks

Current location of the entity.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`location`](Entity.md#location)

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

[`Entity`](Entity.md).[`nameTag`](Entity.md#nametag)

***

### onScreenDisplay

> `readonly` **onScreenDisplay**: [`ScreenDisplay`](ScreenDisplay.md)

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

***

### playerPermissionLevel

> `readonly` **playerPermissionLevel**: [`PlayerPermissionLevel`](../enumerations/PlayerPermissionLevel.md)

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### scoreboardIdentity?

> `readonly` `optional` **scoreboardIdentity?**: [`ScoreboardIdentity`](ScoreboardIdentity.md)

#### Remarks

Returns a scoreboard identity that represents this entity.
Will remain valid when the entity is killed.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`scoreboardIdentity`](Entity.md#scoreboardidentity)

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

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the type of the entity - for example,
'minecraft:skeleton'. This property is accessible even if
[Entity.isValid](Entity.md#isvalid) is false.

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

[`Entity`](Entity.md).[`typeId`](Entity.md#typeid)

***

### xpEarnedAtCurrentLevel

> `readonly` **xpEarnedAtCurrentLevel**: `number`

#### Remarks

The current set of experience achieved for the player.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### addEffect()

> **addEffect**(`effectType`, `duration`, `options?`): [`Effect`](Effect.md) \| `undefined`

#### Parameters

##### effectType

`string` \| [`EffectType`](EffectType.md)

Type of effect to add to the entity.

##### duration

`number`

Amount of time, in ticks, for the effect to apply. There are
20 ticks per second. Use [TicksPerSecond](../variables/TicksPerSecond.md) constant to
convert between ticks and seconds. The value must be within
the range [0, 20000000].
Bounds: [1, 20000000]

##### options?

[`EntityEffectOptions`](../interfaces/EntityEffectOptions.md)

Additional options for the effect.

#### Returns

[`Effect`](Effect.md) \| `undefined`

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

[InvalidEntityError](InvalidEntityError.md)

#### Examples

```typescript
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEffectTypes } from '@minecraft/vanilla-data';

function spawnPoisonedVillager(targetLocation: DimensionLocation) {
  const villagerType = 'minecraft:villager_v2<minecraft:ageable_grow_up>';
  const villager = targetLocation.dimension.spawnEntity(villagerType, targetLocation);
  const duration = 20;

  villager.addEffect(MinecraftEffectTypes.Poison, duration, { amplifier: 1 });
}
```

```typescript
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes, MinecraftEffectTypes } from '@minecraft/vanilla-data';

function quickFoxLazyDog(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const fox = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
    x: targetLocation.x + 1,
    y: targetLocation.y + 2,
    z: targetLocation.z + 3,
  });

  fox.addEffect(MinecraftEffectTypes.Speed, 10, {
    amplifier: 2,
  });
  log('Created a fox.');

  const wolf = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Wolf, {
    x: targetLocation.x + 4,
    y: targetLocation.y + 2,
    z: targetLocation.z + 3,
  });
  wolf.addEffect(MinecraftEffectTypes.Slowness, 10, {
    amplifier: 2,
  });
  wolf.isSneaking = true;
  log('Created a sneaking wolf.', 1);
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`addEffect`](Entity.md#addeffect)

***

### addExperience()

> **addExperience**(`amount`): `number`

#### Parameters

##### amount

`number`

Amount of experience to add. Note that this can be negative.
Min/max bounds at -2^24 ~ 2^24
Bounds: [-16777216, 16777216]

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

***

### addItem()

> **addItem**(`itemStack`): [`ItemStack`](ItemStack.md) \| `undefined`

**`Rc`**

#### Parameters

##### itemStack

[`ItemStack`](ItemStack.md)

#### Returns

[`ItemStack`](ItemStack.md) \| `undefined`

Returns undefined if the item was fully added or returns an
ItemStack with the remaining count.

#### Remarks

Adds an item to the entity's inventory.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[ContainerRulesError](ContainerRulesError.md)

Error

[InvalidEntityComponentError](InvalidEntityComponentError.md)

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`addItem`](Entity.md#additem)

***

### addLevels()

> **addLevels**(`amount`): `number`

#### Parameters

##### amount

`number`

Amount to add to the player. Min/max bounds at -2^24 ~ 2^24
Bounds: [-16777216, 16777216]

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

[InvalidEntityError](InvalidEntityError.md)

#### Example

```typescript
import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';

function tagsQuery(targetLocation: DimensionLocation) {
  const mobs = ['creeper', 'skeleton', 'sheep'];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    const mobTypeId = mobs[i % mobs.length];
    const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
    entity.addTag('mobparty.' + mobTypeId);
  }

  const eqo: EntityQueryOptions = {
    tags: ['mobparty.skeleton'],
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.kill();
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`addTag`](Entity.md#addtag)

***

### applyDamage()

> **applyDamage**(`amount`, `options?`): `boolean`

#### Parameters

##### amount

`number`

Amount of damage to apply.

##### options?

[`EntityApplyDamageByProjectileOptions`](../interfaces/EntityApplyDamageByProjectileOptions.md) \| [`EntityApplyDamageOptions`](../interfaces/EntityApplyDamageOptions.md)

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

[InvalidEntityError](InvalidEntityError.md)

[minecraftcommon.UnsupportedFunctionalityError](../../common/classes/UnsupportedFunctionalityError.md)

#### Examples

```typescript
import { system, EntityHealthComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function applyDamageThenHeal(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);

  skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton

  system.runTimeout(() => {
    const health = skelly.getComponent(EntityComponentTypes.Health) as EntityHealthComponent;
    log('Skeleton health before heal: ' + health?.currentValue);
    health?.resetToMaxValue();
    log('Skeleton health after heal: ' + health?.currentValue);
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

[`Entity`](Entity.md).[`applyDamage`](Entity.md#applydamage)

***

### applyImpulse()

> **applyImpulse**(`vector`): `void`

#### Parameters

##### vector

[`Vector3`](../interfaces/Vector3.md)

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

[InvalidEntityError](InvalidEntityError.md)

#### Example

```typescript
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

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

[`Entity`](Entity.md).[`applyImpulse`](Entity.md#applyimpulse)

***

### applyKnockback()

> **applyKnockback**(`horizontalForce`, `verticalStrength`): `void`

#### Parameters

##### horizontalForce

[`VectorXZ`](../interfaces/VectorXZ.md)

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

[InvalidEntityError](InvalidEntityError.md)

[minecraftcommon.UnsupportedFunctionalityError](../../common/classes/UnsupportedFunctionalityError.md)

#### Example

```typescript
import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';

function bounceSkeletons(targetLocation: DimensionLocation) {
  const mobs = ['creeper', 'skeleton', 'sheep'];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
  }

  const eqo: EntityQueryOptions = {
    type: 'skeleton',
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

[`Entity`](Entity.md).[`applyKnockback`](Entity.md#applyknockback)

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

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`clearDynamicProperties`](Entity.md#cleardynamicproperties)

***

### clearPropertyOverridesForEntity()

> **clearPropertyOverridesForEntity**(`targetEntity`): `void`

#### Parameters

##### targetEntity

`string` \| [`Entity`](Entity.md)

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

[InvalidEntityError](InvalidEntityError.md)

#### Example

```typescript
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

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

[`Entity`](Entity.md).[`clearVelocity`](Entity.md#clearvelocity)

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

[InvalidEntityError](InvalidEntityError.md)

#### Example

```typescript
import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);

  skelly.setOnFire(20, true);

  system.runTimeout(() => {
    const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
    log(onfire?.onFireTicksRemaining + ' fire ticks remaining.');

    skelly.extinguishFire(true);
    log('Never mind. Fire extinguished.');
  }, 20);
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`extinguishFire`](Entity.md#extinguishfire)

***

### getAABB()

> **getAABB**(): [`AABB`](../interfaces/AABB.md)

#### Returns

[`AABB`](../interfaces/AABB.md)

An axis-aligned bounding box.

#### Remarks

Gets the entity's collision bounds.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`getAABB`](Entity.md#getaabb)

***

### getAimAssist()

> **getAimAssist**(): [`PlayerAimAssist`](PlayerAimAssist.md)

#### Returns

[`PlayerAimAssist`](PlayerAimAssist.md)

#### Remarks

The player's aim-assist settings.

#### World Ready

This function can't be called in early-execution mode.

***

### getAllBlocksStandingOn()

> **getAllBlocksStandingOn**(`options?`): [`Block`](Block.md)[]

#### Parameters

##### options?

[`GetBlocksStandingOnOptions`](../interfaces/GetBlocksStandingOnOptions.md)

Additional configuration options for what blocks are
returned.

#### Returns

[`Block`](Block.md)[]

The solid blocks that this entity is directly standing on.
Returns an empty list if the entity is jumping or flying.

#### Remarks

Gets the solid blocks that this entity is directly standing
on. Ignores pressure plates.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`getAllBlocksStandingOn`](Entity.md#getallblocksstandingon)

***

### getBlockFromViewDirection()

> **getBlockFromViewDirection**(`options?`): [`BlockRaycastHit`](../interfaces/BlockRaycastHit.md) \| `undefined`

#### Parameters

##### options?

[`BlockRaycastOptions`](../interfaces/BlockRaycastOptions.md)

Additional configuration options for the ray cast.

#### Returns

[`BlockRaycastHit`](../interfaces/BlockRaycastHit.md) \| `undefined`

Returns the first intersecting block from the direction that
this entity is looking at.

#### Remarks

Returns the first intersecting block from the direction that
this entity is looking at.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getBlockFromViewDirection`](Entity.md#getblockfromviewdirection)

***

### getBlockStandingOn()

> **getBlockStandingOn**(`options?`): [`Block`](Block.md) \| `undefined`

#### Parameters

##### options?

[`GetBlocksStandingOnOptions`](../interfaces/GetBlocksStandingOnOptions.md)

Additional configuration options for what block is returned.

#### Returns

[`Block`](Block.md) \| `undefined`

A single solid block closest to the center of the entity
that this entity is directly standing on. Undefined if
entity is flying or jumping.

#### Remarks

Gets a single solid block closest to the center of the
entity that this entity is directly standing on. Ignores
pressure plates.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`getBlockStandingOn`](Entity.md#getblockstandingon)

***

### getComponent()

> **getComponent**\<`T`\>(`componentId`): [`EntityComponentReturnType`](../type-aliases/EntityComponentReturnType.md)\<`T`\> \| `undefined`

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### componentId

`T`

The identifier of the component (e.g., 'minecraft:health').
If no namespace prefix is specified, 'minecraft:' is
assumed. Available component IDs can be found as part of the
[EntityComponentTypes](../enumerations/EntityComponentTypes.md) enum.

#### Returns

[`EntityComponentReturnType`](../type-aliases/EntityComponentReturnType.md)\<`T`\> \| `undefined`

Returns the component if it exists on the entity, otherwise
undefined.

#### Remarks

Gets a component (that represents additional capabilities)
for an entity.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getComponent`](Entity.md#getcomponent)

***

### getComponents()

> **getComponents**(): [`EntityComponent`](EntityComponent.md)[]

#### Returns

[`EntityComponent`](EntityComponent.md)[]

#### Remarks

Returns all scripting components that are present on this
entity.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getComponents`](Entity.md#getcomponents)

***

### getControlScheme()

> **getControlScheme**(): [`ControlScheme`](../enumerations/ControlScheme.md)

#### Returns

[`ControlScheme`](../enumerations/ControlScheme.md)

#### Remarks

Returns the player's current control scheme.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getDynamicProperty()

> **getDynamicProperty**(`identifier`): `string` \| `number` \| `boolean` \| [`Vector3`](../interfaces/Vector3.md) \| `undefined`

#### Parameters

##### identifier

`string`

The property identifier.

#### Returns

`string` \| `number` \| `boolean` \| [`Vector3`](../interfaces/Vector3.md) \| `undefined`

Returns the value for the property, or undefined if the
property has not been set.

#### Remarks

Returns a property value.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getDynamicProperty`](Entity.md#getdynamicproperty)

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

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getDynamicPropertyIds`](Entity.md#getdynamicpropertyids)

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

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getDynamicPropertyTotalByteCount`](Entity.md#getdynamicpropertytotalbytecount)

***

### getEffect()

> **getEffect**(`effectType`): [`Effect`](Effect.md) \| `undefined`

#### Parameters

##### effectType

`string` \| [`EffectType`](EffectType.md)

The effect identifier.

#### Returns

[`Effect`](Effect.md) \| `undefined`

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

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getEffect`](Entity.md#geteffect)

***

### getEffects()

> **getEffects**(): [`Effect`](Effect.md)[]

#### Returns

[`Effect`](Effect.md)[]

List of effects.

#### Remarks

Returns a set of effects applied to this entity.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getEffects`](Entity.md#geteffects)

***

### getEntitiesFromViewDirection()

> **getEntitiesFromViewDirection**(`options?`): [`EntityRaycastHit`](../interfaces/EntityRaycastHit.md)[]

#### Parameters

##### options?

[`EntityRaycastOptions`](../interfaces/EntityRaycastOptions.md)

Additional configuration options for the ray cast.

#### Returns

[`EntityRaycastHit`](../interfaces/EntityRaycastHit.md)[]

Returns a set of entities from the direction that this
entity is looking at.

#### Remarks

Gets the entities that this entity is looking at by
performing a ray cast from the view of this entity.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](InvalidEntityError.md)

[minecraftcommon.UnsupportedFunctionalityError](../../common/classes/UnsupportedFunctionalityError.md)

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

[`Entity`](Entity.md).[`getEntitiesFromViewDirection`](Entity.md#getentitiesfromviewdirection)

***

### getGameMode()

> **getGameMode**(): [`GameMode`](../enumerations/GameMode.md)

#### Returns

[`GameMode`](../enumerations/GameMode.md)

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

***

### getHeadLocation()

> **getHeadLocation**(): [`Vector3`](../interfaces/Vector3.md)

#### Returns

[`Vector3`](../interfaces/Vector3.md)

Returns the current location of the head component of this
entity.

#### Remarks

Returns the current location of the head component of this
entity.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getHeadLocation`](Entity.md#getheadlocation)

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

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getProperty`](Entity.md#getproperty)

***

### getRotation()

> **getRotation**(): [`Vector2`](../interfaces/Vector2.md)

#### Returns

[`Vector2`](../interfaces/Vector2.md)

Returns a Vec2 containing the rotation of this entity (in
degrees).

#### Remarks

Returns the current rotation component of this entity.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getRotation`](Entity.md#getrotation)

***

### getSpawnPoint()

> **getSpawnPoint**(): [`DimensionLocation`](../interfaces/DimensionLocation.md) \| `undefined`

#### Returns

[`DimensionLocation`](../interfaces/DimensionLocation.md) \| `undefined`

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

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`getTags`](Entity.md#gettags)

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

***

### getVelocity()

> **getVelocity**(): [`Vector3`](../interfaces/Vector3.md)

#### Returns

[`Vector3`](../interfaces/Vector3.md)

Returns the current velocity vector of the entity.

#### Remarks

Returns the current velocity vector of the entity.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### Example

```typescript
import { system, DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function getFireworkVelocity(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const fireworkRocket = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.FireworksRocket, targetLocation);

  system.runTimeout(() => {
    const velocity = fireworkRocket.getVelocity();

    log('Velocity of firework is: (x: ' + velocity.x + ', y:' + velocity.y + ', z:' + velocity.z + ')');
  }, 5);
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`getVelocity`](Entity.md#getvelocity)

***

### getViewDirection()

> **getViewDirection**(): [`Vector3`](../interfaces/Vector3.md)

#### Returns

[`Vector3`](../interfaces/Vector3.md)

Returns the current view direction of the entity.

#### Remarks

Returns the current view direction of the entity.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`getViewDirection`](Entity.md#getviewdirection)

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

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`hasComponent`](Entity.md#hascomponent)

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

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`hasTag`](Entity.md#hastag)

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

[InvalidEntityError](InvalidEntityError.md)

#### Example

```typescript
import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';

function tagsQuery(targetLocation: DimensionLocation) {
  const mobs = ['creeper', 'skeleton', 'sheep'];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    const mobTypeId = mobs[i % mobs.length];
    const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
    entity.addTag('mobparty.' + mobTypeId);
  }

  const eqo: EntityQueryOptions = {
    tags: ['mobparty.skeleton'],
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.kill();
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`kill`](Entity.md#kill)

***

### lookAt()

> **lookAt**(`targetLocation`): `void`

#### Parameters

##### targetLocation

[`Vector3`](../interfaces/Vector3.md)

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

[InvalidEntityError](InvalidEntityError.md)

[minecraftcommon.UnsupportedFunctionalityError](../../common/classes/UnsupportedFunctionalityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`lookAt`](Entity.md#lookat)

***

### matches()

> **matches**(`options`): `boolean`

#### Parameters

##### options

[`EntityQueryOptions`](../interfaces/EntityQueryOptions.md)

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

[InvalidEntityError](InvalidEntityError.md)

[minecraftcommon.UnsupportedFunctionalityError](../../common/classes/UnsupportedFunctionalityError.md)

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

[`Entity`](Entity.md).[`matches`](Entity.md#matches)

***

### playAnimation()

> **playAnimation**(`animationName`, `options?`): `void`

#### Parameters

##### animationName

`string`

The animation identifier. e.g. animation.creeper.swelling

##### options?

[`PlayAnimationOptions`](../interfaces/PlayAnimationOptions.md)

Additional options to control the playback and transitions
of the animation.

#### Returns

`void`

#### Remarks

Cause the entity to play the given animation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`playAnimation`](Entity.md#playanimation)

***

### playMusic()

> **playMusic**(`trackId`, `musicOptions?`): `void`

#### Parameters

##### trackId

`string`

Identifier of the music track to play.

##### musicOptions?

[`MusicOptions`](../interfaces/MusicOptions.md)

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

***

### playSound()

> **playSound**(`soundId`, `soundOptions?`): `void`

#### Parameters

##### soundId

`string`

##### soundOptions?

[`PlayerSoundOptions`](../interfaces/PlayerSoundOptions.md)

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
import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, DimensionLocation } from '@minecraft/server';

function playMusicAndSound(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const musicOptions: MusicOptions = {
    fade: 0.5,
    loop: true,
    volume: 1.0,
  };
  world.playMusic('music.menu', musicOptions);

  const worldSoundOptions: WorldSoundOptions = {
    pitch: 0.5,
    volume: 4.0,
  };
  world.playSound('ambient.weather.thunder', targetLocation, worldSoundOptions);

  const playerSoundOptions: PlayerSoundOptions = {
    pitch: 1.0,
    volume: 1.0,
  };

  players[0].playSound('bucket.fill_water', playerSoundOptions);
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

***

### queueMusic()

> **queueMusic**(`trackId`, `musicOptions?`): `void`

#### Parameters

##### trackId

`string`

Identifier of the music track to play.

##### musicOptions?

[`MusicOptions`](../interfaces/MusicOptions.md)

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

[InvalidEntityError](InvalidEntityError.md)

[minecraftcommon.UnsupportedFunctionalityError](../../common/classes/UnsupportedFunctionalityError.md)

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

[`Entity`](Entity.md).[`remove`](Entity.md#remove)

***

### removeEffect()

> **removeEffect**(`effectType`): `boolean`

#### Parameters

##### effectType

`string` \| [`EffectType`](EffectType.md)

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

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`removeEffect`](Entity.md#removeeffect)

***

### removePropertyOverrideForEntity()

> **removePropertyOverrideForEntity**(`targetEntity`, `identifier`): `void`

#### Parameters

##### targetEntity

[`Entity`](Entity.md)

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

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`removeTag`](Entity.md#removetag)

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

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`resetProperty`](Entity.md#resetproperty)

***

### runCommand()

> **runCommand**(`commandString`): [`CommandResult`](CommandResult.md)

#### Parameters

##### commandString

`string`

The command string. Note: This should not include a leading
forward slash.

#### Returns

[`CommandResult`](CommandResult.md)

A command result containing whether the command was
successful.

#### Remarks

Runs a synchronous command on the entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[CommandError](CommandError.md)

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`runCommand`](Entity.md#runcommand)

***

### sendMessage()

> **sendMessage**(`message`): `void`

#### Parameters

##### message

`string` \| [`RawMessage`](../interfaces/RawMessage.md) \| (`string` \| [`RawMessage`](../interfaces/RawMessage.md))[]

The message to be displayed.

#### Returns

`void`

#### Remarks

Sends a message to the player.

#### Throws

This method can throw if the provided [RawMessage](../interfaces/RawMessage.md) is
in an invalid format. For example, if an empty `name` string
is provided to `score`.

[InvalidEntityError](InvalidEntityError.md)

[RawMessageError](RawMessageError.md)

#### Examples

```typescript
import { world, DimensionLocation } from '@minecraft/server';

function nestedTranslation(targetLocation: DimensionLocation) {
  // Displays "Apple or Coal"
  const rawMessage = {
    translate: 'accessibility.list.or.two',
    with: { rawtext: [{ translate: 'item.apple.name' }, { translate: 'item.coal.name' }] },
  };
  world.sendMessage(rawMessage);
}
```

```typescript
import { world, DimensionLocation } from '@minecraft/server';

function scoreWildcard(targetLocation: DimensionLocation) {
  // Displays the player's score for objective "obj". Each player will see their own score.
  const rawMessage = { score: { name: '*', objective: 'obj' } };
  world.sendMessage(rawMessage);
}
```

```typescript
import { world, DimensionLocation } from '@minecraft/server';

function sendBasicMessage(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].sendMessage('Hello World!');
}
```

```typescript
import { world, DimensionLocation } from '@minecraft/server';

function sendPlayerMessages(targetLocation: DimensionLocation) {
  for (const player of world.getAllPlayers()) {
    // Displays "First or Second"
    const rawMessage = { translate: 'accessibility.list.or.two', with: ['First', 'Second'] };
    player.sendMessage(rawMessage);

    // Displays "Hello, world!"
    player.sendMessage('Hello, world!');

    // Displays "Welcome, Amazing Player 1!"
    player.sendMessage({ translate: 'authentication.welcome', with: ['Amazing Player 1'] });

    // Displays the player's score for objective "obj". Each player will see their own score.
    const rawMessageWithScore = { score: { name: '*', objective: 'obj' } };
    player.sendMessage(rawMessageWithScore);

    // Displays "Apple or Coal"
    const rawMessageWithNestedTranslations = {
      translate: 'accessibility.list.or.two',
      with: { rawtext: [{ translate: 'item.apple.name' }, { translate: 'item.coal.name' }] },
    };
    player.sendMessage(rawMessageWithNestedTranslations);
  }
}
```

```typescript
import { world, DimensionLocation } from '@minecraft/server';

function sendTranslatedMessage(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].sendMessage({ translate: 'authentication.welcome', with: ['Amazing Player 1'] });
}
```

#### World Ready

This function can't be called in early-execution mode.

***

### setControlScheme()

> **setControlScheme**(`controlScheme?`): `void`

#### Parameters

##### controlScheme?

[`ControlScheme`](../enumerations/ControlScheme.md)

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

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setDynamicProperties()

> **setDynamicProperties**(`values`): `void`

#### Parameters

##### values

`Record`\<`string`, `boolean` \| `number` \| `string` \| [`Vector3`](../interfaces/Vector3.md) \| `undefined`\>

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

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`setDynamicProperties`](Entity.md#setdynamicproperties)

***

### setDynamicProperty()

> **setDynamicProperty**(`identifier`, `value?`): `void`

#### Parameters

##### identifier

`string`

The property identifier.

##### value?

`string` \| `number` \| `boolean` \| [`Vector3`](../interfaces/Vector3.md)

Data value of the property to set. If the value is null, it
will remove the property instead.

#### Returns

`void`

#### Remarks

Sets a specified property to a value.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`setDynamicProperty`](Entity.md#setdynamicproperty)

***

### setGameMode()

> **setGameMode**(`gameMode?`): `void`

#### Parameters

##### gameMode?

[`GameMode`](../enumerations/GameMode.md)

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

[InvalidEntityError](InvalidEntityError.md)

#### Example

```typescript
import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);

  skelly.setOnFire(20, true);

  system.runTimeout(() => {
    const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
    log(onfire?.onFireTicksRemaining + ' fire ticks remaining.');

    skelly.extinguishFire(true);
    log('Never mind. Fire extinguished.');
  }, 20);
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`setOnFire`](Entity.md#setonfire)

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

[InvalidEntityError](InvalidEntityError.md)

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

[`Entity`](Entity.md).[`setProperty`](Entity.md#setproperty)

***

### setPropertyOverrideForEntity()

> **setPropertyOverrideForEntity**(`targetEntity`, `identifier`, `value`): `void`

#### Parameters

##### targetEntity

[`Entity`](Entity.md)

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

***

### setRotation()

> **setRotation**(`rotation`): `void`

#### Parameters

##### rotation

[`Vector2`](../interfaces/Vector2.md)

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

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`setRotation`](Entity.md#setrotation)

***

### setSpawnPoint()

> **setSpawnPoint**(`spawnPoint?`): `void`

#### Parameters

##### spawnPoint?

[`DimensionLocation`](../interfaces/DimensionLocation.md)

#### Returns

`void`

#### Remarks

Sets the current starting spawn point for this particular
player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

Error

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### spawnParticle()

> **spawnParticle**(`effectName`, `location`, `molangVariables?`): `void`

#### Parameters

##### effectName

`string`

Identifier of the particle to create.

##### location

[`Vector3`](../interfaces/Vector3.md)

The location at which to create the particle emitter.

##### molangVariables?

[`MolangVariableMap`](MolangVariableMap.md)

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

[LocationInUnloadedChunkError](LocationInUnloadedChunkError.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError.md)

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
      blue: Math.random(),
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
Bounds: [0, 32767]

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

***

### teleport()

> **teleport**(`location`, `teleportOptions?`): `void`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3.md)

New location for the entity.

##### teleportOptions?

[`TeleportOptions`](../interfaces/TeleportOptions.md)

Options regarding the teleport operation.

#### Returns

`void`

#### Remarks

Teleports the selected entity to a new location

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

[minecraftcommon.UnsupportedFunctionalityError](../../common/classes/UnsupportedFunctionalityError.md)

#### Examples

```typescript
import { system, DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

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
import { system, DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

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

[`Entity`](Entity.md).[`teleport`](Entity.md#teleport)

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

[InvalidEntityError](InvalidEntityError.md)

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
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function triggerEvent(targetLocation: DimensionLocation) {
  const creeper = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Creeper, targetLocation);

  creeper.triggerEvent('minecraft:start_exploding_forced');
}
```

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`triggerEvent`](Entity.md#triggerevent)

***

### tryTeleport()

> **tryTeleport**(`location`, `teleportOptions?`): `boolean`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3.md)

Location to teleport the entity to.

##### teleportOptions?

[`TeleportOptions`](../interfaces/TeleportOptions.md)

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

[InvalidEntityError](InvalidEntityError.md)

[minecraftcommon.UnsupportedFunctionalityError](../../common/classes/UnsupportedFunctionalityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Entity`](Entity.md).[`tryTeleport`](Entity.md#tryteleport)
