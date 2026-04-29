[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityAddRiderComponent

# Class: EntityAddRiderComponent

When added, this component makes the entity spawn with a
rider of the specified entityType.

## Example

```js
import { world } from "@minecraft/server";

const caveSpider = world.getDimension("overworld").getEntities({ type: "minecraft:cave_spider" })[0];
const addRider = caveSpider.getComponent("addrider");
addRider.entityType;
addRider.spawnEvent;
```

## Source

```ts
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    readonly entityType: string;
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityAddRiderComponent**(): `EntityAddRiderComponent`

#### Returns

`EntityAddRiderComponent`

#### Overrides

[`EntityComponent`](EntityComponent-1.md).[`constructor`](EntityComponent-1.md#constructor)

## Properties

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

### entityType

> `readonly` **entityType**: `string`

#### Remarks

The type of entity that is added as a rider for this entity
when spawned under certain conditions.

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

### spawnEvent

> `readonly` **spawnEvent**: `string`

#### Remarks

Optional spawn event to trigger on the rider when that rider
is spawned for this entity.

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

> `readonly` `static` **componentId**: `"minecraft:addrider"` = `'minecraft:addrider'`
