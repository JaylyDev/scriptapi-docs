import { Player, system, world } from "@minecraft/server";

/**
 * - Moving forward: (1, 0)
 * - Moving backward: (-1, 0)
 * - Moving right: (0, 1)
 * - Moving left: (0, -1)
 * 
 * This works with inputpermission disabled.
 * 
 * @param player player's movement vector to retrieve
 */
function getPlayerMoveDirection(player:Player) {
  const movement = player.inputInfo.getMovementVector();
  return movement;
}