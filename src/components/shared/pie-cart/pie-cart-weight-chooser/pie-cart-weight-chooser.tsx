import { Radio, RadioChangeEvent } from 'antd';
import { useState } from 'react';

import { getCheckedWeight } from 'src/components/shared/pie-cart/helpers/get-checked-weight';
import { IPieCartWeightChooser } from 'src/components/shared/pie-cart/pie-cart-weight-chooser/types';
import 'src/components/shared/pie-cart/pie-cart-weight-chooser/pie-cart-weight-chooser.scss';

function PieCartWeightChooser({ weights, disabled }: IPieCartWeightChooser) {
  const [value, setValue] = useState(getCheckedWeight(weights));

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group
      disabled={disabled}
      onChange={onChange}
      value={value}
      className="pie-cart-weight-chooser"
    >
      {weights.map((weight) => (
        <Radio key={weight.id} value={weight.price} className="pie-cart-weight-chooser__item">
          <span className="pie-cart-weight-chooser__title">{weight.count} гр.</span>
          <span className="pie-cart-weight-chooser__text">{weight.price} руб.</span>
        </Radio>
      ))}
    </Radio.Group>
  );
}

export default PieCartWeightChooser;
