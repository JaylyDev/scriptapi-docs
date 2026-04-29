[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / PrefabManager

# Class: PrefabManager

## Constructors

### Constructor

> `private` **new PrefabManager**(): `PrefabManager`

#### Returns

`PrefabManager`

## Properties

### instanceInteractionEvents

> `readonly` **instanceInteractionEvents**: [`PrefabServiceInstanceInteractionEvent`](PrefabServiceInstanceInteractionEvent.md)

## Methods

### beginCapturingMouseClicks()

> **beginCapturingMouseClicks**(): `void`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### clearSelectedInstances()

> **clearSelectedInstances**(): `void`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### cloneTemplate()

> **cloneTemplate**(`templateOrMetadataToClone`, `newName`, `optionalNewDisplayName?`): [`PrefabTemplate`](PrefabTemplate.md)

#### Parameters

##### templateOrMetadataToClone

[`PrefabTemplate`](PrefabTemplate.md) \| [`PrefabTemplateMetadata`](../interfaces/PrefabTemplateMetadata.md)

##### newName

`string`

##### optionalNewDisplayName?

`string`

#### Returns

[`PrefabTemplate`](PrefabTemplate.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

Error

[PrefabErrorInvalidName](PrefabErrorInvalidName.md)

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

[PrefabServiceError](PrefabServiceError.md)

[PrefabTemplateExists](PrefabTemplateExists.md)

[PrefabTemplateNotFound](PrefabTemplateNotFound.md)

#### World Ready

This function can't be called in early-execution mode.

***

### createTemplate()

> **createTemplate**(`name`, `options?`): [`PrefabTemplate`](PrefabTemplate.md)

#### Parameters

##### name

`string`

##### options?

[`PrefabServiceCreateTemplateOptions`](../interfaces/PrefabServiceCreateTemplateOptions.md)

#### Returns

[`PrefabTemplate`](PrefabTemplate.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

Error

[PrefabErrorInvalidName](PrefabErrorInvalidName.md)

[PrefabErrorStringInvalidLength](PrefabErrorStringInvalidLength.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### deleteInstance()

> **deleteInstance**(`instance`): `void`

#### Parameters

##### instance

[`PrefabTemplateInstance`](PrefabTemplateInstance.md)

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidInstance](PrefabErrorInvalidInstance.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### deleteTemplate()

> **deleteTemplate**(`templateOrMetadata`): `void`

#### Parameters

##### templateOrMetadata

[`PrefabTemplate`](PrefabTemplate.md) \| [`PrefabTemplateMetadata`](../interfaces/PrefabTemplateMetadata.md)

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidName](PrefabErrorInvalidName.md)

[PrefabErrorInvalidTemplate](PrefabErrorInvalidTemplate.md)

[PrefabServiceError](PrefabServiceError.md)

[PrefabTemplateNotFound](PrefabTemplateNotFound.md)

#### World Ready

This function can't be called in early-execution mode.

***

### deselectInstance()

> **deselectInstance**(`instance`): `void`

#### Parameters

##### instance

[`PrefabTemplateInstance`](PrefabTemplateInstance.md)

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidInstance](PrefabErrorInvalidInstance.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### endCapturingMouseClicks()

> **endCapturingMouseClicks**(): `void`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTemplate()

> **getTemplate**(`searchMetadata_or_fullyQualifiedName`): [`PrefabTemplate`](PrefabTemplate.md)

#### Parameters

##### searchMetadata\_or\_fullyQualifiedName

`string` \| [`PrefabTemplateMetadata`](../interfaces/PrefabTemplateMetadata.md)

#### Returns

[`PrefabTemplate`](PrefabTemplate.md)

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

Error

[PrefabErrorInvalidName](PrefabErrorInvalidName.md)

[PrefabServiceError](PrefabServiceError.md)

[PrefabTemplateNotFound](PrefabTemplateNotFound.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTemplateList()

> **getTemplateList**(): [`PrefabTemplateMetadata`](../interfaces/PrefabTemplateMetadata.md)[]

#### Returns

[`PrefabTemplateMetadata`](../interfaces/PrefabTemplateMetadata.md)[]

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### selectInstance()

> **selectInstance**(`instance`, `append`): `void`

#### Parameters

##### instance

[`PrefabTemplateInstance`](PrefabTemplateInstance.md)

##### append

`boolean`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

[PrefabErrorInvalidInstance](PrefabErrorInvalidInstance.md)

[PrefabServiceError](PrefabServiceError.md)

#### World Ready

This function can't be called in early-execution mode.
