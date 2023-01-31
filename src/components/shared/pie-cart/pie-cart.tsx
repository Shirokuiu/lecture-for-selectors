import { Button, Tooltip } from 'antd';
import { useState } from 'react';

import LeanTag from 'src/components/shared/lean-tag/lean-tag';
import PieCartBasketCounter from 'src/components/shared/pie-cart/pie-cart-basket-counter/pie-cart-basket-counter';
import PieCartFavoriteBtn from 'src/components/shared/pie-cart/pie-cart-favorite-btn/pie-cart-favorite-btn';
import PieCartHasInStock from 'src/components/shared/pie-cart/pie-cart-has-in-stock/pie-cart-has-in-stock';
import PieCartRate from 'src/components/shared/pie-cart/pie-cart-rate/pie-cart-rate';
import PieCartWeightChooser from 'src/components/shared/pie-cart/pie-cart-weight-chooser/pie-cart-weight-chooser';
import { IPieCart } from 'src/components/shared/pie-cart/types';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import { getFillingTitle } from 'src/helpers/get-filling-title';
import 'src/components/shared/pie-cart/pie-cart.scss';

function PieCart({
  pie,
  onAddToBasket = () => undefined,
  onFavoriteChange = () => undefined,
}: IPieCart) {
  const [selectedWeightPrice, updateSelectedWeightPrice] = useState<number>(
    pie.weight.selectedPrice,
  );
  const [pieCount, updatePieCount] = useState<number>(pie.count);

  const handleSelectedWeightPriceChange = (weightPrice: number) => {
    updateSelectedWeightPrice(weightPrice);
  };

  const handleCountChange = (count: number) => {
    updatePieCount(count);
  };

  const handleAddToBasket = () => {
    onAddToBasket({
      ...pie,
      weight: {
        ...pie.weight,
        selectedPrice: selectedWeightPrice,
      },
      count: pieCount,
    });
  };

  return (
    <div className="pie-cart">
      <div className="pie-cart__img-wrap">
        <PieCartFavoriteBtn
          isFavorite={pie.isFavorite}
          className="pie-cart__favorite-btn"
          onFavoriteChange={onFavoriteChange}
        />
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
        <p className="pie-cart__content-title">С {getFillingTitle(pie.filling).toUpperCase()}</p>
        <div className="pie-cart__weight">
          <div className="pie-cart__weigh-row-top">
            <PieCartHasInStock inStock={pie.inStock} />
            <p className="pie-cart__weight-title">выберите вес:</p>
          </div>
          <PieCartWeightChooser
            weight={pie.weight}
            disabled={!pie.inStock}
            onSelectChange={handleSelectedWeightPriceChange}
          />
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
            onClick={handleAddToBasket}
          >
            В КОРЗИНУ
          </Button>
          <PieCartBasketCounter
            count={pie.count}
            disabled={!pie.inStock}
            onCountChange={handleCountChange}
          />
        </div>
      </div>
    </div>
  );
}

export default PieCart;
