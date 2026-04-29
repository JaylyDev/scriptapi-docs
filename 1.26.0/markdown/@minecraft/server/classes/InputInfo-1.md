[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / InputInfo

# Class: InputInfo

Contains the input information for a client instance.

Input APIs are released from Beta APIs in Minecraft v1.21.70. Here's a video from Mojang that covers the input APIs.

<iframe width="914" height="514" src="https://www.youtube.com/embed/9-AoU4jzm44?start=85" title="1.21.70 Minecraft Update" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Constructors

### Constructor

> `private` **new InputInfo**(): `InputInfo`

#### Returns

`InputInfo`

## Properties

### lastInputModeUsed

> `readonly` **lastInputModeUsed**: [`InputMode`](../enumerations/InputMode-1.md)

#### Remarks

The last input mode used by the player.

#### Throws

This property can throw when used.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### touchOnlyAffectsHotbar

> `readonly` **touchOnlyAffectsHotbar**: `boolean`

#### Remarks

Whether the player touch input only affects the touchbar or
not.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getButtonState()

> **getButtonState**(`button`): [`ButtonState`](../enumerations/ButtonState-1.md)

#### Parameters

##### button

[`InputButton`](../enumerations/InputButton-1.md)

#### Returns

[`ButtonState`](../enumerations/ButtonState-1.md)

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getMovementVector()

> **getMovementVector**(): [`Vector2`](../interfaces/Vector2-1.md)

#### Returns

[`Vector2`](../interfaces/Vector2-1.md)

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
// Script by JaylyMC

import { system, world } from "@minecraft/server";
/**
@description
Retrieve player's movement direction. This works with players with inputpermission disabled.

This complex function is made specificallly for players with joystick control mode.
Because dragging the joystick can result in a range of float values, unlike D-Pad or any other controls.

@param player player's movement vector to retrieve
@returns movement direction

Reference for movement vector, for keyboard movement control:
- Walk forward: `(0, 1)`
- Walk backward: `(0, -1)`
- Strafe left: `(1, 0)`
- Strafe right: `(-1, 0)`
- Not moving: `(0, 0)`
/
function getPlayerControlMovement(player) {
var movement = player.inputInfo.getMovementVector();
// Threshold to classify directions
var threshold = 0.5;
// Determine the normalized direction
var normalizedX = Math.abs(movement.x) >= threshold ? (movement.x > 0 ? 1 : -1) : 0;
var normalizedY = Math.abs(movement.y) >= threshold ? (movement.y > 0 ? 1 : -1) : 0;
// Define direction based on normalized x and y
if (normalizedX === 0 && normalizedY === 1) return "Forward";
if (normalizedX === 0 && normalizedY === -1) return "Backward";
if (normalizedX === 1 && normalizedY === 0) return "Left";
if (normalizedX === -1 && normalizedY === 0) return "Right";
if (normalizedX === 1 && normalizedY === 1) return "Forward-left";
if (normalizedX === -1 && normalizedY === 1) return "Forward-right";
if (normalizedX === 1 && normalizedY === -1) return "Backward-left";
if (normalizedX === -1 && normalizedY === -1) return "Backward-right";
if (normalizedX === 0 && normalizedY === 0) return "None";
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
```

```ts
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
}

/**
@description
Retrieve player's movement direction. This works with players with inputpermission disabled.

This complex function is made specificallly for players with joystick control mode.
Because dragging the joystick can result in a range of float values, unlike D-Pad or any other controls.

@param player player's movement vector to retrieve
@returns movement direction

Reference for movement vector, for keyboard movement control:
- Walk forward: `(0, 1)`
- Walk backward: `(0, -1)`
- Strafe left: `(1, 0)`
- Strafe right: `(-1, 0)`
- Not moving: `(0, 0)`
/
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
   player.onScreenDisplay.setActionBar(`Movement: ${status}`);
});
});
```
