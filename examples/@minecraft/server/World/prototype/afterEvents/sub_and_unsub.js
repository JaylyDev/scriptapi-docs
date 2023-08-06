import { world } from "@minecraft/server";

const callback = world.beforeEvents.itemUse.subscribe((event) => {}); // your event
world.beforeEvents.itemUse.unsubscribe(callback); // unsubscribe