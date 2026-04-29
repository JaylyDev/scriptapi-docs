[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-gametest](../README.md) / PlayerSkinData

# Interface: PlayerSkinData

Data pertaining to a player's configured skin.

## Source

```ts
export interface PlayerSkinData {
    armSize?: PersonaArmSize;
    personaPieces?: PlayerPersonaPiece[];
    skinColor?: minecraftserver.RGB;
}
```

## Properties

### armSize?

> `optional` **armSize?**: [`PersonaArmSize`](../enumerations/PersonaArmSize.md)

***

### personaPieces?

> `optional` **personaPieces?**: [`PlayerPersonaPiece`](PlayerPersonaPiece.md)[]

***

### skinColor?

> `optional` **skinColor?**: [`RGB`](../../server/interfaces/RGB.md)
