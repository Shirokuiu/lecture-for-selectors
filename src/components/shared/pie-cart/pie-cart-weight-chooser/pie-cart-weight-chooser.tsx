import { Radio, RadioChangeEvent } from 'antd';
import { useState } from 'react';

import './pie-cart-weight-chooser.scss';

function PieCartWeightChooser() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value} className="pie-cart-weight-chooser">
      <Radio value={1} className="pie-cart-weight-chooser__item">
        <span className="pie-cart-weight-chooser__title">1000 гр.</span>
        <span className="pie-cart-weight-chooser__text">670 руб.</span>
      </Radio>
      <Radio value={2} className="pie-cart-weight-chooser__item">
        <span className="pie-cart-weight-chooser__title">1200 гр.</span>
        <span className="pie-cart-weight-chooser__text">870 руб.</span>
      </Radio>
      <Radio value={3} className="pie-cart-weight-chooser__item">
        <span className="pie-cart-weight-chooser__title">1400 гр.</span>
        <span className="pie-cart-weight-chooser__text">940 руб..</span>
      </Radio>
    </Radio.Group>
  );
}

export default PieCartWeightChooser;
