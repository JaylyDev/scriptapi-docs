import * as mc from "@minecraft/server";

declare global {
  const entity: mc.Entity;
  const player: mc.Player;
  const block: mc.Block;
  const world: mc.World;
  const item: mc.ItemStack;
  const system: mc.System;
  const gameMode: mc.GameMode;
  interface EntityQueryOptions extends mc.EntityQueryOptions {}
}