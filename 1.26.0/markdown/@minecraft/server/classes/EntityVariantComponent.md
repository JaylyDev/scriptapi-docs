[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityVariantComponent

# Class: EntityVariantComponent

Used to differentiate the component group of a variant of an
entity from others. (e.g. ocelot, villager).

## Example

```js
import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
   const variant = entity.getComponent("variant");
   if (!variant) continue;
   variant.value;
   variant.isValid;
}
```

## Extends

- [`EntityComponent`](EntityComponent.md)

## Constructors

### Constructor

> `private` **new EntityVariantComponent**(): `EntityVariantComponent`

#### Returns

`EntityVariantComponent`

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

### value

> `readonly` **value**: `number`

#### Remarks

Current value for variant for this entity, as specified via
components.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:variant"` = `'minecraft:variant'`
