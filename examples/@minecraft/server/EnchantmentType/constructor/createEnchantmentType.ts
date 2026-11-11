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
    maxLevel: 5
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
