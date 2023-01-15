import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import './pie-cart-basket-counter.scss';

function PieCartBasketCounter() {
  return (
    <div className="pie-cart-basket-counter">
      <button type="button" className="pie-cart-basket-counter__minus">
        <SvgSpriteIcon id={SvgSpriteIconId.Minus} width={15} height={15} />
      </button>
      <span className="pie-cart-basket-counter__count">2</span>
      <button type="button" className="pie-cart-basket-counter__plus">
        <SvgSpriteIcon id={SvgSpriteIconId.Plus} width={15} height={15} />
      </button>
    </div>
  );
}

export default PieCartBasketCounter;
