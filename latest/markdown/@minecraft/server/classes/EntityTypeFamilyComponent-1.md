[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityTypeFamilyComponent

# Class: EntityTypeFamilyComponent

Base class for downstream entity components.

## Source

```ts
export class EntityComponent extends Component {
    private constructor();
    readonly entity: Entity;
}
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityTypeFamilyComponent**(): `EntityTypeFamilyComponent`

#### Returns

`EntityTypeFamilyComponent`

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

> `readonly` `static` **componentId**: `"minecraft:type_family"` = `'minecraft:type_family'`

## Methods

### getTypeFamilies()

> **getTypeFamilies**(): `string`[]

#### Returns

`string`[]

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### hasTypeFamily()

> **hasTypeFamily**(`typeFamily`): `boolean`

#### Parameters

##### typeFamily

`string`

#### Returns

`boolean`

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
