[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityExhaustionComponent

# Class: EntityExhaustionComponent

Defines the interactions with this entity for Exhaustion.
Wraps the `minecraft.player.exhaustion` attribute.

## Example

```ts
import {
   world,
   EntityExhaustionComponent,
   EntityHungerComponent,
   EntitySaturationComponent,
   Player,
   system,
} from "@minecraft/server";

// Example: Create a feeding function that manages all nutrition aspects
function feedPlayer(player: Player) {
   const exhaustionComponent = player.getComponent("minecraft:player.exhaustion");
   const hungerComponent = player.getComponent("minecraft:player.hunger");
   const saturationComponent = player.getComponent("minecraft:player.saturation");

   if (hungerComponent && saturationComponent && exhaustionComponent) {
       // Restore hunger
       hungerComponent.resetToMaxValue();

       // Restore saturation
       saturationComponent.resetToMaxValue();

       // Reset exhaustion
       exhaustionComponent.resetToMinValue();

       console.log(`Fed ${player.name} - restored hunger, saturation, and reset exhaustion`);
   }
}

// Example: Monitor player nutrition status
function monitorPlayerNutrition() {
   const players = world.getAllPlayers();

   players.forEach((player) => {
       const hungerComponent = player.getComponent("minecraft:player.hunger");
       const saturationComponent = player.getComponent("minecraft:player.saturation");
       const exhaustionComponent = player.getComponent("minecraft:player.exhaustion");

       if (hungerComponent && saturationComponent && exhaustionComponent) {
           const hungerPercent = (hungerComponent.currentValue / hungerComponent.defaultValue) * 100;
           const saturationPercent = (saturationComponent.currentValue / saturationComponent.defaultValue) * 100;
           const exhaustionPercent = (exhaustionComponent.currentValue / exhaustionComponent.defaultValue) * 100;

           // Warn if nutrition levels are low
           if (hungerPercent < 30) {
               console.log(`Warning: ${player.name} has low hunger (${hungerPercent.toFixed(1)}%)`);
           }

           if (saturationPercent < 20) {
               console.log(`Warning: ${player.name} has low saturation (${saturationPercent.toFixed(1)}%)`);
           }

           if (exhaustionPercent > 80) {
               console.log(`Warning: ${player.name} has high exhaustion (${exhaustionPercent.toFixed(1)}%)`);
               // Auto-feed if exhaustion is too high
               feedPlayer(player);
           }
       }
   });
}

// Monitor nutrition every 30 seconds
system.runInterval(() => {
   monitorPlayerNutrition();
}, 600); // 600 ticks = 30 seconds
```

## Extends

- [`EntityAttributeComponent`](EntityAttributeComponent.md)

## Constructors

### Constructor

> `private` **new EntityExhaustionComponent**(): `EntityExhaustionComponent`

#### Returns

`EntityExhaustionComponent`

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

> `readonly` `static` **componentId**: `"minecraft:player.exhaustion"` = `'minecraft:player.exhaustion'`

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
