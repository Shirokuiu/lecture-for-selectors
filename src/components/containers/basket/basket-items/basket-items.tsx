import BasketPie from 'src/components/containers/basket/basket-pie/basket-pie';
import { useAppSelector } from 'src/hooks';
import { getBasketPies } from 'src/store/slices/basket-slice/selectors';
import './basket-items.scss';

function BasketItems() {
  const pies = useAppSelector(getBasketPies);

  return (
    <ul className="list-reset basket-items">
      {pies.map((pie) => (
        <li key={pie.id} className="basket-items__cart-wrap">
          <BasketPie pie={pie} />
        </li>
      ))}
      {pies.length === 0 && (
        <li className="basket-items__cart-wrap basket-items__cart-wrap--empty">Корзина пуста</li>
      )}
    </ul>
  );
}

export default BasketItems;
