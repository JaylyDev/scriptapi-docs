import { EnchantmentTypes } from "@minecraft/server";

// Returns all registered enchantment ids within Minecraft
const allEnchantmentTypes = EnchantmentTypes.getAll();

for (const enchantmentType of allEnchantmentTypes) {
    console.log(`Enchantment Type: ${enchantmentType}`);
}