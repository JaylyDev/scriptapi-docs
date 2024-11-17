// Script by JaylyMC

import { Player, system, world } from "@minecraft/server";

// Movement direction enum
enum MovementDirection {
  Forward = "Forward",
  Backward = "Backward",
  Left = "Left",
  Right = "Right",
  ForwardLeft = "Forward-left",
  ForwardRight = "Forward-right",
  BackwardLeft = "Backward-left",
  BackwardRight = "Backward-right",
  None = "None",
  Unknown = "Unknown",
};

/**
 * @description
 * Retrieve player's movement direction. This works with players with inputpermission disabled.
 * 
 * This complex function is made specificallly for players with joystick control mode.
 * Because dragging the joystick can result in a range of float values, unlike D-Pad or any other controls.
 *
 * @param player player's movement vector to retrieve
 * @returns movement direction
 * 
 * Reference for movement vector, for keyboard movement control:
 * - Walk forward: `(0, 1)`
 * - Walk backward: `(0, -1)`
 * - Strafe left: `(1, 0)`
 * - Strafe right: `(-1, 0)`
 * - Not moving: `(0, 0)`
 */
function getPlayerControlMovement(player: Player): string {
  const movement = player.inputInfo.getMovementVector();
  // Threshold to classify directions
  const threshold = 0.5;

  // Determine the normalized direction
  const normalizedX = Math.abs(movement.x) >= threshold ? (movement.x > 0 ? 1 : -1) : 0;
  const normalizedY = Math.abs(movement.y) >= threshold ? (movement.y > 0 ? 1 : -1) : 0;

  // Define direction based on normalized x and y
  if (normalizedX === 0 && normalizedY === 1) return MovementDirection.Forward;
  if (normalizedX === 0 && normalizedY === -1) return MovementDirection.Backward;
  if (normalizedX === 1 && normalizedY === 0) return MovementDirection.Left;
  if (normalizedX === -1 && normalizedY === 0) return MovementDirection.Right;
  if (normalizedX === 1 && normalizedY === 1) return MovementDirection.ForwardLeft;
  if (normalizedX === -1 && normalizedY === 1) return MovementDirection.ForwardRight;
  if (normalizedX === 1 && normalizedY === -1) return MovementDirection.BackwardLeft;
  if (normalizedX === -1 && normalizedY === -1) return MovementDirection.BackwardRight;
  if (normalizedX === 0 && normalizedY === 0) return MovementDirection.None;

  // Handle unexpected cases
  return MovementDirection.Unknown;
}

// Example to display movement control
system.runInterval(() => {
  world.getAllPlayers().forEach((player) => {
    const status = getPlayerControlMovement(player);
    player.onScreenDisplay.setActionBar(
      `Movement: ${status}`
    );
  });
});
