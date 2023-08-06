import { world } from "@minecraft/server";

const callback = world.beforeEvents.itemUse.subscribe((event) => { /** event */});
world.beforeEvents.itemUse.unsubscribe(callback);