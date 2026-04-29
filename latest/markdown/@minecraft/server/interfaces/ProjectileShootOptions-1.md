[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ProjectileShootOptions

# Interface: ProjectileShootOptions

Optional arguments for
@minecraft/server.EntityProjectileComponent.shoot.

## Source

```ts
export interface ProjectileShootOptions {
    uncertainty?: number;
}
```

## Properties

### uncertainty?

> `optional` **uncertainty?**: `number`

#### Remarks

Controls the accuracy of the shot. A value of 0 is perfect
accuracy.
