import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import useCounter from 'src/hooks/use-counter';
import './pie-cart-basket-counter.scss';

function PieCartBasketCounter() {
  const { count, handleMinus, handlePlus } = useCounter(1);

  return (
    <div className="pie-cart-basket-counter">
      <button type="button" className="pie-cart-basket-counter__minus" onClick={handleMinus}>
        <SvgSpriteIcon id={SvgSpriteIconId.Minus} width={15} height={15} />
      </button>
      <span className="pie-cart-basket-counter__count">{count}</span>
      <button type="button" className="pie-cart-basket-counter__plus" onClick={handlePlus}>
        <SvgSpriteIcon id={SvgSpriteIconId.Plus} width={15} height={15} />
      </button>
    </div>
  );
}

export default PieCartBasketCounter;
