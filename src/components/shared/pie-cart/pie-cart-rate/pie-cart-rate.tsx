import { Rate } from 'antd';

import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

function PieCartRate({ rate }: Pick<MappedPie, 'rate'>) {
  return <Rate disabled allowHalf defaultValue={rate} />;
}

export default PieCartRate;
