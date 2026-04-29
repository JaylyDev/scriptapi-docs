[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityRideableComponent

# Class: EntityRideableComponent

When added, this component adds the capability that an
entity can be ridden by another entity.

## Examples

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

```js
import { world } from "@minecraft/server";

const boat = world.getDimension("overworld").spawnEntity("minecraft:boat", { x: 0, y: 5, z: 0 });
const riderEntity = world.getAllPlayers()[0]; // Assuming you have an 'riderEntity' instance
const rideable = boat.getComponent("rideable");
rideable.controllingSeat;
rideable.crouchingSkipInteract;
rideable.interactText;
rideable.pullInEntities;
rideable.riderCanInteract;
rideable.seatCount;
rideable.addRider(riderEntity);
rideable.ejectRider(riderEntity);
rideable.ejectRiders();
rideable.getFamilyTypes();
rideable.getRiders();
rideable.getSeats();
rideable.isValid;
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityRideableComponent**(): `EntityRideableComponent`

#### Returns

`EntityRideableComponent`

#### Overrides

[`EntityComponent`](EntityComponent-1.md).[`constructor`](EntityComponent-1.md#constructor)

## Properties

### controllingSeat

> `readonly` **controllingSeat**: `number`

#### Remarks

Zero-based index of the seat that can used to control this
entity.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### crouchingSkipInteract

> `readonly` **crouchingSkipInteract**: `boolean`

#### Remarks

Determines whether interactions are not supported if the
entity is crouching.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

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

[`EntityComponent`](EntityComponent-1.md).[`entity`](EntityComponent-1.md#entity)

***

### interactText

> `readonly` **interactText**: `string`

#### Remarks

Set of text that should be displayed when a player is
looking to ride on this entity (commonly with touch-screen
controls).

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

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

[`EntityComponent`](EntityComponent-1.md).[`isValid`](EntityComponent-1.md#isvalid)

***

### passengerMaxWidth

> `readonly` **passengerMaxWidth**: `number`

#### Remarks

The max width a mob can be to be a passenger.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### pullInEntities

> `readonly` **pullInEntities**: `boolean`

#### Remarks

If true, this entity will pull in entities that are in the
correct family_types into any available seat.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### riderCanInteract

> `readonly` **riderCanInteract**: `boolean`

#### Remarks

If true, this entity will be picked when looked at by the
rider.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### seatCount

> `readonly` **seatCount**: `number`

#### Remarks

Number of seats for riders defined for this entity.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent-1.md).[`typeId`](EntityComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:rideable"` = `'minecraft:rideable'`

## Methods

### addRider()

> **addRider**(`rider`): `boolean`

#### Parameters

##### rider

[`Entity`](Entity-1.md)

Entity that will become the rider of this entity.

#### Returns

`boolean`

True if the rider entity was successfully added.

#### Remarks

Adds an entity to this entity as a rider.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### Example

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

#### World Ready

This function can't be called in early-execution mode.

***

### ejectRider()

> **ejectRider**(`rider`): `void`

#### Parameters

##### rider

[`Entity`](Entity-1.md)

Entity that should be ejected from this entity.

#### Returns

`void`

#### Remarks

Ejects the specified rider of this entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### ejectRiders()

> **ejectRiders**(): `void`

#### Returns

`void`

#### Remarks

Ejects all riders of this entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getFamilyTypes()

> **getFamilyTypes**(): `string`[]

#### Returns

`string`[]

#### Remarks

A string-list of entity types that this entity can support
as riders.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getRiders()

> **getRiders**(): [`Entity`](Entity-1.md)[]

#### Returns

[`Entity`](Entity-1.md)[]

#### Remarks

Gets a list of the all the entities currently riding this
entity.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getSeats()

> **getSeats**(): [`Seat`](Seat-1.md)[]

#### Returns

[`Seat`](Seat-1.md)[]

#### Remarks

Gets a list of positions and number of riders for each
position for entities riding this entity.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
