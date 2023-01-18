import { Button, Tooltip } from 'antd';

import LeanTag from 'src/components/shared/lean-tag/lean-tag';
import { getFillingTitle } from 'src/components/shared/pie-cart/helpers/get-filling-title';
import PieCartBasketCounter from 'src/components/shared/pie-cart/pie-cart-basket-counter/pie-cart-basket-counter';
import PieCartFavoriteBtn from 'src/components/shared/pie-cart/pie-cart-favorite-btn/pie-cart-favorite-btn';
import PieCartHasInStock from 'src/components/shared/pie-cart/pie-cart-has-in-stock/pie-cart-has-in-stock';
import PieCartRate from 'src/components/shared/pie-cart/pie-cart-rate/pie-cart-rate';
import PieCartWeightChooser from 'src/components/shared/pie-cart/pie-cart-weight-chooser/pie-cart-weight-chooser';
import { IPieCart } from 'src/components/shared/pie-cart/types';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import 'src/components/shared/pie-cart/pie-cart.scss';

function PieCart({ pie }: IPieCart) {
  return (
    <div className="pie-cart">
      <div className="pie-cart__img-wrap">
        <PieCartFavoriteBtn isFavorite={pie.isFavorite} className="pie-cart__favorite-btn" />
        {pie.isLean && (
          <Tooltip title="ПОСТНЫЙ">
            <LeanTag className="pie-cart__lean-tag" />
          </Tooltip>
        )}
        <img src={`${process.env.PUBLIC_URL}${pie.img}`} alt="Картинка" className="pie-cart__img" />
      </div>
      <div className="pie-cart__content">
        <div className="pie-cart__rate-wrap">
          <p className="pie-cart__rate-title">Осетинский пирог</p>
          <PieCartRate rate={pie.rate} />
        </div>
        <p className="pie-cart__content-title">С {getFillingTitle(pie.filling)}</p>
        <div className="pie-cart__weight">
          <div className="pie-cart__weigh-row-top">
            <PieCartHasInStock inStock={pie.inStock} />
            <p className="pie-cart__weight-title">выберите вес:</p>
          </div>
          <PieCartWeightChooser weights={pie.weights} disabled={!pie.inStock} />
        </div>
        <div className="pie-cart__add-to-basket">
          <Button
            type="primary"
            disabled={!pie.inStock}
            icon={
              <SvgSpriteIcon
                id={SvgSpriteIconId.ShoppingCartBtn}
                className="pie-cart__add-to-basket-btn-icon"
              />
            }
          >
            В КОРЗИНУ
          </Button>
          <PieCartBasketCounter count={pie.count} disabled={!pie.inStock} />
        </div>
      </div>
    </div>
  );
}

export default PieCart;
