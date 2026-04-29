[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityHealthComponent

# Class: EntityHealthComponent

Defines the health properties of an entity.

## Examples

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
import { system, world } from "@minecraft/server";

system.runInterval(() => {
   const players = world.getPlayers();
   for (const player of players) {
       const health = player.getComponent("health");
       player.onScreenDisplay.setActionBar(`Health: ${health.currentValue} / ${health.effectiveMax}`);
   }
});
```

## Source

```ts
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:health';
}
```

## Extends

- [`EntityAttributeComponent`](EntityAttributeComponent.md)

## Constructors

### Constructor

> `private` **new EntityHealthComponent**(): `EntityHealthComponent`

#### Returns

`EntityHealthComponent`

#### Overrides

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`constructor`](EntityAttributeComponent.md#constructor)

## Properties

### currentValue

> `readonly` **currentValue**: `number`

#### Remarks

Current value of this attribute for this instance.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`currentValue`](EntityAttributeComponent.md#currentvalue)

***

### defaultValue

> `readonly` **defaultValue**: `number`

#### Remarks

Returns the default defined value for this attribute.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`defaultValue`](EntityAttributeComponent.md#defaultvalue)

***

### effectiveMax

> `readonly` **effectiveMax**: `number`

#### Remarks

Returns the effective max of this attribute given any other
ambient components or factors.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`effectiveMax`](EntityAttributeComponent.md#effectivemax)

***

### effectiveMin

> `readonly` **effectiveMin**: `number`

#### Remarks

Returns the effective min of this attribute given any other
ambient components or factors.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`effectiveMin`](EntityAttributeComponent.md#effectivemin)

***

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

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`entity`](EntityAttributeComponent.md#entity)

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

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`isValid`](EntityAttributeComponent.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`typeId`](EntityAttributeComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:health"` = `'minecraft:health'`

## Methods

### resetToDefaultValue()

> **resetToDefaultValue**(): `void`

#### Returns

`void`

#### Remarks

Resets the current value of this attribute to the defined
default value.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`resetToDefaultValue`](EntityAttributeComponent.md#resettodefaultvalue)

***

### resetToMaxValue()

> **resetToMaxValue**(): `void`

#### Returns

`void`

#### Remarks

Resets the current value of this attribute to the maximum
defined value.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`resetToMaxValue`](EntityAttributeComponent.md#resettomaxvalue)

***

### resetToMinValue()

> **resetToMinValue**(): `void`

#### Returns

`void`

#### Remarks

Resets the current value of this attribute to the minimum
defined value.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`resetToMinValue`](EntityAttributeComponent.md#resettominvalue)

***

### setCurrentValue()

> **setCurrentValue**(`value`): `boolean`

#### Parameters

##### value

`number`

#### Returns

`boolean`

#### Remarks

Sets the current value of this attribute.

This function can't be called in restricted-execution mode.

#### Throws

If the value is out of bounds, an ArgumentOutOfBounds Error
is thrown.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent.md).[`setCurrentValue`](EntityAttributeComponent.md#setcurrentvalue)
