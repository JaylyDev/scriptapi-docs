// Adapted from Microsoft's Custom Dimension API tutorial:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/custom-dimension-api-tutorial
import { BlockPermutation, Dimension, Vector3, world } from "@minecraft/server";

const VOID_ARENA_ID = "custom_dim:void_arena";
const SKY_LOUNGE_ID = "custom_dim:sky_lounge";

interface PlatformConfig {
  dimensionId: string;
  blockId: string;
  radius: number;
  center: Vector3;
  decor?: boolean;
}

const PLATFORMS: PlatformConfig[] = [
  {
    dimensionId: VOID_ARENA_ID,
    blockId: "minecraft:crimson_nylium",
    radius: 8,
    center: { x: 0, y: 64, z: 0 },
  },
  {
    dimensionId: SKY_LOUNGE_ID,
    blockId: "minecraft:quartz_block",
    radius: 6,
    center: { x: 0, y: 100, z: 0 },
    decor: true,
  },
];

const builtDimensions = new Set<string>();

// Build landing platforms once the world is ready.
world.afterEvents.worldLoad.subscribe(() => {
  for (const platform of PLATFORMS) {
    void ensurePlatformBuilt(platform);
  }
});

async function ensurePlatformBuilt(config: PlatformConfig): Promise<void> {
  if (builtDimensions.has(config.dimensionId)) {
    return;
  }

  const dim = world.getDimension(config.dimensionId);
  const tickingAreaId = `${config.dimensionId}_platform`;
  const margin = 2;

  // Keep destination chunks active before placing blocks.
  await world.tickingAreaManager.createTickingArea(tickingAreaId, {
    dimension: dim,
    from: {
      x: config.center.x - config.radius - margin,
      y: config.center.y - 1,
      z: config.center.z - config.radius - margin,
    },
    to: {
      x: config.center.x + config.radius + margin,
      y: config.center.y + 4,
      z: config.center.z + config.radius + margin,
    },
  });

  buildPlatform(dim, config.blockId, config.radius, config.center);
  if (config.decor) {
    buildDecor(dim, config.center);
  }

  world.tickingAreaManager.removeTickingArea(tickingAreaId);
  builtDimensions.add(config.dimensionId);
}

function buildPlatform(dim: Dimension, blockId: string, radius: number, center: Vector3) {
  const floor = BlockPermutation.resolve(blockId);

  for (let x = -radius; x <= radius; x++) {
    for (let z = -radius; z <= radius; z++) {
      dim.getBlock({ x: center.x + x, y: center.y, z: center.z + z })?.setPermutation(floor);
    }
  }

  // Add simple 2-block-high glass rails around the edge.
  const glass = BlockPermutation.resolve("minecraft:glass");
  for (let i = -radius; i <= radius; i++) {
    for (let y = 1; y <= 2; y++) {
      dim.getBlock({ x: center.x + i, y: center.y + y, z: center.z - radius })?.setPermutation(glass);
      dim.getBlock({ x: center.x + i, y: center.y + y, z: center.z + radius })?.setPermutation(glass);
      dim.getBlock({ x: center.x - radius, y: center.y + y, z: center.z + i })?.setPermutation(glass);
      dim.getBlock({ x: center.x + radius, y: center.y + y, z: center.z + i })?.setPermutation(glass);
    }
  }
}

function buildDecor(dim: Dimension, center: Vector3) {
  const glowstone = BlockPermutation.resolve("minecraft:glowstone");
  const offsets = [-4, 4];

  for (const ox of offsets) {
    for (const oz of offsets) {
      dim.getBlock({ x: center.x + ox, y: center.y + 3, z: center.z + oz })?.setPermutation(glowstone);
    }
  }
}
