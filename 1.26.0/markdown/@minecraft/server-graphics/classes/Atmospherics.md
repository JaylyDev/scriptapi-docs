[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-graphics](../README.md) / Atmospherics

# Class: Atmospherics

Used to affect atmospheric scattering for Vibrant Visuals

## Constructors

### Constructor

> `private` **new Atmospherics**(): `Atmospherics`

#### Returns

`Atmospherics`

## Methods

### resetHorizonBlendMax()

> **resetHorizonBlendMax**(`biomeIdentifier`): `void`

#### Parameters

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. If the corresponding biome has had its
horizon blend max overriden using scripting, then the
override value will be removed and the biome will use the
value provided by json

#### Returns

`void`

#### Remarks

Resets the horizon blend max to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetHorizonBlendMieStart()

> **resetHorizonBlendMieStart**(`biomeIdentifier`): `void`

#### Parameters

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. If the corresponding biome has had its
horizon blend mie start overriden using scripting, then the
override value will be removed and the biome will use the
value provided by json

#### Returns

`void`

#### Remarks

Resets the horizon blend mie start to the value set by
resource packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetHorizonBlendMin()

> **resetHorizonBlendMin**(`biomeIdentifier`): `void`

#### Parameters

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. If the corresponding biome has had its
horizon blend min overriden using scripting, then the
override value will be removed and the biome will use the
value provided by json

#### Returns

`void`

#### Remarks

Resets the horizon blend min to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetHorizonBlendStart()

> **resetHorizonBlendStart**(`biomeIdentifier`): `void`

#### Parameters

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. If the corresponding biome has had its
horizon blend start overriden using scripting, then the
override value will be removed and the biome will use the
value provided by json

#### Returns

`void`

#### Remarks

Resets the horizon blend start to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetMoonMieStrength()

> **resetMoonMieStrength**(`biomeIdentifier`): `void`

#### Parameters

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. If the corresponding biome has had its
moon mie strength overriden using scripting, then the
override value will be removed and the biome will use the
value provided by json

#### Returns

`void`

#### Remarks

Resets the moon mie strength to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetRayleighStrength()

> **resetRayleighStrength**(`biomeIdentifier`): `void`

#### Parameters

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. If the corresponding biome has had its
rayleigh strength overriden using scripting, then the
override value will be removed and the biome will use the
value provided by json

#### Returns

`void`

#### Remarks

Resets the rayleigh strength to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetSkyHorizonColor()

> **resetSkyHorizonColor**(`biomeIdentifier`): `void`

#### Parameters

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. If the corresponding biome has had its sky
horizon color overriden using scripting, then the override
value will be removed and the biome will use the value
provided by json

#### Returns

`void`

#### Remarks

Resets the sky horizon color to the color set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetSkyZenithColor()

> **resetSkyZenithColor**(`biomeIdentifier`): `void`

#### Parameters

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. If the corresponding biome has had its sky
zenith color overriden using scripting, then the override
value will be removed and the biome will use the value
provided by json

#### Returns

`void`

#### Remarks

Resets the sky zenith color to the color set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetSunGlareShape()

> **resetSunGlareShape**(`biomeIdentifier`): `void`

#### Parameters

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. If the corresponding biome has had its sun
glare shape overriden using scripting, then the override
value will be removed and the biome will use the value
provided by json

#### Returns

`void`

#### Remarks

Resets the sun glare shape to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetSunMieStrength()

> **resetSunMieStrength**(`biomeIdentifier`): `void`

#### Parameters

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. If the corresponding biome has had its sun
mie strength overriden using scripting, then the override
value will be removed and the biome will use the value
provided by json

#### Returns

`void`

#### Remarks

Resets the sun mie strength to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### setHorizonBlendMax()

> **setHorizonBlendMax**(`blendMax`, `biomeIdentifier`): `void`

#### Parameters

##### blendMax

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,1]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,1])

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. The horizon blend max will be set for the
specified biome.

#### Returns

`void`

#### Remarks

Sets the horizon blend max for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setHorizonBlendMieStart()

> **setHorizonBlendMieStart**(`blendMieStart`, `biomeIdentifier`): `void`

#### Parameters

##### blendMieStart

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,1.2]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,1.2])

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. The horizon blend mie start will be set
for the specified biome.

#### Returns

`void`

#### Remarks

Sets the horizon blend mie start for atmospheric scattering
in Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setHorizonBlendMin()

> **setHorizonBlendMin**(`blendMin`, `biomeIdentifier`): `void`

#### Parameters

##### blendMin

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,1]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,1])

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. The horizon blend min will be set for the
specified biome.

#### Returns

`void`

#### Remarks

Sets the horizon blend min for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setHorizonBlendStart()

> **setHorizonBlendStart**(`blendStart`, `biomeIdentifier`): `void`

#### Parameters

##### blendStart

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,1]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,1])

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. The horizon blend start will be set for
the specified biome.

#### Returns

`void`

#### Remarks

Sets the horizon blend start for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setMoonMieStrength()

> **setMoonMieStrength**(`moonMieStrength`, `biomeIdentifier`): `void`

#### Parameters

##### moonMieStrength

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,60]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,60])

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. The moon mie strength will be set for the
specified biome.

#### Returns

`void`

#### Remarks

Sets the moon mie strength for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setRayleighStrength()

> **setRayleighStrength**(`rayleighStrength`, `biomeIdentifier`): `void`

#### Parameters

##### rayleighStrength

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,11]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,11])

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. The rayleigh strength will be set for the
specified biome.

#### Returns

`void`

#### Remarks

Sets the rayleigh strength for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setSkyHorizonColor()

> **setSkyHorizonColor**(`color`, `biomeIdentifier`): `void`

#### Parameters

##### color

[`RGB`](../../server/interfaces/RGB.md) \| `Record`\<`number`, [`RGB`](../../server/interfaces/RGB.md)\>

Either a RGB triplet or a set of keyframes. The keyframes
are composed of key value pairs. The key is a number (range
[0,1]) to signify a time of day (0.0 and 1.0 are noon, 0.25
is sunset, 0.5 is midnight, and 0.75 is sunrise). The value
is a RGB triplet

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. The sky horizon color will be set for the
specified biome.

#### Returns

`void`

#### Remarks

Sets the sky horizon color for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setSkyZenithColor()

> **setSkyZenithColor**(`color`, `biomeIdentifier`): `void`

#### Parameters

##### color

[`RGB`](../../server/interfaces/RGB.md) \| `Record`\<`number`, [`RGB`](../../server/interfaces/RGB.md)\>

Either a RGB triplet or a set of keyframes. The keyframes
are composed of key value pairs. The key is a float in the
range 0-1 to signify a time of day and the value is a RGB
triplet

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. The sky zenith color will be set for the
specified biome.

#### Returns

`void`

#### Remarks

Sets the sky zenith color for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setSunGlareShape()

> **setSunGlareShape**(`sunGlareShape`, `biomeIdentifier`): `void`

#### Parameters

##### sunGlareShape

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,50]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,50])

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. The sun glare shape will be set for the
specified biome.

#### Returns

`void`

#### Remarks

Sets the sun glare shape for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setSunMieStrength()

> **setSunMieStrength**(`sunMieStrength`, `biomeIdentifier`): `void`

#### Parameters

##### sunMieStrength

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,60]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,60])

##### biomeIdentifier

[`BiomeType`](../../server/classes/BiomeType.md)

Biome Identifier. The sun mie will be set for the specified
biome.

#### Returns

`void`

#### Remarks

Sets the sun mie strength for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)
