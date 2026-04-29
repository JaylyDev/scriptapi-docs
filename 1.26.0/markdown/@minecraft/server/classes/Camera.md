[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / Camera

# Class: Camera

Contains methods relating to the active camera for the
specified player.

## Constructors

### Constructor

> `private` **new Camera**(): `Camera`

#### Returns

`Camera`

## Properties

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the Camera is valid to access and use. A
Camera is considered valid when the owning Player of the
Camera is loaded and valid itself.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Remarks

Clears the active camera for the specified player. Causes
the specified players to end any in-progress camera
perspectives, including any eased camera motions, and return
to their normal perspective.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Player } from "@minecraft/server";

// Scripting code for the `camera <player> clear` command.
function clearPlayerCamera(player: Player) {
player.camera.clear();
}
```

***

### fade()

> **fade**(`fadeCameraOptions?`): `void`

#### Parameters

##### fadeCameraOptions?

[`CameraFadeOptions`](../interfaces/CameraFadeOptions.md)

Additional options around camera fade operations.

#### Returns

`void`

#### Remarks

Begins a camera fade transition. A fade transition is a
full-screen color that fades-in, holds, and then fades-out.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Player } from "@minecraft/server";

// Scripting code for the `camera <player> fade color 0.0 0.0 1.0` command.
function sceneEndFade(player: Player) {
// fade color: blue
player.camera.fade({
   fadeColor: {
       red: 0.0,
       green: 0.0,
       blue: 1.0,
   },
});
}

// Scripting code for the `camera <player> time 1.5 2.0 1.0 fade color 1.0 0.5 0.3` command.
function sceneFadeSlow(player: Player) {
// fade color: rgb (1.0, 0.5, 0.3)
player.camera.fade({
   fadeTime: {
       fadeInTime: 1.5,
       holdTime: 2.0,
       fadeOutTime: 1.0,
   },
   fadeColor: {
       red: 1.0,
       green: 1.0,
       blue: 1.0,
   },
});
}
```

***

### setCamera()

> **setCamera**(`cameraPreset`, `setOptions?`): `void`

#### Parameters

##### cameraPreset

`string`

Identifier of a camera preset file defined within JSON.

##### setOptions?

[`CameraFixedBoomOptions`](../interfaces/CameraFixedBoomOptions.md) \| [`CameraSetFacingOptions`](../interfaces/CameraSetFacingOptions.md) \| [`CameraSetLocationOptions`](../interfaces/CameraSetLocationOptions.md) \| [`CameraSetPosOptions`](../interfaces/CameraSetPosOptions.md) \| [`CameraSetRotOptions`](../interfaces/CameraSetRotOptions.md) \| [`CameraTargetOptions`](../interfaces/CameraTargetOptions.md)

Additional options for the camera.

#### Returns

`void`

#### Remarks

Sets the current active camera for the specified player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```ts
import { Player, EasingType, Vector3, Vector2 } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free ease 1.0 in_cubic pos 10 20 30 facing @e[type=wolf,c=1]` command.
function setCameraToFaceWolfAtPos(player: Player) {
const location: Vector3 = { x: 10, y: 20, z: 30 };
const wolf = player.dimension.getEntities({ type: "minecraft:wolf", closest: 1 })[0];
player.camera.setCamera("minecraft:free", {
   location: location,
   facingEntity: wolf,
   easeOptions: {
       easeTime: 1.0,
       easeType: EasingType.InCubic,
   },
});
}

// Scripting code for the `camera <player> set minecraft:free ease 2.5 in_cubic pos 10 20 30 facing 1 2 3` command.
function setCameraToFaceLocationAtPos(player: Player) {
const location: Vector3 = { x: 10, y: 20, z: 30 };
const facingLocation: Vector3 = { x: 1, y: 2, z: 3 };
player.camera.setCamera("minecraft:free", {
   location: location,
   facingLocation: facingLocation,
   easeOptions: {
       easeTime: 2.5,
       easeType: EasingType.InCubic,
   },
});
}

// Scripting code for the `camera <player> set minecraft:free ease 2.5 in_cubic pos 10 20 30 rot 90 0` command.
function setCameraToFaceRotAtPos(player: Player) {
const location: Vector3 = { x: 10, y: 20, z: 30 };
const rotation: Vector2 = { x: 90, y: 0 };
player.camera.setCamera("minecraft:free", {
   location: location,
   rotation: rotation,
   easeOptions: {
       easeTime: 2.5,
       easeType: EasingType.InCubic,
   },
});
}
```

```ts
import { Player, EasingType, Vector3, Vector2 } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free ease 2.5 in_cubic rot 90 0` command.
function setCameraToFaceRot(player: Player) {
const rotation: Vector2 = { x: 90, y: 0 };
player.camera.setCamera("minecraft:free", {
   rotation: rotation,
   easeOptions: {
       easeTime: 2.5,
       easeType: EasingType.InCubic,
   },
});
}
```

```ts
import { Player, EasingType, Vector3 } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free ease 1.0 in_cubic facing @e[type=wolf,c=1]` command.
function setCameraToFaceWolf(player: Player) {
const wolf = player.dimension.getEntities({ type: "minecraft:wolf", closest: 1 })[0];
player.camera.setCamera("minecraft:free", {
   facingEntity: wolf,
   easeOptions: {
       easeTime: 1.0,
       easeType: EasingType.InCubic,
   },
});
}

