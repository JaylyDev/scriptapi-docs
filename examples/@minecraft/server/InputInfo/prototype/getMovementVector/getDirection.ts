import { Player, system, world } from "@minecraft/server";

/**
 * The square root of 0.5, or, equivalently, one divided by the square root of 2.
 *
 * This value is used rather than `Math.SQRT1_2` because C++ precision of float set to 6-7 digit.
 */
const SQRT1_2 = 0.7071067690849304;

/**
 * - Moving forward: `(1, 0)`
 * - Moving backward: `(-1, 0)`
 * - Moving right: `(0, 1)`
 * - Moving left: `(0, -1)`
 * - Moving forward-right: `(1, 1)`
 * - Moving forward-left: `(1, -1)`
 * - Moving backward-left: `(-1, -1)`
 * - Moving backward-right: `(-1, 1)`
 * - Not moving: `(0, 0)`
 *
 * Retrieve player's movement direction. This works with players with inputpermission disabled.
 *
 * @param player player's movement vector to retrieve
 */
function getPlayerMovementStatus(player: Player): string {
  const movement = player.inputInfo.getMovementVector();
  if (movement.x == 1 && movement.y == 0) return "Forward";
  else if (movement.x == -1 && movement.y == 0) return "Backward";
  else if (movement.x == 0 && movement.y == 1) return "Right";
  else if (movement.x == 0 && movement.y == -1) return "Left";
  else if (movement.x == SQRT1_2 && movement.y == SQRT1_2)
    return "Forward-Right";
  else if (movement.x == -SQRT1_2 && movement.y == SQRT1_2)
    return "Forward-Left";
  else if (movement.x == -SQRT1_2 && movement.y == -SQRT1_2)
    return "Backward-Left";
  else if (movement.x == SQRT1_2 && movement.y == -SQRT1_2)
    return "Backward-Right";
  else return "None";
}

system.runInterval(() => {
  world.getAllPlayers().forEach((player) => {
    const status = getPlayerMovementStatus(player);
    player.onScreenDisplay.setActionBar(
      `Movement: ${status}`
    );
  });
});
