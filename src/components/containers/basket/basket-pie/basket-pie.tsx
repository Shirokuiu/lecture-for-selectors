import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import BasketPieCounter from 'src/components/containers/basket/basket-pie-counter/basket-pie-counter';
import { IBasketPie } from 'src/components/containers/basket/basket-pie/types';
import { getFillingTitle } from 'src/helpers/get-filling-title';
import './basket-pie.scss';

function BasketPie({
  pie,
  onRemove = () => undefined,
  onCountChange = () => undefined,
}: IBasketPie) {
  return (
    <div className="basket-pie">
      <div className="basket-pie__img-wrap">
        <img
          src={`${process.env.PUBLIC_URL}${pie.img}`}
          alt="Пирог"
          width={60}
          height={40}
          className="basket-pie__img"
        />
      </div>
      <p className="tp-reset basket-pie__title">
        Осетинский пирог с {getFillingTitle(pie.filling)}
      </p>
      <BasketPieCounter
        count={pie.count}
        onCountChange={(count) => onCountChange({ id: pie.id, count })}
      />
      <p className="tp-reset basket-pie__price">{pie.totalPrice} руб.</p>
      <Button
        type="text"
        icon={<CloseOutlined />}
        className="btn-reset"
        onClick={() => onRemove(pie.id)}
      />
    </div>
  );
}

export default BasketPie;
