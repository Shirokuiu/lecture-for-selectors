import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import './basket.scss';

function Basket() {
  return (
    <div className="basket">
      <button type="button" className="basket__btn">
        <span className="basket__btn-badge">8</span>
        <SvgSpriteIcon
          id={SvgSpriteIconId.ShoppingCart}
          width={50}
          height={50}
          className="basket__btn-icon"
        />
        <span className="basket__btn-text">КОРЗИНА</span>
      </button>
    </div>
  );
}

export default Basket;
