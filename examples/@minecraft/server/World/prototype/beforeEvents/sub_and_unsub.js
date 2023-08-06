import { world } from "@minecraft/server";

const callback = world.afterEvents.buttonPush.subscribe((event) => {}); // event
world.afterEvents.buttonPush.unsubscribe(callback); // unsubscribe