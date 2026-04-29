[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayAnimationOptions

# Interface: PlayAnimationOptions

Contains additional options for how an animation is played.

## Properties

### blendOutTime?

> `optional` **blendOutTime?**: `number`

#### Remarks

Amount of time to fade out after an animation stops.

***

### controller?

> `optional` **controller?**: `string`

#### Remarks

Specifies a controller to use that has been defined on the
entity.

***

### nextState?

> `optional` **nextState?**: `string`

#### Remarks

Specifies the state to transition to.

***

### players?

> `optional` **players?**: [`Player`](../classes/Player-1.md)[]

#### Remarks

A list of players the animation will be visible to.

***

### stopExpression?

> `optional` **stopExpression?**: `string`

#### Remarks

Specifies a Molang expression for when this animation should
complete.
