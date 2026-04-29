[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityItemComponent

# Class: EntityItemComponent

If added onto the entity, this indicates that the entity
represents a free-floating item in the world. Lets you
retrieve the actual item stack contents via the itemStack
property.

## Examples

```typescript
import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";

function testThatEntityIsFeatherItem(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const items = targetLocation.dimension.getEntities({
    location: targetLocation,
    maxDistance: 20,
  });

  for (const item of items) {
    const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;

    if (itemComp) {
      if (itemComp.itemStack.typeId.endsWith("feather")) {
        log("Success! Found a feather", 1);
      }
    }
  }
}
```

```js
import { world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe((event) => {
   const itemEntity = event.entity;
   if (itemEntity.typeId !== "minecraft:item") return;
   const item = itemEntity.getComponent("item");
   item.itemStack.setLore(["Hello Player"]);
});
```

## Source

```ts
export class EntityItemComponent extends EntityComponent {
    private constructor();
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityItemComponent**(): `EntityItemComponent`

#### Returns

`EntityItemComponent`

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

### itemStack

> `readonly` **itemStack**: [`ItemStack`](ItemStack-1.md)

#### Remarks

Item stack represented by this entity in the world.

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

> `readonly` `static` **componentId**: `"minecraft:item"` = `'minecraft:item'`
