import { Drawer } from 'antd';

import { IBasketDrawer } from 'src/components/containers/basket/basket-drawer/types';
import BasketItems from 'src/components/containers/basket/basket-items/basket-items';
import './basket-drawer.scss';

function BasketDrawer({ isOpen = false, onClose = () => undefined }: IBasketDrawer) {
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
    </Drawer>
  );
}

export default BasketDrawer;
