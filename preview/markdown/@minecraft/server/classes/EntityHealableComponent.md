[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityHealableComponent

# Class: EntityHealableComponent

Defines the interactions with this entity for healing it.

## Example

```js
import { world } from "@minecraft/server";

const entity = world.getDimension("overworld").getEntities({ type: "minecraft:wolf" })[0];
const healable = entity.getComponent("healable");
healable.forceUse;
healable.getFeedItems();
healable.isValid;
```

## Source

```ts
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    getFeedItems(): FeedItem[];
}
```

## Extends

- [`EntityComponent`](EntityComponent.md)

## Constructors

### Constructor

> `private` **new EntityHealableComponent**(): `EntityHealableComponent`

#### Returns

`EntityHealableComponent`

#### Overrides

[`EntityComponent`](EntityComponent.md).[`constructor`](EntityComponent.md#constructor)

## Properties

### entity

> `readonly` **entity**: [`Entity`](Entity.md)

#### Remarks

The entity that owns this component. The entity will be
undefined if it has been removed.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent.md).[`entity`](EntityComponent.md#entity)

***

### forceUse

> `readonly` **forceUse**: `boolean`

#### Remarks

Determines if an item can be used regardless of the entity
being at full health.

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

[`EntityComponent`](EntityComponent.md).[`isValid`](EntityComponent.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent.md).[`typeId`](EntityComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:healable"` = `'minecraft:healable'`

## Methods

### getFeedItems()

> **getFeedItems**(): [`FeedItem`](FeedItem.md)[]

#### Returns

[`FeedItem`](FeedItem.md)[]

Entity that this component is associated with.

#### Remarks

A set of items that can specifically heal this entity.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
