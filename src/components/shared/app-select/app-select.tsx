import { Select } from 'antd';
import { SelectProps } from 'antd/es/select';

import { PropsWithCssClassName } from 'src/type/shared';

function AppSelect({ className = '', ...selectProps }: PropsWithCssClassName<SelectProps>) {
  return (
    <Select
      allowClear
      showArrow
      style={{ width: '100%' }}
      className={`app-select ${className}`.trim()}
      {...selectProps}
    />
  );
}

export default AppSelect;