// Scripting code for the `camera <player> set minecraft:free ease 1.0 in_out_back facing 1 2 3` command.
function setCameraToFacePos(player: Player) {
const location: Vector3 = { x: 1, y: 2, z: 3 };
player.camera.setCamera("minecraft:free", {
   facingLocation: location,
   easeOptions: {
       easeTime: 1.0,
       easeType: EasingType.InOutBack,
   },
});
}
```

```ts
import { Entity, Player, Vector2, Vector3, world } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free rot 0 90` command.
function setCameraToFaceEast(player: Player) {
const rotation: Vector2 = { x: 0, y: 90 };
player.camera.setCamera("minecraft:free", {
   rotation: rotation,
});
}
```

```ts
import { Entity, Player, Vector2, Vector3, world } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free pos 10 20 30 facing @e[type=wolf,c=1]` command.
function setCameraToFaceWolf(player: Player) {
const wolf = player.dimension.getEntities({ type: "minecraft:wolf", closest: 1 })[0];
const wolfLocation: Vector3 = { x: 10, y: 20, z: 30 };
player.camera.setCamera("minecraft:free", {
   facingEntity: wolf,
   location: wolfLocation,
});
}

// Scripting code for the `camera <player> set minecraft:free pos 10 20 30 facing 20 20 30` command.
function setCameraToFaceLocation(player: Player) {
const location: Vector3 = { x: 10, y: 20, z: 30 };
const facingLocation: Vector3 = { x: 20, y: 20, z: 30 };
player.camera.setCamera("minecraft:free", {
   facingLocation: facingLocation,
   location: location,
});
}

// Scripting code for the `camera <player> set minecraft:free pos 10 20 30 rot 0 90` command.
function setCameraToFaceEast(player: Player) {
const location: Vector3 = { x: 10, y: 20, z: 30 };
const rotation: Vector2 = { x: 0, y: 90 };
player.camera.setCamera("minecraft:free", {
   location: location,
   rotation: rotation,
});
}
```

```ts
import { Player } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:first_person` command.
function setFirstPerson(player: Player) {
player.camera.setCamera("minecraft:first_person");
}

// Scripting code for the `camera <player> set minecraft:third_person` command.
function setThirdPerson(player: Player) {
player.camera.setCamera("minecraft:third_person");
}

// Scripting code for the `camera <player> set minecraft:third_person_front` command.
function setThirdPersonFront(player: Player) {
player.camera.setCamera("minecraft:third_person_front");
}
```

```ts
import { Vector3Builder, Vector3Utils } from "@minecraft/math";
import { EasingType, Player, Vector3 } from "@minecraft/server";

function getAbsoluteLocationFromViewAnchor(anchor: Vector3, location: Vector3, viewDirection: Vector3) {
const dirz = new Vector3Builder(viewDirection);
const dirx = new Vector3Builder(dirz.z, 0, -dirz.x);
const diry = Vector3Utils.cross(dirz, dirx);
const xo = Vector3Utils.scale(dirx, anchor.x);
const yo = Vector3Utils.scale(diry, anchor.y);
const zo = Vector3Utils.scale(dirz, anchor.z);

return new Vector3Builder(location).add(xo).add(yo).add(zo);
}

// Scripting code for the `execute as @s at @s anchored eyes run camera @s set minecraft:free ease 0.1 linear pos ^-0.75 ^ ^-1.5 rot ~ ~` command
function setCamera(player: Player) {
const headLocation = player.getHeadLocation();
const viewDirection = player.getViewDirection();
const rotation = player.getRotation();
const anchor = new Vector3Builder(-0.75, 0, -1.5);
const location = getAbsoluteLocationFromViewAnchor(anchor, headLocation, viewDirection);
player.camera.setCamera("minecraft:free", {
   location: location,
   rotation: rotation,
   easeOptions: {
       easeTime: 0.1,
       easeType: EasingType.Linear,
   },
});
}
```

```ts
import { Entity, Player, Vector3, world } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free facing @e[type=wolf,c=1]` command.
function setCameraToFaceWolf(player: Player) {
const wolf = player.dimension.getEntities({ type: "minecraft:wolf", closest: 1 })[0];
player.camera.setCamera("minecraft:free", {
   facingEntity: wolf,
});
}

// Scripting code for the `camera <player> set minecraft:free facing @e[type=wolf,c=1]` command.
function setCameraToFaceLocation(player: Player) {
const location: Vector3 = { x: 10, y: 20, z: 30 };
player.camera.setCamera("minecraft:free", {
   facingLocation: location,
});
}
```

***

### setDefaultCamera()

> **setDefaultCamera**(`cameraPreset`, `easeOptions?`): `void`

#### Parameters

##### cameraPreset

`string`

Identifier of a camera preset file defined within JSON.

##### easeOptions?

[`EaseOptions`](../interfaces/EaseOptions.md)

Options to ease the camera back to its original position and
rotation.

#### Returns

`void`

#### Remarks

Sets the current active camera for the specified player and
resets the position and rotation to the values defined in
the JSON.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setFov()

> **setFov**(`fovCameraOptions?`): `void`

#### Parameters

##### fovCameraOptions?

[`CameraFovOptions`](../interfaces/CameraFovOptions.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
