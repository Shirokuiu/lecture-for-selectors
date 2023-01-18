import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';
import 'src/components/shared/pie-cart/pie-cart-has-in-stock/pie-cart-has-in-stock.scss';

function PieCartHasInStock({ inStock }: Pick<MappedPie, 'inStock'>) {
  return (
    <p className="pie-cart-has-in-stock">
      {inStock && (
        <SvgSpriteIcon
          id={SvgSpriteIconId.CorrectSymbol}
          height={15}
          width={15}
          className="pie-cart-has-in-stock__icon"
        />
      )}
      <span
        className={`pie-cart-has-in-stock__text ${
          !inStock ? 'pie-cart-has-in-stock__text--danger' : ''
        }`.trim()}
      >
        {inStock ? 'доступно для заказа' : 'нет в наличии'}
      </span>
    </p>
  );
}

export default PieCartHasInStock;
