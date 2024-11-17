import { collectRuntimeStats } from "@minecraft/debug-utilities";

/**
 * Display runtime stats in the console
 */
function displayRuntimeStats() {
  // Get script runtime stats
  const stats = collectRuntimeStats();
  
  // Log script runtime stats
  console.log('Memory Allocated Size', stats.memoryAllocatedSize); // Memory Allocated Size: 3255790
  console.log('Memory Allocated Count', stats.memoryAllocatedCount); // Memory Allocated Count: 38819
  console.log('Memory Used Size', stats.memoryUsedSize); // Memory Used Size: 2836464
  console.log('Memory Used Count', stats.memoryUsedCount); // Memory Used Count: 39076
  console.log('Atom Count', stats.atomCount); // Atom Count: 6775
  console.log('String Count', stats.stringCount); // String Count: 3302
  console.log('Atom Size', stats.atomSize); // Atom Size: 388187
  console.log('String Size', stats.stringSize); // String Size: 226686
  console.log('Function Code Size', stats.functionCodeSize); // Function Code Size: 87089
  console.log('Object Count', stats.objectCount); // Object Count: 9153
  console.log('Object Size', stats.objectSize); // Object Size: 732240
  console.log('Property Count', stats.propertyCount); // Property Count: 22816
  console.log('Property Size', stats.propertySize); // Property Size: 462912
  console.log('Function Count', stats.functionCount); // Function Count: 534
  console.log('Function Size', stats.functionSize); // Function Size: 449049
  console.log('Function Line Count', stats.functionLineCount); // Function Line Count: 420
  console.log('Array Count', stats.arrayCount); // Array Count: 2943
  console.log('Fast Array Count', stats.fastArrayCount); // Fast Array Count: 2936
  console.log('Fast Array Element Count', stats.fastArrayElementCount); // Fast Array Element Count: 6104
}