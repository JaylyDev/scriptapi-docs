import { MemoryTier, Player } from "@minecraft/server";

/**
 * Show player's device memory
 * @param player 
 */
function showClientMemory(player: Player) {
  const tier = player.clientSystemInfo.memoryTier;

  // Actual value of each memory tier is subject to change.
  switch (tier) {
    case MemoryTier.SuperLow:
      player.sendMessage('Server Total Memory: Under 1.5 GB (Super Low)');
      break;
  
    case MemoryTier.Low:
      player.sendMessage('Server Total Memory: 1.5 - 2.0 GB (Low)');
      break;
  
    case MemoryTier.Mid:
      player.sendMessage('Server Total Memory: 2.0 - 4.0 GB (Mid)');
      break;
  
    case MemoryTier.High:
      player.sendMessage('Server Total Memory: 4.0 - 8.0 GB (High)');
      break;
    
    case MemoryTier.SuperHigh:
      player.sendMessage('Server Total Memory: Over 8.0 GB (Super High)');
      break;
  
    default:
      break;
  }

  player.sendMessage('(Value for memory tier is used for reference. They are subject to change.)');
}