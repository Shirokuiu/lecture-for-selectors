import { Select } from 'antd';

import { PropsWithCssClassName } from 'src/type/shared';

function AppSelect({ className = '' }: PropsWithCssClassName) {
  return (
    <Select
      mode="multiple"
      allowClear
      showArrow
      style={{ width: '100%' }}
      placeholder="Please select"
      options={[{ disabled: false, label: 'Test', value: 1 }]}
      className={`app-select ${className}`.trim()}
    />
  );
}

export default AppSelect;
