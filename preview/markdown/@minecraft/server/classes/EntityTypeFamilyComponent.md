[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityTypeFamilyComponent

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

- [`EntityComponent`](EntityComponent.md)

## Constructors

### Constructor

> `private` **new EntityTypeFamilyComponent**(): `EntityTypeFamilyComponent`

#### Returns

`EntityTypeFamilyComponent`

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
