import PieCart from 'src/components/shared/pie-cart/pie-cart';
import { IPiesCartList } from 'src/components/shared/pies-cart-list/types';
import { useAppDispatch } from 'src/hooks';
import { addToBasket } from 'src/store/slices/basket-slice/basket-slice';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';
import 'src/components/shared/pies-cart-list/pies-cart-list.scss';

function PiesCartList({ pies }: IPiesCartList) {
  const dispatch = useAppDispatch();

  const handleAddToBasket = (pie: MappedPie) => {
    dispatch(addToBasket({ ...pie, id: pie.id + pie.weight.selectedPrice }));
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
