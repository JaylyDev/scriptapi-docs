const getEntityHealthComponent = entity.getComponent("health");
getEntityHealthComponent.currentValue;
getEntityHealthComponent.defaultValue;
getEntityHealthComponent.effectiveMax;
getEntityHealthComponent.effectiveMin;
getEntityHealthComponent.resetToDefaultValue();
getEntityHealthComponent.resetToMaxValue();
getEntityHealthComponent.resetToMinValue();
getEntityHealthComponent.setCurrentValue(100); // Assuming 100 as an example value

// Custom function to check if the health attribute is within a valid range
function isValidHealthValue(value) {
  return value >= getEntityHealthComponent.effectiveMin && value <= getEntityHealthComponent.effectiveMax;
}

// Example usage of the custom isValidHealthValue function
const newHealthValue = 80;
if (isValidHealthValue(newHealthValue)) {
  getEntityHealthComponent.setCurrentValue(newHealthValue);
}
