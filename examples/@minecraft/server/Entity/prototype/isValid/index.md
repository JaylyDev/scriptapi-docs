# isValid() Method to Property Migration (v1 to v2)

In v2, `isValid()` method has been changed to `isValid` property for all components and entities.

## V1 Example (Legacy)
```javascript
// Method call
if (entity.isValid()) {
  // Entity is valid
}

// Component example
component.isValid();
```

## V2 Example (Current)
```javascript
// Property access
if (entity.isValid) {
  // Entity is valid
}

// Component example
component.isValid;
```

## Key Changes
- **Method to Property**: Remove parentheses `()` after `isValid`
- **Return Value**: Same boolean result, just different access pattern
- **Applies to**: All entities, components, and structures
