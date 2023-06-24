const components = entity.getComponents();
console.log(`Number of components: ${components.length}: ${components.map(component => component.typeId)}`);