[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EnchantmentType

# Class: EnchantmentType

Contains information on a type of enchantment.

## Example

```ts
import { EnchantmentType } from "@minecraft/server";

// EnchantmentType represents a specific type of enchantment
// This is typically used to identify enchantments on items

// Example of working with enchantment types
function demonstrateEnchantmentType() {
   // EnchantmentType is usually obtained from the EnchantmentTypes registry
   // but for demonstration, we show how it would be used

   // Example properties that an EnchantmentType would have:
   const enchantmentExample = {
       id: "minecraft:sharpness",
       maxLevel: 5,
   };

   console.log(`Enchantment ID: ${enchantmentExample.id}`);
   console.log(`Maximum level: ${enchantmentExample.maxLevel}`);

   // EnchantmentType would be used in contexts like:
   // - Checking what enchantments are on an item
   // - Adding enchantments to items
   // - Comparing enchantment types

   return enchantmentExample;
}

// Usage example
const enchantmentInfo = demonstrateEnchantmentType();
```

## Source

```ts
export class EnchantmentType {
    readonly id: string;
    readonly maxLevel: number;
    constructor(enchantmentType: string);
}
```

## Constructors

### Constructor

> **new EnchantmentType**(`enchantmentType`): `EnchantmentType`

#### Parameters

##### enchantmentType

`string`

#### Returns

`EnchantmentType`

#### Throws

This function can throw errors.

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

The name of the enchantment type.

#### World Ready

This property can't be read in early-execution mode.

***

### maxLevel

> `readonly` **maxLevel**: `number`

#### Remarks

The maximum level this type of enchantment can have.

#### World Ready

This property can't be read in early-execution mode.
