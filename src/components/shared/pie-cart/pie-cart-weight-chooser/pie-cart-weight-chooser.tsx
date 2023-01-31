import { Radio, RadioChangeEvent } from 'antd';
import { useState } from 'react';

import { IPieCartWeightChooser } from 'src/components/shared/pie-cart/pie-cart-weight-chooser/types';
import 'src/components/shared/pie-cart/pie-cart-weight-chooser/pie-cart-weight-chooser.scss';

function PieCartWeightChooser({
  weight,
  disabled,
  onSelectChange = () => undefined,
}: IPieCartWeightChooser) {
  const [value, setValue] = useState<number>(weight.selectedPrice);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    onSelectChange(e.target.value);
  };

  return (
    <Radio.Group
      disabled={disabled}
      onChange={onChange}
      value={value}
      className="pie-cart-weight-chooser"
    >
      {weight.items.map((pieWeight) => (
        <Radio key={pieWeight.id} value={pieWeight.price} className="pie-cart-weight-chooser__item">
          <span className="pie-cart-weight-chooser__title">{pieWeight.count} гр.</span>
          <span className="pie-cart-weight-chooser__text">{pieWeight.price} руб.</span>
        </Radio>
      ))}
    </Radio.Group>
  );
}

export default PieCartWeightChooser;
