[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / InputPermissionCategory

# Enumeration: InputPermissionCategory

Input permission categories. Used by [PlayerInputPermissionCategoryChangeAfterEvent](../classes/PlayerInputPermissionCategoryChangeAfterEvent.md) to specify
which category was changed and [PlayerInputPermissions](../classes/PlayerInputPermissions.md) to get or set permissions.

## Enumeration Members

### Camera

> **Camera**: `1`

#### Remarks

Player input relating to camera movement.

***

### Dismount

> **Dismount**: `8`

#### Remarks

Player input relating to dismounting. When disabled, the
player can still dismount vehicles by other means, for
example on horses players can still jump off and in boats
players can go into another boat.

***

### Jump

> **Jump**: `6`

#### Remarks

Player input relating to jumping. This also affects flying
up.

***

### LateralMovement

> **LateralMovement**: `4`

#### Remarks

Player input for moving laterally in the world. This would
be WASD on a keyboard or the movement joystick on gamepad or
touch.

***

### Mount

> **Mount**: `7`

#### Remarks

Player input relating to mounting vehicles.

***

### MoveBackward

> **MoveBackward**: `10`

#### Remarks

Player input relating to moving the player backward.

***

### MoveForward

> **MoveForward**: `9`

#### Remarks

Player input relating to moving the player forward.

***

### MoveLeft

> **MoveLeft**: `11`

#### Remarks

Player input relating to moving the player left.

***

### Movement

> **Movement**: `2`

#### Remarks

Player input relating to all player movement. Disabling this
is equivalent to disabling jump, sneak, lateral movement,
mount, and dismount.

***

### MoveRight

> **MoveRight**: `12`

#### Remarks

Player input relating to moving the player right.

***

### Sneak

> **Sneak**: `5`

#### Remarks

Player input relating to sneak. This also affects flying
down.
