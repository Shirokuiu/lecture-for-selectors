import { IPieCartBasketCounter } from 'src/components/shared/pie-cart/pie-cart-basket-counter/types';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import useCounter from 'src/hooks/use-counter';
import 'src/components/shared/pie-cart/pie-cart-basket-counter/pie-cart-basket-counter.scss';

function PieCartBasketCounter({ count, disabled }: IPieCartBasketCounter) {
  const { count: counter, handleMinus, handlePlus } = useCounter(count);

  return (
    <div
      className={`pie-cart-basket-counter ${
        disabled ? 'pie-cart-basket-counter--disabled' : ''
      }`.trim()}
    >
      <button
        disabled={disabled}
        type="button"
        className="pie-cart-basket-counter__minus"
        onClick={handleMinus}
      >
        <SvgSpriteIcon id={SvgSpriteIconId.Minus} width={15} height={15} />
      </button>
      <span className="pie-cart-basket-counter__count">{counter}</span>
      <button
        disabled={disabled}
        type="button"
        className="pie-cart-basket-counter__plus"
        onClick={handlePlus}
      >
        <SvgSpriteIcon id={SvgSpriteIconId.Plus} width={15} height={15} />
      </button>
    </div>
  );
}

export default PieCartBasketCounter;
