import { EffectTypes } from "@minecraft/server";

// Returns all registered effect ids within Minecraft
const allEffectTypes = EffectTypes.getAll();

for (const effectType of allEffectTypes) {
    console.log(`Effect Type: ${effectType}`);
}