import { EntityHealthComponent, world } from "@minecraft/server";

for (const entity of world.getDimension('overworld').getEntities()) {
  const health = entity.getComponent(EntityHealthComponent.componentId) as EntityHealthComponent;
  entity.nameTag = health.currentValue.toString();
}