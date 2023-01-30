import PieCart from 'src/components/shared/pie-cart/pie-cart';
import { IPiesCartList } from 'src/components/shared/pies-cart-list/types';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';
import 'src/components/shared/pies-cart-list/pies-cart-list.scss';

function PiesCartList({ pies }: IPiesCartList) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAddToBasket = (_pie: MappedPie) => {
    // console.log(pie);
  };

  return (
    <ul className="pies-cart-list">
      {pies.map((pie) => (
        <li key={pie.id} className="pies-cart-list__item">
          <PieCart pie={pie} onAddToBasket={handleAddToBasket} />
        </li>
      ))}
    </ul>
  );
}

export default PiesCartList;
