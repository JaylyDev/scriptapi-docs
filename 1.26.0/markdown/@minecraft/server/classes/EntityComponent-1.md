[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityComponent

# Class: EntityComponent

Base class for downstream entity components.

## Extends

- [`Component`](Component-1.md)

## Extended by

- [`EntityAddRiderComponent`](EntityAddRiderComponent-1.md)
- [`EntityAgeableComponent`](EntityAgeableComponent-1.md)
- [`EntityAttributeComponent`](EntityAttributeComponent-1.md)
- [`EntityBaseMovementComponent`](EntityBaseMovementComponent-1.md)
- [`EntityBreathableComponent`](EntityBreathableComponent-1.md)
- [`EntityCanClimbComponent`](EntityCanClimbComponent-1.md)
- [`EntityCanFlyComponent`](EntityCanFlyComponent-1.md)
- [`EntityCanPowerJumpComponent`](EntityCanPowerJumpComponent-1.md)
- [`EntityColor2Component`](EntityColor2Component-1.md)
- [`EntityColorComponent`](EntityColorComponent-1.md)
- [`EntityEquippableComponent`](EntityEquippableComponent-1.md)
- [`EntityFireImmuneComponent`](EntityFireImmuneComponent-1.md)
- [`EntityFloatsInLiquidComponent`](EntityFloatsInLiquidComponent-1.md)
- [`EntityFlyingSpeedComponent`](EntityFlyingSpeedComponent-1.md)
- [`EntityFrictionModifierComponent`](EntityFrictionModifierComponent-1.md)
- [`EntityHealableComponent`](EntityHealableComponent-1.md)
- [`EntityInventoryComponent`](EntityInventoryComponent-1.md)
- [`EntityIsBabyComponent`](EntityIsBabyComponent-1.md)
- [`EntityIsChargedComponent`](EntityIsChargedComponent-1.md)
- [`EntityIsChestedComponent`](EntityIsChestedComponent-1.md)
- [`EntityIsDyeableComponent`](EntityIsDyeableComponent-1.md)
- [`EntityIsHiddenWhenInvisibleComponent`](EntityIsHiddenWhenInvisibleComponent-1.md)
- [`EntityIsIgnitedComponent`](EntityIsIgnitedComponent-1.md)
- [`EntityIsIllagerCaptainComponent`](EntityIsIllagerCaptainComponent-1.md)
- [`EntityIsSaddledComponent`](EntityIsSaddledComponent-1.md)
- [`EntityIsShakingComponent`](EntityIsShakingComponent-1.md)
- [`EntityIsShearedComponent`](EntityIsShearedComponent-1.md)
- [`EntityIsStackableComponent`](EntityIsStackableComponent-1.md)
- [`EntityIsStunnedComponent`](EntityIsStunnedComponent-1.md)
- [`EntityIsTamedComponent`](EntityIsTamedComponent-1.md)
- [`EntityItemComponent`](EntityItemComponent-1.md)
- [`EntityLeashableComponent`](EntityLeashableComponent-1.md)
- [`EntityMarkVariantComponent`](EntityMarkVariantComponent-1.md)
- [`EntityNavigationComponent`](EntityNavigationComponent-1.md)
- [`EntityNpcComponent`](EntityNpcComponent.md)
- [`EntityOnFireComponent`](EntityOnFireComponent-1.md)
- [`EntityProjectileComponent`](EntityProjectileComponent-1.md)
- [`EntityPushThroughComponent`](EntityPushThroughComponent-1.md)
- [`EntityRideableComponent`](EntityRideableComponent-1.md)
- [`EntityRidingComponent`](EntityRidingComponent-1.md)
- [`EntityScaleComponent`](EntityScaleComponent-1.md)
- [`EntitySkinIdComponent`](EntitySkinIdComponent-1.md)
- [`EntityStrengthComponent`](EntityStrengthComponent-1.md)
- [`EntityTameableComponent`](EntityTameableComponent-1.md)
- [`EntityTameMountComponent`](EntityTameMountComponent-1.md)
- [`EntityTypeFamilyComponent`](EntityTypeFamilyComponent-1.md)
- [`EntityVariantComponent`](EntityVariantComponent-1.md)
- [`EntityWantsJockeyComponent`](EntityWantsJockeyComponent-1.md)
- [`PlayerCursorInventoryComponent`](PlayerCursorInventoryComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityComponent**(): `EntityComponent`

#### Returns

`EntityComponent`

#### Overrides

[`Component`](Component-1.md).[`constructor`](Component-1.md#constructor)

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

[`Component`](Component-1.md).[`isValid`](Component-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Component`](Component-1.md).[`typeId`](Component-1.md#typeid)
