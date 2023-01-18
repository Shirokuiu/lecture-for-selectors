import PieCart from 'src/components/shared/pie-cart/pie-cart';
import { IPiesCartList } from 'src/components/shared/pies-cart-list/types';
import 'src/components/shared/pies-cart-list/pies-cart-list.scss';

function PiesCartList({ pies }: IPiesCartList) {
  return (
    <ul className="pies-cart-list">
      {pies.map((pie) => (
        <li key={pie.id} className="pies-cart-list__item">
          <PieCart pie={pie} />
        </li>
      ))}
    </ul>
  );
}

export default PiesCartList;
