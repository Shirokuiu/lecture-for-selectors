import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import BasketPieCounter from 'src/components/containers/basket/basket-pie-counter/basket-pie-counter';
import './basket-pie.scss';

function BasketPie() {
  return (
    <div className="basket-pie">
      <div className="basket-pie__img-wrap">
        <img
          src={`${process.env.PUBLIC_URL}/img/apple.jpg`}
          alt="Пирог"
          width={60}
          height={40}
          className="basket-pie__img"
        />
      </div>
      <p className="tp-reset basket-pie__title">Осетинский пирог с курицей и кабачками</p>
      <BasketPieCounter />
      <p className="tp-reset basket-pie__price">940 руб.</p>
      <Button type="text" icon={<CloseOutlined />} className="btn-reset" />
    </div>
  );
}

export default BasketPie;
