[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityNavigationWalkComponent

# Class: EntityNavigationWalkComponent

Allows this entity to generate paths by walking around and
jumping up and down a block like regular mobs.

## Example

```js
import { world, system } from "@minecraft/server";

// This example demonstrates how to work with EntityNavigationWalkComponent
// This component is used by entities that primarily move by walking on the ground

system.run(() => {
   const overworld = world.getDimension("overworld");

   // Spawn a zombie (which uses walk navigation for ground movement)
   const zombie = overworld.spawnEntity("minecraft:zombie", { x: 0, y: 64, z: 0 });

   // Get the navigation.walk component
   const navigationWalk = zombie.getComponent("minecraft:navigation.walk");

   if (navigationWalk) {
       console.log("=== Zombie Walk Navigation Properties ===");

       // Check basic movement capabilities
       console.log(`Can walk: ${navigationWalk.canWalk}`);
       console.log(`Can jump: ${navigationWalk.canJump}`);
       console.log(`Can swim: ${navigationWalk.canSwim}`);
       console.log(`Can float: ${navigationWalk.canFloat}`);
       console.log(`Can sink: ${navigationWalk.canSink}`);

       // Check pathfinding capabilities
       console.log(`Can path from air: ${navigationWalk.canPathFromAir}`);
       console.log(`Can path over water: ${navigationWalk.canPathOverWater}`);
       console.log(`Can path over lava: ${navigationWalk.canPathOverLava}`);

       // Check avoidance behaviors
       console.log(`Avoids water: ${navigationWalk.avoidWater}`);
       console.log(`Avoids sun: ${navigationWalk.avoidSun}`);
       console.log(`Avoids damage blocks: ${navigationWalk.avoidDamageBlocks}`);
       console.log(`Avoids portals: ${navigationWalk.avoidPortals}`);

       // Check door interaction capabilities (important for hostile mobs)
       console.log(`Can open doors: ${navigationWalk.canOpenDoors}`);
       console.log(`Can break doors: ${navigationWalk.canBreakDoors}`);
       console.log(`Can pass doors: ${navigationWalk.canPassDoors}`);
       console.log(`Can open iron doors: ${navigationWalk.canOpenIronDoors}`);

       // Check special abilities
       console.log(`Is amphibious: ${navigationWalk.isAmphibious}`);
       console.log(`Can breach: ${navigationWalk.canBreach}`);
       console.log(`Can walk in lava: ${navigationWalk.canWalkInLava}`);

       console.log(`Component is valid: ${navigationWalk.isValid}`);

       // Send a summary message to the world
       world.sendMessage(`Zombie spawned with walk navigation! It moves on the ground.`);

       // Display what makes walk navigation special
       if (navigationWalk.canBreakDoors) {
           console.log("🧟 This zombie can break down doors on hard difficulty!");
       }

       if (navigationWalk.avoidSun) {
           console.log("☀️ This zombie will try to avoid direct sunlight!");
       }

       // Compare with other navigation types
       console.log("\n=== Navigation Type Comparison ===");
       console.log("Walk navigation is best for:");
       console.log("- Ground-based entities (zombies, skeletons, villagers)");
       console.log("- Entities that need to interact with doors");
       console.log("- Entities that follow terrain closely");
   } else {
       console.log("Failed to get navigation.walk component from zombie");
       world.sendMessage("Could not access zombie walk navigation component");
   }
});
```

## Source

```ts
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.walk';
}
```

## Extends

- [`EntityNavigationComponent`](EntityNavigationComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityNavigationWalkComponent**(): `EntityNavigationWalkComponent`

#### Returns

`EntityNavigationWalkComponent`

#### Overrides

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`constructor`](EntityNavigationComponent-1.md#constructor)

## Properties

### avoidDamageBlocks

> `readonly` **avoidDamageBlocks**: `boolean`

#### Remarks

Tells the pathfinder to avoid blocks that cause damage when
finding a path.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`avoidDamageBlocks`](EntityNavigationComponent-1.md#avoiddamageblocks)

***

### avoidPortals

> `readonly` **avoidPortals**: `boolean`

#### Remarks

Tells the pathfinder to avoid portals (like nether portals)
when finding a path.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`avoidPortals`](EntityNavigationComponent-1.md#avoidportals)

***

### avoidSun

> `readonly` **avoidSun**: `boolean`

#### Remarks

Whether or not the pathfinder should avoid tiles that are
exposed to the sun when creating paths.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`avoidSun`](EntityNavigationComponent-1.md#avoidsun)

***

### avoidWater

> `readonly` **avoidWater**: `boolean`

#### Remarks

Tells the pathfinder to avoid water when creating a path.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`avoidWater`](EntityNavigationComponent-1.md#avoidwater)

***

### canBreach

> `readonly` **canBreach**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can jump out of water
(like a dolphin).

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canBreach`](EntityNavigationComponent-1.md#canbreach)

***

### canBreakDoors

> `readonly` **canBreakDoors**: `boolean`

#### Remarks

Tells the pathfinder that it can path through a closed door
and break it.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canBreakDoors`](EntityNavigationComponent-1.md#canbreakdoors)

***

### canFloat

> `readonly` **canFloat**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can float.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canFloat`](EntityNavigationComponent-1.md#canfloat)

***

### canJump

> `readonly` **canJump**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can jump up blocks.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canJump`](EntityNavigationComponent-1.md#canjump)

***

### canOpenDoors

> `readonly` **canOpenDoors**: `boolean`

#### Remarks

Tells the pathfinder that it can path through a closed door
assuming the AI will open the door.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canOpenDoors`](EntityNavigationComponent-1.md#canopendoors)

***

### canOpenIronDoors

> `readonly` **canOpenIronDoors**: `boolean`

#### Remarks

Tells the pathfinder that it can path through a closed iron
door assuming the AI will open the door.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canOpenIronDoors`](EntityNavigationComponent-1.md#canopenirondoors)

***

### canPassDoors

> `readonly` **canPassDoors**: `boolean`

#### Remarks

Whether a path can be created through a door.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canPassDoors`](EntityNavigationComponent-1.md#canpassdoors)

***

### canPathFromAir

> `readonly` **canPathFromAir**: `boolean`

#### Remarks

Tells the pathfinder that it can start pathing when in the
air.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canPathFromAir`](EntityNavigationComponent-1.md#canpathfromair)

***

### canPathOverLava

> `readonly` **canPathOverLava**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can travel on the
surface of the lava.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canPathOverLava`](EntityNavigationComponent-1.md#canpathoverlava)

***

### canPathOverWater

> `readonly` **canPathOverWater**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can travel on the
surface of the water.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canPathOverWater`](EntityNavigationComponent-1.md#canpathoverwater)

***

### canSink

> `readonly` **canSink**: `boolean`

#### Remarks

Tells the pathfinder whether or not it will be pulled down
by gravity while in water.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canSink`](EntityNavigationComponent-1.md#cansink)

***

### canSwim

> `readonly` **canSwim**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can path anywhere
through water and plays swimming animation along that path.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canSwim`](EntityNavigationComponent-1.md#canswim)

***

### canWalk

> `readonly` **canWalk**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can walk on the
ground outside water.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canWalk`](EntityNavigationComponent-1.md#canwalk)

***

### canWalkInLava

> `readonly` **canWalkInLava**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can travel in lava
like walking on ground.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canWalkInLava`](EntityNavigationComponent-1.md#canwalkinlava)

***

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

The entity that owns this component. The entity will be
undefined if it has been removed.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`entity`](EntityNavigationComponent-1.md#entity)

***

### isAmphibious

> `readonly` **isAmphibious**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can walk on the
ground or go underwater.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`isAmphibious`](EntityNavigationComponent-1.md#isamphibious)

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`isValid`](EntityNavigationComponent-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`typeId`](EntityNavigationComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:navigation.walk"` = `'minecraft:navigation.walk'`
