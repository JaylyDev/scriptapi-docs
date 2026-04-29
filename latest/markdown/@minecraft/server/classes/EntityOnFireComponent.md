[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityOnFireComponent

# Class: EntityOnFireComponent

When present on an entity, this entity is on fire.

## Example

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

## Source

```ts
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    readonly onFireTicksRemaining: number;
    static readonly componentId = 'minecraft:onfire';
}
```

## Extends

- [`EntityComponent`](EntityComponent.md)

## Constructors

### Constructor

> `private` **new EntityOnFireComponent**(): `EntityOnFireComponent`

#### Returns

`EntityOnFireComponent`

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

### onFireTicksRemaining

> `readonly` **onFireTicksRemaining**: `number`

#### Remarks

The number of ticks remaining before the fire goes out.

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

[`EntityComponent`](EntityComponent.md).[`typeId`](EntityComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:onfire"` = `'minecraft:onfire'`
