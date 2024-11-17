import { MemoryTier, system, world } from "@minecraft/server";

function showServerMemory() {
  const tier = system.serverSystemInfo.memoryTier;

  // Actual value of each memory tier is subject to change.
  switch (tier) {
    case MemoryTier.SuperLow:
      world.sendMessage('Server Total Memory: Under 1.5 GB (Super Low)');
      break;
  
    case MemoryTier.Low:
      world.sendMessage('Server Total Memory: 1.5 - 2.0 GB (Low)');
      break;
  
    case MemoryTier.Mid:
      world.sendMessage('Server Total Memory: 2.0 - 4.0 GB (Mid)');
      break;
  
    case MemoryTier.High:
      world.sendMessage('Server Total Memory: 4.0 - 8.0 GB (High)');
      break;
    
    case MemoryTier.SuperHigh:
      world.sendMessage('Server Total Memory: Over 8.0 GB (Super High)');
      break;
  
    default:
      break;
  }

  world.sendMessage('(Value for memory tier is used for reference. They are subject to change.)');
}

showServerMemory();