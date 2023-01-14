import Filter from 'src/components/shared/filter/filter';
import PiesCartList from 'src/components/shared/pies-cart-list/pies-cart-list';

function PiesCartWrapper() {
  return (
    <div className="pies-cart-wrapper">
      <Filter />
      <PiesCartList />
    </div>
  );
}

export default PiesCartWrapper;
