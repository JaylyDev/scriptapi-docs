import { WeatherType, system, world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((event) => {
  const { message, sender } = event;

  if (message === '!weather clear') {
    system.run(() => {
      sender.dimension.setWeather(WeatherType.clear);
    });
  };
});