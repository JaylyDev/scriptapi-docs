const getEntityLeashableComponent = entity.getComponent("leashable");
getEntityLeashableComponent.softDistance;
getEntityLeashableComponent.leash(leashHolderEntity); // Assuming you have an 'leashHolderEntity' instance
getEntityLeashableComponent.unleash();
getEntityLeashableComponent.isValid();
