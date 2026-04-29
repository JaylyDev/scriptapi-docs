[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityTameMountComponent

# Class: EntityTameMountComponent

Contains options for taming a rideable entity based on the
entity that mounts it.

## Source

```ts
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    readonly isTamed: boolean;
    readonly isTamedToPlayer: boolean;
    readonly tamedToPlayer?: Player;
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    tame(showParticles: boolean): void;
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}
```

## Extends

- [`EntityComponent`](EntityComponent.md)

## Constructors

### Constructor

> `private` **new EntityTameMountComponent**(): `EntityTameMountComponent`

#### Returns

`EntityTameMountComponent`

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

### isTamed

> `readonly` **isTamed**: `boolean`

#### Remarks

Returns true if the entity is tamed.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### isTamedToPlayer

> `readonly` **isTamedToPlayer**: `boolean`

#### Remarks

Returns true if the entity is tamed by a player.

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

### tamedToPlayer?

> `readonly` `optional` **tamedToPlayer?**: [`Player`](Player.md)

#### Remarks

Returns the player that has tamed the entity, or 'undefined'
if entity is not tamed by a player.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### tamedToPlayerId?

> `readonly` `optional` **tamedToPlayerId?**: `string`

#### Remarks

Returns the id of player that has tamed the entity, or
'undefined' if entity is not tamed.

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

[`EntityComponent`](EntityComponent.md).[`typeId`](EntityComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:tamemount"` = `'minecraft:tamemount'`

## Methods

### tame()

> **tame**(`showParticles`): `void`

#### Parameters

##### showParticles

`boolean`

Whether to show effect particles when this entity is tamed.

#### Returns

`void`

#### Remarks

Sets this rideable entity as tamed.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### tameToPlayer()

> **tameToPlayer**(`showParticles`, `player`): `boolean`

#### Parameters

##### showParticles

`boolean`

Whether to show effect particles when this entity is tamed.

##### player

[`Player`](Player.md)

The player that this entity should be tamed by.

#### Returns

`boolean`

Returns true if the entity was tamed.

#### Remarks

Sets this rideable entity as tamed by the given player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
