[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityLeashableComponent

# Class: EntityLeashableComponent

Allows the entity to be leashed. Defines the conditions and
events for when an entity is leashed.

## Example

```js
import { world } from "@minecraft/server";

const entity = world.getEntity("-10000000000");
const leashHolderEntity = world.getEntity("-10000000000");
const leashable = entity.getComponent("leashable");
leashable.softDistance;
leashable.leashTo(leashHolderEntity); // Assuming you have an 'leashHolderEntity' instance
leashable.unleash();
leashable.isValid;
```

## Source

```ts
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    readonly canBeStolen: boolean;
    readonly hardDistance: number;
    readonly isLeashed: boolean;
    readonly leashHolder?: Entity;
    readonly leashHolderEntityId?: string;
    readonly maxDistance: number;
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    leashTo(leashHolder: Entity): void;
    unleash(): void;
}
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityLeashableComponent**(): `EntityLeashableComponent`

#### Returns

`EntityLeashableComponent`

#### Overrides

[`EntityComponent`](EntityComponent-1.md).[`constructor`](EntityComponent-1.md#constructor)

## Properties

### canBeStolen

> `readonly` **canBeStolen**: `boolean`

#### Remarks

Returns true if another entity can 'steal' the leashed
entity by attaching their own leash to it.

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

### hardDistance

> `readonly` **hardDistance**: `number`

#### Remarks

Distance in blocks at which the leash stiffens, restricting
movement.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### isLeashed

> `readonly` **isLeashed**: `boolean`

#### Remarks

Returns true if the entity is leashed.

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

### leashHolder?

> `readonly` `optional` **leashHolder?**: [`Entity`](Entity-1.md)

#### Remarks

Entity that is holding the leash.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### leashHolderEntityId?

> `readonly` `optional` **leashHolderEntityId?**: `string`

#### Remarks

Identifier of entity that is holding the leash.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### maxDistance

> `readonly` **maxDistance**: `number`

#### Remarks

Distance in blocks at which the leash breaks.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### softDistance

> `readonly` **softDistance**: `number`

#### Remarks

Distance in blocks at which the 'spring' effect starts
acting to keep this entity close to the entity that leashed
it.

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

> `readonly` `static` **componentId**: `"minecraft:leashable"` = `'minecraft:leashable'`

## Methods

### leashTo()

> **leashTo**(`leashHolder`): `void`

#### Parameters

##### leashHolder

[`Entity`](Entity-1.md)

The entity to leash this entity to.

#### Returns

`void`

#### Remarks

Leashes this entity to another entity.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the entity to leash to is over the max distance,
and if the player is dead or in spectator mode.

#### World Ready

This function can't be called in early-execution mode.

***

### unleash()

> **unleash**(): `void`

#### Returns

`void`

#### Remarks

Unleashes this entity if it is leashed to another entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
