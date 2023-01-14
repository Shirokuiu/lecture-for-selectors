import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';

function PieCartHasInStock() {
  return (
    <p className="pie-cart-has-in-stock">
      <SvgSpriteIcon id={SvgSpriteIconId.Like} height={15} width={15} />
      <span className="pie-cart-has-in-stock__text">доступно для заказа</span>
    </p>
  );
}

export default PieCartHasInStock;
