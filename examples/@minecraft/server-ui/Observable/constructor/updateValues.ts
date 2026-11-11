import { Observable } from "@minecraft/server-ui";
import { system, world } from "@minecraft/server";

// Create an Observable to track the number of entities in the dimension
const entityCount = Observable.create<number>(0);

// Update the value - UI automatically reflects the change
system.runInterval(() => {
  const entities = world.getDimension("overworld").getEntities();
  entityCount.setData(entities.length);
}, 20);
