[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / WorldBeforeEvents

# Class: WorldBeforeEvents

A set of events that fire before an actual action occurs. In
most cases, you can potentially cancel or modify the
impending event. Note that in before events any APIs that
modify gameplay state will not function and will throw an
error. (e.g., dimension.spawnEntity)

## Source

```ts
export class WorldBeforeEvents {
    private constructor();
    readonly effectAdd: EffectAddBeforeEventSignal;
    readonly entityHeal: EntityHealBeforeEventSignal;
    readonly entityHurt: EntityHurtBeforeEventSignal;
    readonly entityItemPickup: EntityItemPickupBeforeEventSignal;
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    readonly explosion: ExplosionBeforeEventSignal;
    readonly itemUse: ItemUseBeforeEventSignal;
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    readonly weatherChange: WeatherChangeBeforeEventSignal;
}
```

## Constructors

### Constructor

> `private` **new WorldBeforeEvents**(): `WorldBeforeEvents`

#### Returns

`WorldBeforeEvents`

## Properties

### effectAdd

> `readonly` **effectAdd**: [`EffectAddBeforeEventSignal`](EffectAddBeforeEventSignal.md)

#### Remarks

This event is triggered after an event has been added to an
entity.

This property can be read in early-execution mode.

#### Example

```js
import { Player, world } from "@minecraft/server";

world.beforeEvents.effectAdd.subscribe((event) => {
if (event.entity instanceof Player) {
   // Cancel any effects that apply to players.
   event.cancel = true;

   // Message player that effect is not added
   event.entity.sendMessage("You can't get the following effect:");
   // For some reason, the effect type is translated based on server's language.
   event.entity.sendMessage("Effect Type: " + event.effectType);
   event.entity.sendMessage("Effect Duration: " + event.duration);
}
});
```

***

### entityHeal

> `readonly` **entityHeal**: [`EntityHealBeforeEventSignal`](EntityHealBeforeEventSignal.md)

#### Remarks

This property can be read in early-execution mode.

***

### entityHurt

> `readonly` **entityHurt**: [`EntityHurtBeforeEventSignal`](EntityHurtBeforeEventSignal.md)

#### Remarks

This property can be read in early-execution mode.

***

### entityItemPickup

> `readonly` **entityItemPickup**: [`EntityItemPickupBeforeEventSignal`](EntityItemPickupBeforeEventSignal.md)

#### Remarks

This event fires before an entity picks up an item.

This property can be read in early-execution mode.

***

### entityRemove

> `readonly` **entityRemove**: [`EntityRemoveBeforeEventSignal`](EntityRemoveBeforeEventSignal.md)

#### Remarks

Fires before an entity is removed from the world (for
example, unloaded or removed after being killed.)

This property can be read in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

// Subscribe to entityRemove event
world.beforeEvents.entityRemove.subscribe((data) => {
world.sendMessage("Entity Removed: " + data.removedEntity.typeId);
// Spawn lightning when an entity is removed.
data.removedEntity.runCommand("summon lightning_bolt ~ ~10 ~");
});
```

***

### explosion

> `readonly` **explosion**: [`ExplosionBeforeEventSignal`](ExplosionBeforeEventSignal.md)

#### Remarks

This event is fired after an explosion occurs.

This property can be read in early-execution mode.

#### Examples

```ts
import { world } from "@minecraft/server";

world.beforeEvents.explosion.subscribe((data) => {
world.sendMessage("Explosion at " + data.dimension.id + " dimension.");
data.cancel = true;
});
```

```ts
import { world } from "@minecraft/server";

world.beforeEvents.explosion.subscribe((data) => {
// Force the explosion to not destroy blocks, but it can impact entities still.
data.setImpactedBlocks([]);
});
```

***

### itemUse

> `readonly` **itemUse**: [`ItemUseBeforeEventSignal`](ItemUseBeforeEventSignal.md)

#### Remarks

This event fires when an item is successfully used by a
player.

This property can be read in early-execution mode.

***

### playerBreakBlock

> `readonly` **playerBreakBlock**: [`PlayerBreakBlockBeforeEventSignal`](PlayerBreakBlockBeforeEventSignal.md)

#### Remarks

This event fires before a block is broken by a player.

This property can be read in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Disable the ability of a player from breaking a block.
world.beforeEvents.playerBreakBlock.subscribe((event) => {
event.cancel = true;
event.player.sendMessage("You can't break blocks!");
});
```

***

### playerGameModeChange

> `readonly` **playerGameModeChange**: [`PlayerGameModeChangeBeforeEventSignal`](PlayerGameModeChangeBeforeEventSignal.md)

#### Remarks

This property can be read in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Disable the ability of any players without admin tag from changing gamemode.
world.beforeEvents.playerGameModeChange.subscribe((event) => {
if (!event.player.hasTag("admin")) {
   event.cancel = true;
   event.player.sendMessage("You can't change gamemode!");
}
});
```

***

### playerInteractWithBlock

> `readonly` **playerInteractWithBlock**: [`PlayerInteractWithBlockBeforeEventSignal`](PlayerInteractWithBlockBeforeEventSignal.md)

#### Remarks

Fires before a player interacts with a block.

This property can be read in early-execution mode.

#### Example

```ts
import { system, world } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Subscribe to playerInteractWithBlock event to detect if a player interacts with a block
world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
// Check if player interacts with a crafter whilst holding diamonds
if (
   event.block.typeId === "minecraft:crafter" &&
   event.itemStack &&
   event.itemStack.typeId === "minecraft:diamond"
) {
   // Cancel interaction
   event.cancel = true;

   // Use system.run to queue for later in the current tick to bypass read-only state
   system.run(() => {
       // Show the player a message form
       new MessageFormData().title("Crafter").body("This is a crafter!").button1("Close").show(event.player);
   });
}
});

// Please note that playerInteractWithBlock does not fire when player interacts with air.
```

***

### playerInteractWithEntity

> `readonly` **playerInteractWithEntity**: [`PlayerInteractWithEntityBeforeEventSignal`](PlayerInteractWithEntityBeforeEventSignal.md)

#### Remarks

Fires before a player interacts with an entity.

This property can be read in early-execution mode.

#### Example

```ts
import { system, world } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

// Subscribe to playerInteractWithEntity event to detect if a player interacts with a block
world.beforeEvents.playerInteractWithEntity.subscribe((event) => {
// Check if player interacts with a villager whilst holding diamonds
if (event.target.typeId === "minecraft:villager" || event.target.typeId === "minecraft:villager_v2") {
   // Cancel interaction
   event.cancel = true;

   // Use system.run to queue for later in the current tick to bypass read-only state
   system.run(() => {
       // Show the player a message form
       new MessageFormData().title("villager").body("This is a villager!").button1("Close").show(event.player);
   });
}
});
```

***

### playerLeave

> `readonly` **playerLeave**: [`PlayerLeaveBeforeEventSignal`](PlayerLeaveBeforeEventSignal.md)

#### Remarks

Fires when a player leaves the game.

This property can be read in early-execution mode.

***

### weatherChange

> `readonly` **weatherChange**: [`WeatherChangeBeforeEventSignal`](WeatherChangeBeforeEventSignal.md)

#### Remarks

This property can be read in early-execution mode.
