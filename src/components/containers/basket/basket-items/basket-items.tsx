import BasketPie from 'src/components/containers/basket/basket-pie/basket-pie';
import './basket-items.scss';

function BasketItems() {
  return (
    <ul className="list-reset basket-items">
      <li className="basket-items__cart-wrap">
        <BasketPie />
      </li>
    </ul>
  );
}

export default BasketItems;
