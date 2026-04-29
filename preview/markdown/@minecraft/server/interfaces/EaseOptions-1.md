[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EaseOptions

# Interface: EaseOptions

Contains options associated with easing between positions
and/or rotations.

## Example

```ts
import {
   world,
   system,
   Camera,
   EaseOptions,
   EasingType,
   CameraSetLocationOptions,
   CameraSetRotOptions,
   Vector3,
} from "@minecraft/server";

// Example of using the new Camera setDefaultCamera method with EaseOptions
function demonstrateCameraEasing() {
   const players = world.getAllPlayers();

   players.forEach((player) => {
       const camera = player.camera;

       // Check if camera is valid
       if (!camera.isValid) {
           console.log("Camera is not valid");
           return;
       }

       console.log(`Setting up camera easing for ${player.name}`);

       // Example 1: Set default camera with easing
       const easeOptions: EaseOptions = {
           easeTime: 3.0, // 3 seconds
           easeType: EasingType.InOutSine,
       };

       camera.setDefaultCamera("minecraft:first_person", easeOptions);
       console.log("Set default camera with smooth easing");

       // Example 2: Set camera location with easing
       const newLocation: Vector3 = {
           x: player.location.x + 10,
           y: player.location.y + 5,
           z: player.location.z + 10,
       };

       const locationOptions: CameraSetLocationOptions = {
           location: newLocation,
           easeOptions: {
               easeTime: 2.5,
               easeType: EasingType.InOutCubic,
           },
       };

       system.runTimeout(() => {
           camera.setCamera("minecraft:free", locationOptions);
           console.log("Moved camera to new location with easing");
       }, 80); // Wait 4 seconds (80 ticks) after first camera change

       // Example 3: Set camera rotation with easing
       const rotationOptions: CameraSetRotOptions = {
           rotation: { x: -30, y: 45 }, // Look down at 30 degrees, turn 45 degrees
           easeOptions: {
               easeTime: 1.5,
               easeType: EasingType.InOutQuad,
           },
       };

       system.runTimeout(() => {
           camera.setCamera("minecraft:free", rotationOptions);
           console.log("Changed camera rotation with easing");
       }, 140); // Wait 7 seconds (140 ticks)

       // Example 4: Reset to default after demonstration
       system.runTimeout(() => {
           const resetEase: EaseOptions = {
               easeTime: 2.0,
               easeType: EasingType.InOutSine,
           };
           camera.setDefaultCamera("minecraft:first_person", resetEase);
           console.log("Reset camera to first person view");
       }, 10000); // Reset after 10 seconds
   });
}

// Example: Demonstrate different easing types
function demonstrateEasingTypes() {
   const player = world.getAllPlayers()[0];
   if (!player) return;

   const camera = player.camera;
   if (!camera.isValid) return;

   const easingTypes = [
       EasingType.InQuad,
       EasingType.OutQuad,
       EasingType.InOutQuad,
       EasingType.InCubic,
       EasingType.OutCubic,
       EasingType.InOutCubic,
       EasingType.InSine,
       EasingType.OutSine,
       EasingType.InOutSine,
   ];

   console.log("Demonstrating different easing types...");

   easingTypes.forEach((easingType, index) => {
       system.runTimeout(() => {
           const easeOptions: EaseOptions = {
               easeTime: 1.0,
               easeType: easingType,
           };

           // Alternate between two camera presets to show the easing effect
           const preset = index % 2 === 0 ? "minecraft:third_person_front" : "minecraft:third_person";
           camera.setDefaultCamera(preset, easeOptions);

           console.log(`Applied ${EasingType[easingType]} easing`);
       }, index * 1200); // 1.2 seconds apart
   });
}

// Example: Create a cinematic camera sequence
function createCinematicSequence() {
   const player = world.getAllPlayers()[0];
   if (!player) return;

   const camera = player.camera;
   if (!camera.isValid) return;

   console.log("Starting cinematic camera sequence...");

   // Step 1: Zoom out with smooth easing
   system.runTimeout(() => {
       const easeOut: EaseOptions = {
           easeTime: 3.0,
           easeType: EasingType.OutCubic,
       };
       camera.setDefaultCamera("minecraft:third_person", easeOut);
   }, 20); // 1 second (20 ticks)

   // Step 2: Move camera to overhead view
   system.runTimeout(() => {
       const overheadLocation: Vector3 = {
           x: player.location.x,
           y: player.location.y + 20,
           z: player.location.z,
       };

       const overheadOptions: CameraSetLocationOptions = {
           location: overheadLocation,
           easeOptions: {
               easeTime: 4.0,
               easeType: EasingType.InOutSine,
           },
       };

       camera.setCamera("minecraft:free", overheadOptions);
   }, 100); // 5 seconds (100 ticks)

   // Step 3: Return to normal view
   system.runTimeout(() => {
       const returnEase: EaseOptions = {
           easeTime: 2.0,
           easeType: EasingType.InOutQuad,
       };
       camera.setDefaultCamera("minecraft:first_person", returnEase);
       console.log("Cinematic sequence complete!");
   }, 200); // 10 seconds (200 ticks)
}

// Run the demonstrations
demonstrateCameraEasing();

// Uncomment these to run additional demonstrations
// demonstrateEasingTypes();
// createCinematicSequence();
```

## Source

```ts
export interface EaseOptions {
    easeTime?: number;
    easeType?: EasingType;
}
```

## Properties

### easeTime?

> `optional` **easeTime?**: `number`

#### Remarks

Time for the ease operation.

***

### easeType?

> `optional` **easeType?**: [`EasingType`](../enumerations/EasingType-1.md)

#### Remarks

Type of ease operation to use.
