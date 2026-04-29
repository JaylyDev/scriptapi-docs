[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ItemEnchantableComponent

# Class: ItemEnchantableComponent

When present on an item, this item can have enchantments
applied to it.

## Source

```ts
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    readonly slots: EnchantmentSlot[];
    static readonly componentId = 'minecraft:enchantable';
    addEnchantment(enchantment: Enchantment): void;
    addEnchantments(enchantments: Enchantment[]): void;
    canAddEnchantment(enchantment: Enchantment): boolean;
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    getEnchantments(): Enchantment[];
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    removeAllEnchantments(): void;
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}
```

## Extends

- [`ItemComponent`](ItemComponent.md)

## Constructors

### Constructor

> `private` **new ItemEnchantableComponent**(): `ItemEnchantableComponent`

#### Returns

`ItemEnchantableComponent`

#### Overrides

[`ItemComponent`](ItemComponent.md).[`constructor`](ItemComponent.md#constructor)

## Properties

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

[`ItemComponent`](ItemComponent.md).[`isValid`](ItemComponent.md#isvalid)

***

### slots

> `readonly` **slots**: [`EnchantmentSlot`](../enumerations/EnchantmentSlot.md)[]

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

[`ItemComponent`](ItemComponent.md).[`typeId`](ItemComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:enchantable"` = `'minecraft:enchantable'`

## Methods

### addEnchantment()

> **addEnchantment**(`enchantment`): `void`

#### Parameters

##### enchantment

[`Enchantment`](../interfaces/Enchantment.md)

The enchantment interface to be added.

#### Returns

`void`

#### Remarks

Adds an enchantment to the item stack.

This function can't be called in restricted-execution mode.

#### Throws

ScriptItemEnchantmentUnknownIdError: Exception thrown if the
enchantment type does not exist.

ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
if the enchantment level is outside the allowable range for
the given enchantment type.

ScriptItemEnchantmentTypeNotCompatibleError: Exception
thrown if the enchantment is not compatible with the item
stack.

[EnchantmentLevelOutOfBoundsError](EnchantmentLevelOutOfBoundsError.md)

[EnchantmentTypeNotCompatibleError](EnchantmentTypeNotCompatibleError.md)

[EnchantmentTypeUnknownIdError](EnchantmentTypeUnknownIdError.md)

Error

#### World Ready

This function can't be called in early-execution mode.

***

### addEnchantments()

> **addEnchantments**(`enchantments`): `void`

#### Parameters

##### enchantments

[`Enchantment`](../interfaces/Enchantment.md)[]

The list of enchantments to be added.

#### Returns

`void`

#### Remarks

Adds a list of enchantments to the item stack.

This function can't be called in restricted-execution mode.

#### Throws

ScriptItemEnchantmentUnknownIdError: Exception thrown if any
enchantment type does not exist.

ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
if any enchantment level is outside the allowable range for
the given enchantment type.

ScriptItemEnchantmentTypeNotCompatibleError: Exception
thrown if any enchantment is not compatible with the item
stack.

[EnchantmentLevelOutOfBoundsError](EnchantmentLevelOutOfBoundsError.md)

[EnchantmentTypeNotCompatibleError](EnchantmentTypeNotCompatibleError.md)

[EnchantmentTypeUnknownIdError](EnchantmentTypeUnknownIdError.md)

Error

#### World Ready

This function can't be called in early-execution mode.

***

### canAddEnchantment()

> **canAddEnchantment**(`enchantment`): `boolean`

#### Parameters

##### enchantment

[`Enchantment`](../interfaces/Enchantment.md)

The enchantment interface to be added.

#### Returns

`boolean`

Returns true if the enchantment can be added to the item
stack.

#### Remarks

Checks whether an enchantment can be added to the item
stack.

#### Throws

ScriptItemEnchantmentUnknownIdError: Exception thrown if the
enchantment type does not exist.

ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
if the enchantment level is outside the allowable range for
the given enchantment type.

[EnchantmentLevelOutOfBoundsError](EnchantmentLevelOutOfBoundsError.md)

[EnchantmentTypeUnknownIdError](EnchantmentTypeUnknownIdError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getEnchantment()

> **getEnchantment**(`enchantmentType`): [`Enchantment`](../interfaces/Enchantment.md) \| `undefined`

#### Parameters

##### enchantmentType

`string` \| [`EnchantmentType`](EnchantmentType.md)

The enchantment type to get.

#### Returns

[`Enchantment`](../interfaces/Enchantment.md) \| `undefined`

Returns the enchantment if it exists on the item stack.

#### Remarks

Gets the enchantment of a given type from the item stack.

#### Throws

ScriptItemEnchantmentUnknownIdError: Exception thrown if the
enchantment type does not exist.

[EnchantmentTypeUnknownIdError](EnchantmentTypeUnknownIdError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getEnchantments()

> **getEnchantments**(): [`Enchantment`](../interfaces/Enchantment.md)[]

#### Returns

[`Enchantment`](../interfaces/Enchantment.md)[]

Returns a list of enchantments on the item stack.

#### Remarks

Gets all enchantments on the item stack.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### hasEnchantment()

> **hasEnchantment**(`enchantmentType`): `boolean`

#### Parameters

##### enchantmentType

`string` \| [`EnchantmentType`](EnchantmentType.md)

The enchantment type to check for.

#### Returns

`boolean`

Returns true if the item stack has the enchantment type.

#### Remarks

Checks whether an item stack has a given enchantment type.

#### Throws

ScriptItemEnchantmentUnknownIdError: Exception thrown if the
enchantment type does not exist.

[EnchantmentTypeUnknownIdError](EnchantmentTypeUnknownIdError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### removeAllEnchantments()

> **removeAllEnchantments**(): `void`

#### Returns

`void`

#### Remarks

Removes all enchantments applied to this item stack.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### removeEnchantment()

> **removeEnchantment**(`enchantmentType`): `void`

#### Parameters

##### enchantmentType

`string` \| [`EnchantmentType`](EnchantmentType.md)

The enchantment type to remove.

#### Returns

`void`

#### Remarks

Removes an enchantment of the given type.

This function can't be called in restricted-execution mode.

#### Throws

ScriptItemEnchantmentUnknownIdError: Exception thrown if the
enchantment type does not exist.

[EnchantmentTypeUnknownIdError](EnchantmentTypeUnknownIdError.md)

Error

#### World Ready

This function can't be called in early-execution mode.
