[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / BuiltInUIManager

# Interface: BuiltInUIManager

Represents a UI session for a given player

## Source

```ts
export interface BuiltInUIManager {
    activateTutorial(): void;
    navigateToDocumentation(): void;
    navigateToFeedback(): void;
    navigateToPauseScreen(): void;
    navigateToSamples(): void;
    saveAndExit(): void;
    updateLogPanelVisibility(visibility: boolean): void;
    updateUISettingsPanelVisibility(visibility: boolean): void;
    updateWelcomePanelVisibility(visibility: boolean): void;
}
```

## Methods

### activateTutorial()

> **activateTutorial**(): `void`

#### Returns

`void`

#### Remarks

Activates tutorial overlay

***

### navigateToDocumentation()

> **navigateToDocumentation**(): `void`

#### Returns

`void`

#### Remarks

Navigates to the documentation site.

***

### navigateToFeedback()

> **navigateToFeedback**(): `void`

#### Returns

`void`

#### Remarks

Navigates to the feedback site

***

### navigateToPauseScreen()

> **navigateToPauseScreen**(): `void`

#### Returns

`void`

#### Remarks

Navigates to the pause screen

***

### navigateToSamples()

> **navigateToSamples**(): `void`

#### Returns

`void`

#### Remarks

Navigates to the github-samples site

***

### saveAndExit()

> **saveAndExit**(): `void`

#### Returns

`void`

#### Remarks

Saves levels & exits back to Editor main menu.

***

### updateLogPanelVisibility()

> **updateLogPanelVisibility**(`visibility`): `void`

#### Parameters

##### visibility

`boolean`

#### Returns

`void`

#### Remarks

Updates the visibility of the log panel

***

### updateUISettingsPanelVisibility()

> **updateUISettingsPanelVisibility**(`visibility`): `void`

#### Parameters

##### visibility

`boolean`

#### Returns

`void`

#### Remarks

Updates the visibility of the control demo

***

### updateWelcomePanelVisibility()

> **updateWelcomePanelVisibility**(`visibility`): `void`

#### Parameters

##### visibility

`boolean`

#### Returns

`void`

#### Remarks

Updates the visibility of the welcome panel
