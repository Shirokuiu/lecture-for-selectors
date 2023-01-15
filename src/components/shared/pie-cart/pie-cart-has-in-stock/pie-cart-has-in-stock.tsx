import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import './pie-cart-has-in-stock.scss';

function PieCartHasInStock() {
  return (
    <p className="pie-cart-has-in-stock">
      <SvgSpriteIcon
        id={SvgSpriteIconId.CorrectSymbol}
        height={15}
        width={15}
        className="pie-cart-has-in-stock__icon"
      />
      <span className="pie-cart-has-in-stock__text">доступно для заказа</span>
    </p>
  );
}

export default PieCartHasInStock;
