import { EquipmentSlot } from "@minecraft/server";

const equippable = entity.getComponent("minecraft:equippable");
equippable.getEquipment(EquipmentSlot.Mainhand);
const equipmentSlot = EquipmentSlot.Head;
equippable.getEquipmentSlot(equipmentSlot);
equippable.setEquipment(EquipmentSlot.Offhand); // Assuming undefined (empty slot) as an example
