import { Rate } from 'antd';

import { Pie } from 'src/helpers/make-pies';

function PieCartRate({ rate }: Pick<Pie, 'rate'>) {
  return <Rate disabled allowHalf defaultValue={rate} />;
}

export default PieCartRate;
