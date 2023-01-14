import PieCart from 'src/components/shared/pie-cart/pie-cart';
import './pies-cart-list.scss';

function PiesCartList() {
  return (
    <ul className="pies-cart-list">
      <li className="pies-cart-list__item">
        <PieCart />
      </li>
    </ul>
  );
}

export default PiesCartList;
