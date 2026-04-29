[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ThemeSettings

# Class: ThemeSettings

## Constructors

### Constructor

> `private` **new ThemeSettings**(): `ThemeSettings`

#### Returns

`ThemeSettings`

## Methods

### addNewTheme()

> **addNewTheme**(`id`, `name?`, `sourceThemeId?`): `void`

#### Parameters

##### id

`string`

##### name?

`string`

##### sourceThemeId?

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### canThemeBeModified()

> **canThemeBeModified**(`id`): `boolean`

#### Parameters

##### id

`string`

#### Returns

`boolean`

***

### deleteTheme()

> **deleteTheme**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getCurrentTheme()

> **getCurrentTheme**(): `string`

#### Returns

`string`

***

### getThemeColors()

> **getThemeColors**(`id`): `Record`\<`string`, [`RGBA`](../../server/interfaces/RGBA.md)\> \| `undefined`

#### Parameters

##### id

`string`

#### Returns

`Record`\<`string`, [`RGBA`](../../server/interfaces/RGBA.md)\> \| `undefined`

***

### getThemeIdList()

> **getThemeIdList**(): `string`[]

#### Returns

`string`[]

***

### getThemeName()

> **getThemeName**(`id`): `string`

#### Parameters

##### id

`string`

#### Returns

`string`

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### resolveColorKey()

> **resolveColorKey**(`key`): [`RGBA`](../../server/interfaces/RGBA.md)

#### Parameters

##### key

[`ThemeSettingsColorKey`](../enumerations/ThemeSettingsColorKey.md)

#### Returns

[`RGBA`](../../server/interfaces/RGBA.md)

***

### setCurrentTheme()

> **setCurrentTheme**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setThemeName()

> **setThemeName**(`id`, `name`): `void`

#### Parameters

##### id

`string`

##### name

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### updateThemeColor()

> **updateThemeColor**(`id`, `key`, `newColor`): `void`

#### Parameters

##### id

`string`

##### key

[`ThemeSettingsColorKey`](../enumerations/ThemeSettingsColorKey.md)

##### newColor

[`RGBA`](../../server/interfaces/RGBA.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
