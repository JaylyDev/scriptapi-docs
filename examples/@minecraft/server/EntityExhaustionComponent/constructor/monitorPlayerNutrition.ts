import {
  world,
  EntityExhaustionComponent,
  EntityHungerComponent,
  EntitySaturationComponent,
  Player,
  system,
} from "@minecraft/server";

// Example: Create a feeding function that manages all nutrition aspects
function feedPlayer(player: Player) {
  const exhaustionComponent = player.getComponent(
    "minecraft:player.exhaustion"
  );
  const hungerComponent = player.getComponent("minecraft:player.hunger");
  const saturationComponent = player.getComponent(
    "minecraft:player.saturation"
  );

  if (hungerComponent && saturationComponent && exhaustionComponent) {
    // Restore hunger
    hungerComponent.resetToMaxValue();

    // Restore saturation
    saturationComponent.resetToMaxValue();

    // Reset exhaustion
    exhaustionComponent.resetToMinValue();

    console.log(
      `Fed ${player.name} - restored hunger, saturation, and reset exhaustion`
    );
  }
}

// Example: Monitor player nutrition status
function monitorPlayerNutrition() {
  const players = world.getAllPlayers();

  players.forEach((player) => {
    const hungerComponent = player.getComponent("minecraft:player.hunger");
    const saturationComponent = player.getComponent("minecraft:player.saturation");
    const exhaustionComponent = player.getComponent("minecraft:player.exhaustion");

    if (hungerComponent && saturationComponent && exhaustionComponent) {
      const hungerPercent =
        (hungerComponent.currentValue / hungerComponent.defaultValue) * 100;
      const saturationPercent =
        (saturationComponent.currentValue / saturationComponent.defaultValue) * 100;
      const exhaustionPercent =
        (exhaustionComponent.currentValue / exhaustionComponent.defaultValue) * 100;

      // Warn if nutrition levels are low
      if (hungerPercent < 30) {
        console.log(
          `Warning: ${player.name} has low hunger (${hungerPercent.toFixed(1)}%)`
        );
      }

      if (saturationPercent < 20) {
        console.log(
          `Warning: ${player.name} has low saturation (${saturationPercent.toFixed(1)}%)`
        );
      }

      if (exhaustionPercent > 80) {
        console.log(
          `Warning: ${player.name} has high exhaustion (${exhaustionPercent.toFixed(1)}%)`
        );
        // Auto-feed if exhaustion is too high
        feedPlayer(player);
      }
    }
  });
}

// Monitor nutrition every 30 seconds
system.runInterval(() => {
  monitorPlayerNutrition();
}, 600); // 600 ticks = 30 seconds
