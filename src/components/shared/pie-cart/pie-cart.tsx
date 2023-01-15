import { Button, Tooltip } from 'antd';

import FavoriteIcon from 'src/components/shared/favorite-icon/favorite-icon';
import PieCartBasketCounter from 'src/components/shared/pie-cart/pie-cart-basket-counter/pie-cart-basket-counter';
import PieCartHasInStock from 'src/components/shared/pie-cart/pie-cart-has-in-stock/pie-cart-has-in-stock';
import PieCartRate from 'src/components/shared/pie-cart/pie-cart-rate/pie-cart-rate';
import PieCartWeightChooser from 'src/components/shared/pie-cart/pie-cart-weight-chooser/pie-cart-weight-chooser';
import PostTag from 'src/components/shared/post-tag/post-tag';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import './pie-cart.scss';

function PieCart() {
  return (
    <div className="pie-cart">
      <div className="pie-cart__img-wrap">
        <Tooltip title="В ИЗБРАННОЕ">
          <FavoriteIcon className="pie-cart__favorite-btn" />
        </Tooltip>
        <Tooltip title="ПОСТНЫЙ">
          <PostTag className="pie-cart__post-tag" />
        </Tooltip>
        <img
          src={`${process.env.PUBLIC_URL}/img/apple.jpg`}
          alt="Картинка"
          className="pie-cart__img"
        />
      </div>
      <div className="pie-cart__content">
        <div className="pie-cart__rate-wrap">
          <p className="pie-cart__rate-title">Осетинский пирог</p>
          <PieCartRate />
        </div>
        <p className="pie-cart__content-title">С МЯСОМ «ФЫДДЖИН»</p>
        <div className="pie-cart__weight">
          <div className="pie-cart__weigh-row-top">
            <PieCartHasInStock />
            <p className="pie-cart__weight-title">выберите вес:</p>
          </div>
          <PieCartWeightChooser />
        </div>
        <div className="pie-cart__add-to-basket">
          <Button
            type="primary"
            icon={
              <SvgSpriteIcon
                id={SvgSpriteIconId.ShoppingCartBtn}
                className="pie-cart__add-to-basket-btn-icon"
              />
            }
          >
            В КОРЗИНУ
          </Button>
          <PieCartBasketCounter />
        </div>
      </div>
    </div>
  );
}

export default PieCart;
