const getEntityEquipmentInventoryComponent = entity.getComponent("equipment_inventory");
getEntityEquipmentInventoryComponent.getEquipment(EquipmentSlot.MainHand);
const equipmentSlot = EquipmentSlot.Head;
getEntityEquipmentInventoryComponent.getEquipmentSlot(equipmentSlot);
getEntityEquipmentInventoryComponent.setEquipment(EquipmentSlot.OffHand); // Assuming undefined (empty slot) as an example
