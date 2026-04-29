[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityComponent

# Class: EntityComponent

Base class for downstream entity components.

## Source

```ts
export class EntityComponent extends Component {
    private constructor();
    readonly entity: Entity;
}
```

## Extends

- [`Component`](Component.md)

## Extended by

- [`EntityAddRiderComponent`](EntityAddRiderComponent.md)
- [`EntityAgeableComponent`](EntityAgeableComponent.md)
- [`EntityAttributeComponent`](EntityAttributeComponent.md)
- [`EntityBaseMovementComponent`](EntityBaseMovementComponent.md)
- [`EntityBreathableComponent`](EntityBreathableComponent.md)
- [`EntityCanClimbComponent`](EntityCanClimbComponent.md)
- [`EntityCanFlyComponent`](EntityCanFlyComponent.md)
- [`EntityCanPowerJumpComponent`](EntityCanPowerJumpComponent.md)
- [`EntityColor2Component`](EntityColor2Component.md)
- [`EntityColorComponent`](EntityColorComponent.md)
- [`EntityEquippableComponent`](EntityEquippableComponent.md)
- [`EntityFireImmuneComponent`](EntityFireImmuneComponent.md)
- [`EntityFloatsInLiquidComponent`](EntityFloatsInLiquidComponent.md)
- [`EntityFlyingSpeedComponent`](EntityFlyingSpeedComponent.md)
- [`EntityFrictionModifierComponent`](EntityFrictionModifierComponent.md)
- [`EntityHealableComponent`](EntityHealableComponent.md)
- [`EntityInventoryComponent`](EntityInventoryComponent.md)
- [`EntityIsBabyComponent`](EntityIsBabyComponent.md)
- [`EntityIsChargedComponent`](EntityIsChargedComponent.md)
- [`EntityIsChestedComponent`](EntityIsChestedComponent.md)
- [`EntityIsDyeableComponent`](EntityIsDyeableComponent.md)
- [`EntityIsHiddenWhenInvisibleComponent`](EntityIsHiddenWhenInvisibleComponent.md)
- [`EntityIsIgnitedComponent`](EntityIsIgnitedComponent.md)
- [`EntityIsIllagerCaptainComponent`](EntityIsIllagerCaptainComponent.md)
- [`EntityIsSaddledComponent`](EntityIsSaddledComponent.md)
- [`EntityIsShakingComponent`](EntityIsShakingComponent.md)
- [`EntityIsShearedComponent`](EntityIsShearedComponent.md)
- [`EntityIsStackableComponent`](EntityIsStackableComponent.md)
- [`EntityIsStunnedComponent`](EntityIsStunnedComponent.md)
- [`EntityIsTamedComponent`](EntityIsTamedComponent.md)
- [`EntityItemComponent`](EntityItemComponent.md)
- [`EntityLeashableComponent`](EntityLeashableComponent.md)
- [`EntityMarkVariantComponent`](EntityMarkVariantComponent.md)
- [`EntityNavigationComponent`](EntityNavigationComponent.md)
- [`EntityOnFireComponent`](EntityOnFireComponent.md)
- [`EntityProjectileComponent`](EntityProjectileComponent.md)
- [`EntityPushThroughComponent`](EntityPushThroughComponent.md)
- [`EntityRideableComponent`](EntityRideableComponent.md)
- [`EntityRidingComponent`](EntityRidingComponent.md)
- [`EntityScaleComponent`](EntityScaleComponent.md)
- [`EntitySkinIdComponent`](EntitySkinIdComponent.md)
- [`EntityStrengthComponent`](EntityStrengthComponent.md)
- [`EntityTameableComponent`](EntityTameableComponent.md)
- [`EntityTameMountComponent`](EntityTameMountComponent.md)
- [`EntityTypeFamilyComponent`](EntityTypeFamilyComponent.md)
- [`EntityVariantComponent`](EntityVariantComponent.md)
- [`EntityWantsJockeyComponent`](EntityWantsJockeyComponent.md)
- [`PlayerCursorInventoryComponent`](PlayerCursorInventoryComponent.md)

## Constructors

### Constructor

> `private` **new EntityComponent**(): `EntityComponent`

#### Returns

`EntityComponent`

#### Overrides

[`Component`](Component.md).[`constructor`](Component.md#constructor)

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

[`Component`](Component.md).[`isValid`](Component.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Component`](Component.md).[`typeId`](Component.md#typeid)
