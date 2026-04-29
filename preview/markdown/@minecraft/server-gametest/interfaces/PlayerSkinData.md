[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-gametest](../README.md) / PlayerSkinData

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
