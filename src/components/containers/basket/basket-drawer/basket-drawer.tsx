import { Drawer } from 'antd';

import { IBasketDrawer } from 'src/components/containers/basket/basket-drawer/types';
import BasketItems from 'src/components/containers/basket/basket-items/basket-items';
import { useAppSelector } from 'src/hooks';
import { getBasketTotalPrice } from 'src/store/slices/basket-slice/selectors';
import './basket-drawer.scss';

function BasketDrawer({ isOpen = false, onClose = () => undefined }: IBasketDrawer) {
  const totalPrice = useAppSelector(getBasketTotalPrice);

  return (
    <Drawer
      title="ВАША КОРЗИНА"
      placement="right"
      width={529}
      onClose={onClose}
      open={isOpen}
      className="basket-drawer"
    >
      <BasketItems />
      <p className="basket-drawer__total-price">
        Итого:{' '}
        <span className="basket-drawer__total-price-currency">
          {totalPrice.toLocaleString('ru-RU')} руб.
        </span>
      </p>
    </Drawer>
  );
}

export default BasketDrawer;
