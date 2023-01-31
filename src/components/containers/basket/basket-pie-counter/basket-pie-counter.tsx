import { IBasketPieCounter } from 'src/components/containers/basket/basket-pie-counter/types';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import useCounter from 'src/hooks/use-counter';
import './basket-pie-counter.scss';

function BasketPieCounter({
  count: startCount,
  onCountChange = () => undefined,
}: IBasketPieCounter) {
  const { count, handleMinus, handlePlus } = useCounter(startCount);

  const handleMinusClick = () => {
    handleMinus((res) => {
      onCountChange(res);
    });
  };

  const handlePlusClick = () => {
    handlePlus((res) => {
      onCountChange(res);
    });
  };

  return (
    <div className="basket-pie-counter">
      <button
        type="button"
        className="btn-reset basket-pie-counter__minus"
        onClick={handleMinusClick}
      >
        <SvgSpriteIcon
          id={SvgSpriteIconId.RightArrow}
          width={15}
          height={15}
          className="basket-pie-counter__btn-icon"
        />
      </button>
      <div className="basket-pie-counter__count">
        <span className="basket-pie-counter__count-text">{count}</span>
      </div>
      <button
        type="button"
        className="btn-reset basket-pie-counter__plus"
        onClick={handlePlusClick}
      >
        <SvgSpriteIcon id={SvgSpriteIconId.RightArrow} width={15} height={15} />
      </button>
    </div>
  );
}

export default BasketPieCounter;
