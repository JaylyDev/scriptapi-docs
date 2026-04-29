[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityComponentTypes

# Enumeration: EntityComponentTypes

The types of entity components that are accessible via
function Entity.getComponent.

## Enumeration Members

### AddRider

> **AddRider**: `"minecraft:addrider"`

#### Remarks

When added, this component makes the entity spawn with a
rider of the specified entityType.

***

### Ageable

> **Ageable**: `"minecraft:ageable"`

#### Remarks

Adds a timer for the entity to grow up. It can be
accelerated by giving the entity the items it likes as
defined by feedItems.

***

### Breathable

> **Breathable**: `"minecraft:breathable"`

#### Remarks

Defines what blocks this entity can breathe in and gives
them the ability to suffocate.

***

### CanClimb

> **CanClimb**: `"minecraft:can_climb"`

#### Remarks

When added, this component signifies that the entity can
climb up ladders.

***

### CanFly

> **CanFly**: `"minecraft:can_fly"`

#### Remarks

When added, this component signifies that the entity can
fly, and the pathfinder won't be restricted to paths where a
solid block is required underneath it.

***

### CanPowerJump

> **CanPowerJump**: `"minecraft:can_power_jump"`

#### Remarks

When added, this component signifies that the entity can
power jump like the horse does within Minecraft.

***

### Color

> **Color**: `"minecraft:color"`

#### Remarks

Defines the entity's color. Only works on certain entities
that have predefined color values (e.g., sheep, llama,
shulker).

***

### Color2

> **Color2**: `"minecraft:color2"`

#### Remarks

Defines the entity's secondary color. Only works on certain
entities that have predefined secondary color values (e.g.,
tropical fish).

***

### CursorInventory

> **CursorInventory**: `"minecraft:cursor_inventory"`

***

### Equippable

> **Equippable**: `"minecraft:equippable"`

#### Remarks

Provides access to a mob's equipment slots. This component
exists for all mob entities.

***

### Exhaustion

> **Exhaustion**: `"minecraft:player.exhaustion"`

#### Remarks

Use this component to read the exhaustion of a player. This
is only available on players.

***

### FireImmune

> **FireImmune**: `"minecraft:fire_immune"`

#### Remarks

When added, this component signifies that this entity
doesn't take damage from fire.

***

### FloatsInLiquid

> **FloatsInLiquid**: `"minecraft:floats_in_liquid"`

#### Remarks

When added, this component signifies that this entity can
float in liquid blocks.

***

### FlyingSpeed

> **FlyingSpeed**: `"minecraft:flying_speed"`

#### Remarks

Represents the flying speed of an entity.

***

### FrictionModifier

> **FrictionModifier**: `"minecraft:friction_modifier"`

#### Remarks

Defines how much friction affects this entity.

***

### Healable

> **Healable**: `"minecraft:healable"`

#### Remarks

Defines the interactions with this entity for healing it.

***

### Health

> **Health**: `"minecraft:health"`

#### Remarks

Defines the health properties of an entity.

***

### Hunger

> **Hunger**: `"minecraft:player.hunger"`

#### Remarks

Use this component to read the hunger of a player. This is
only available on players.

***

### Inventory

> **Inventory**: `"minecraft:inventory"`

#### Remarks

Defines this entity's inventory properties.

***

### IsBaby

> **IsBaby**: `"minecraft:is_baby"`

#### Remarks

When added, this component signifies that this entity is a
baby.

***

### IsCharged

> **IsCharged**: `"minecraft:is_charged"`

#### Remarks

When added, this component signifies that this entity is
charged.

***

### IsChested

> **IsChested**: `"minecraft:is_chested"`

#### Remarks

When added, this component signifies that this entity is
currently carrying a chest.

***

### IsDyeable

> **IsDyeable**: `"minecraft:is_dyeable"`

#### Remarks

When added, this component signifies that dyes can be used
on this entity to change its color.

***

### IsHiddenWhenInvisible

> **IsHiddenWhenInvisible**: `"minecraft:is_hidden_when_invisible"`

#### Remarks

When added, this component signifies that this entity can
hide from hostile mobs while invisible.

***

### IsIgnited

> **IsIgnited**: `"minecraft:is_ignited"`

#### Remarks

When added, this component signifies that this entity this
currently on fire.

***

### IsIllagerCaptain

> **IsIllagerCaptain**: `"minecraft:is_illager_captain"`

#### Remarks

When added, this component signifies that this entity is an
illager captain.

***

### IsSaddled

> **IsSaddled**: `"minecraft:is_saddled"`

#### Remarks

When added, this component signifies that this entity is
currently saddled.

***

### IsShaking

> **IsShaking**: `"minecraft:is_shaking"`

#### Remarks

When added, this component signifies that this entity is
currently shaking.

***

### IsSheared

> **IsSheared**: `"minecraft:is_sheared"`

#### Remarks

When added, this component signifies that this entity is
currently sheared.

***

### IsStackable

> **IsStackable**: `"minecraft:is_stackable"`

#### Remarks

When added, this component signifies that this entity can be
stacked.

***

### IsStunned

> **IsStunned**: `"minecraft:is_stunned"`

#### Remarks

When added, this component signifies that this entity is
currently stunned.

***

### IsTamed

> **IsTamed**: `"minecraft:is_tamed"`

#### Remarks

When added, this component signifies that this entity is
currently tamed.

***

### Item

> **Item**: `"minecraft:item"`

#### Remarks

If added onto the entity, this indicates that the entity
represents a free-floating item in the world. Lets you
retrieve the actual item stack contents via the itemStack
property.

***

### LavaMovement

> **LavaMovement**: `"minecraft:lava_movement"`

#### Remarks

Defines the base movement speed in lava of this entity.

***

### Leashable

> **Leashable**: `"minecraft:leashable"`

#### Remarks

Allows this entity to be leashed and defines the conditions
and events for this entity when is leashed.

***

### MarkVariant

> **MarkVariant**: `"minecraft:mark_variant"`

#### Remarks

When added, this component signifies that this entity
contains an additional variant value. Can be used to further
differentiate variants.

***

### Movement

> **Movement**: `"minecraft:movement"`

#### Remarks

Defines the general movement speed of this entity.

***

### MovementAmphibious

> **MovementAmphibious**: `"minecraft:movement.amphibious"`

#### Remarks

When added, this movement control allows the mob to swim in
water and walk on land.

***

### MovementBasic

> **MovementBasic**: `"minecraft:movement.basic"`

#### Remarks

When added, this component allows the movement of an entity.

***

### MovementFly

> **MovementFly**: `"minecraft:movement.fly"`

#### Remarks

When added, this move control causes the mob to fly.

***

### MovementGeneric

> **MovementGeneric**: `"minecraft:movement.generic"`

#### Remarks

When added, this move control allows a mob to fly, swim,
climb, etc.

***

### MovementGlide

> **MovementGlide**: `"minecraft:movement.glide"`

#### Remarks

When added, this movement control allows the mob to glide.

***

### MovementHover

> **MovementHover**: `"minecraft:movement.hover"`

#### Remarks

When added, this move control causes the mob to hover.

***

### MovementJump

> **MovementJump**: `"minecraft:movement.jump"`

#### Remarks

Move control that causes the mob to jump as it moves with a
specified delay between jumps.

***

### MovementSkip

> **MovementSkip**: `"minecraft:movement.skip"`

#### Remarks

When added, this move control causes the mob to hop as it
moves.

***

### MovementSway

> **MovementSway**: `"minecraft:movement.sway"`

#### Remarks

When added, this move control causes the mob to sway side to
side giving the impression it is swimming.

***

### NavigationClimb

> **NavigationClimb**: `"minecraft:navigation.climb"`

#### Remarks

Allows this entity to generate paths that include vertical
walls (for example, like Minecraft spiders do.)

***

### NavigationFloat

> **NavigationFloat**: `"minecraft:navigation.float"`

#### Remarks

Allows this entity to generate paths by flying around the
air like the regular Ghast.

***

### NavigationFly

> **NavigationFly**: `"minecraft:navigation.fly"`

#### Remarks

Allows this entity to generate paths in the air (for
example, like Minecraft parrots do.)

***

### NavigationGeneric

> **NavigationGeneric**: `"minecraft:navigation.generic"`

#### Remarks

Allows this entity to generate paths by walking, swimming,
flying and/or climbing around and jumping up and down a
block.

***

### NavigationHover

> **NavigationHover**: `"minecraft:navigation.hover"`

#### Remarks

Allows this entity to generate paths in the air (for
example, like the Minecraft Bees do.) Keeps them from
falling out of the skies and doing predictive movement.

***

### NavigationWalk

> **NavigationWalk**: `"minecraft:navigation.walk"`

#### Remarks

Allows this entity to generate paths by walking around and
jumping up and down a block like regular mobs.

***

### OnFire

> **OnFire**: `"minecraft:onfire"`

#### Remarks

When present on an entity, this entity is on fire.

***

### Projectile

> **Projectile**: `"minecraft:projectile"`

#### Remarks

The projectile component controls the properties of a
projectile entity and allows it to be shot in a given
direction. This component is present when the entity has the
minecraft:projectile component.

***

### PushThrough

> **PushThrough**: `"minecraft:push_through"`

#### Remarks

Sets the distance through which the entity can push through.

***

### Rideable

> **Rideable**: `"minecraft:rideable"`

#### Remarks

When added, this component adds the capability that an
entity can be ridden by another entity.

***

### Riding

> **Riding**: `"minecraft:riding"`

#### Remarks

This component is added to any entity when it is riding
another entity.

***

### Saturation

> **Saturation**: `"minecraft:player.saturation"`

#### Remarks

Use this component to read the saturation of a player. This
is only available on players.

***

### Scale

> **Scale**: `"minecraft:scale"`

#### Remarks

Sets the entity's visual size.

***

### SkinId

> **SkinId**: `"minecraft:skin_id"`

#### Remarks

Skin Id value. Can be used to differentiate skins, such as
base skins for villagers.

***

### Strength

> **Strength**: `"minecraft:strength"`

#### Remarks

Defines the entity's strength to carry items.

***

### Tameable

> **Tameable**: `"minecraft:tameable"`

#### Remarks

Defines the rules for an entity to be tamed by the player.

***

### TameMount

> **TameMount**: `"minecraft:tamemount"`

#### Remarks

Contains options for taming a rideable entity based on the
entity that mounts it.

***

### TypeFamily

> **TypeFamily**: `"minecraft:type_family"`

#### Remarks

Used to determine the type families the entity belongs to.

***

### UnderwaterMovement

> **UnderwaterMovement**: `"minecraft:underwater_movement"`

#### Remarks

Defines the general movement speed underwater of this
entity.

***

### Variant

> **Variant**: `"minecraft:variant"`

#### Remarks

Used to differentiate the component group of a variant of an
entity from others. (e.g. ocelot, villager).

***

### WantsJockey

> **WantsJockey**: `"minecraft:wants_jockey"`

#### Remarks

When added, this component signifies that this entity wants
to become a jockey.
