import { PropsWithCssClassName } from 'src/type/shared';

export type SvgSpriteIconProps = PropsWithCssClassName<{
  id: SvgSpriteIconId;
  width?: number;
  height?: number;
}>;

export enum SvgSpriteIconId {
  ShoppingCart = 'shopping-cart',
  Like = 'like',
  CloseButton = 'close-button',
  ShoppingCartBtn = 'shopping-cart-btn',
  Leaf = 'leaf',
  CorrectSymbol = 'correct-symbol',
  Minus = 'minus',
  Plus = 'plus',
}

export enum SvgSpriteIconSize {
  S = 10,
  M = 20,
  L = 40,
}
