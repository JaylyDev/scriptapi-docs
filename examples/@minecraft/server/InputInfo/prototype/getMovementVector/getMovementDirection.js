// Script by JaylyMC

import { system, world } from "@minecraft/server";
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
function getPlayerControlMovement(player) {
    var movement = player.inputInfo.getMovementVector();
    // Threshold to classify directions
    var threshold = 0.5;
    // Determine the normalized direction
    var normalizedX = Math.abs(movement.x) >= threshold ? (movement.x > 0 ? 1 : -1) : 0;
    var normalizedY = Math.abs(movement.y) >= threshold ? (movement.y > 0 ? 1 : -1) : 0;
    // Define direction based on normalized x and y
    if (normalizedX === 0 && normalizedY === 1)
        return "Forward";
    if (normalizedX === 0 && normalizedY === -1)
        return "Backward";
    if (normalizedX === 1 && normalizedY === 0)
        return "Left";
    if (normalizedX === -1 && normalizedY === 0)
        return "Right";
    if (normalizedX === 1 && normalizedY === 1)
        return "Forward-left";
    if (normalizedX === -1 && normalizedY === 1)
        return "Forward-right";
    if (normalizedX === 1 && normalizedY === -1)
        return "Backward-left";
    if (normalizedX === -1 && normalizedY === -1)
        return "Backward-right";
    if (normalizedX === 0 && normalizedY === 0)
        return "None";
    // Handle unexpected cases
    return "Unknown";
}
// Example to display movement control
system.runInterval(function () {
    world.getAllPlayers().forEach(function (player) {
        var status = getPlayerControlMovement(player);
        player.onScreenDisplay.setActionBar("Movement: ".concat(status));
    });
});
