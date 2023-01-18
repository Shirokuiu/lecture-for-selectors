import { PropsWithCssClassName } from 'src/type/shared';

export type IFavoriteIcon = PropsWithCssClassName<{
  mod?: FavoriteIconMod;
}>;

export enum FavoriteIconMod {
  Faded = 'faded',
}
