import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import './basket.scss';
import { useState } from 'react';

import BasketDrawer from 'src/components/containers/basket/basket-drawer/basket-drawer';
import { useAppSelector } from 'src/hooks';
import { getBasketPiesCount } from 'src/store/slices/basket-slice/selectors';

function Basket() {
  const [isDrawerOpen, toggleDrawerOpen] = useState(false);
  const basketPiesCount = useAppSelector(getBasketPiesCount);

  const handleDrawerOpen = () => {
    toggleDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    toggleDrawerOpen(false);
  };

  return (
    <div className="basket">
      <button type="button" className="basket__btn" onClick={handleDrawerOpen}>
        <span className="basket__btn-badge">{basketPiesCount}</span>
        <SvgSpriteIcon
          id={SvgSpriteIconId.ShoppingCart}
          width={50}
          height={50}
          className="basket__btn-icon"
        />
        <span className="basket__btn-text">КОРЗИНА</span>
      </button>
      <BasketDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </div>
  );
}

export default Basket;
