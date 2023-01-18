import Filter from 'src/components/shared/filter/filter';
import PiesCartList from 'src/components/shared/pies-cart-list/pies-cart-list';
import { useAppSelector } from 'src/hooks';
import { getPies } from 'src/store/slices/main-slice/selectors';

function PiesCartWrapper() {
  const pies = useAppSelector(getPies);

  return (
    <div className="pies-cart-wrapper">
      <Filter />
      <PiesCartList pies={pies} />
    </div>
  );
}

export default PiesCartWrapper;
