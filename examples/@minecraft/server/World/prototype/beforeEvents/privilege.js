import { world, system, TimeOfDay } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe(event => {
	event.cancel = true;
  // setTime changes world state, must be run after its execution by a tick
	system.run(() => {
		world.setTimeOfDay(TimeOfDay.Night);
	});
});
