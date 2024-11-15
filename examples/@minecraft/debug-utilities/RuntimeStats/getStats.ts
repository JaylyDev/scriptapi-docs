import { collectRuntimeStats } from "@minecraft/debug-utilities";

// Script Runtime Stats
const stats = collectRuntimeStats();
console.log(JSON.stringify(stats, null, 4));

// [Scripting][Inform]-{
//  memoryAllocatedSize: 3255790,
//  memoryAllocatedCount: 38819,
//  memoryUsedSize: 2836464,
//  memoryUsedCount: 39076,
//  atomCount: 6775,
//  stringCount: 3302,
//  atomSize: 388187,
//  stringSize: 226686,
//  functionCodeSize: 87089,
//  objectCount: 9153,
//  objectSize: 732240,
//  propertyCount: 22816,
//  propertySize: 462912,
//  functionCount: 534,
//  functionSize: 449049,
//  functionLineCount: 420,
//  arrayCount: 2943,
//  fastArrayCount: 2936,
//  fastArrayElementCount: 6104,
// }
