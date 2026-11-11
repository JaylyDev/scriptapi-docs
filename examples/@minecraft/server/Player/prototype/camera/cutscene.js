import { EasingType, system, world } from "@minecraft/server";

function runCutscene() {
  for (const player of world.getPlayers()) {
    const location = player.location;
    player.camera.setCamera("minecraft:free", {
      location: { x: location.x, y: location.y + 10, z: location.z },
      rotation: { x: 90, y: 0 },
    });
    system.run(() => {
      player.camera.setCamera("minecraft:free", {
        location: player.getHeadLocation(),
        rotation: player.getRotation(),
        easeOptions: {
          easeTime: 1.0,
          easeType: EasingType.InCubic
        }
      });
      system.runTimeout(() => {
        player.camera.clear();
        player.runCommand("/inputpermission @s camera enabled");
        player.runCommand("/inputpermission @s movement enabled");
      }, 20);
    });
    player.runCommand("/inputpermission @s camera disabled");
    player.runCommand("/inputpermission @s movement disabled");
  }
}

runCutscene();