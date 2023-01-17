import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import './basket-pie-counter.scss';

function BasketPieCounter() {
  return (
    <div className="basket-pie-counter">
      <button type="button" className="btn-reset basket-pie-counter__minus">
        <SvgSpriteIcon
          id={SvgSpriteIconId.RightArrow}
          width={15}
          height={15}
          className="basket-pie-counter__btn-icon"
        />
      </button>
      <div className="basket-pie-counter__count">
        <span className="basket-pie-counter__count-text">2</span>
      </div>
      <button type="button" className="btn-reset basket-pie-counter__plus">
        <SvgSpriteIcon id={SvgSpriteIconId.RightArrow} width={15} height={15} />
      </button>
    </div>
  );
}

export default BasketPieCounter;
