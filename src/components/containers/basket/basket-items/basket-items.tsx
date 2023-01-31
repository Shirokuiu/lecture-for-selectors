import BasketPie from 'src/components/containers/basket/basket-pie/basket-pie';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { removeFromBasket, updateItemCount } from 'src/store/slices/basket-slice/basket-slice';
import { getBasketPies } from 'src/store/slices/basket-slice/selectors';
import './basket-items.scss';

function BasketItems() {
  const pies = useAppSelector(getBasketPies);
  const dispatch = useAppDispatch();

  return (
    <ul className="list-reset basket-items">
      {pies.map((pie) => (
        <li key={pie.id} className="basket-items__cart-wrap">
          <BasketPie
            pie={pie}
            onRemove={(pieId) => dispatch(removeFromBasket(pieId))}
            onCountChange={(evt) => dispatch(updateItemCount(evt))}
          />
        </li>
      ))}
      {pies.length === 0 && (
        <li className="basket-items__cart-wrap basket-items__cart-wrap--empty">Корзина пуста</li>
      )}
    </ul>
  );
}

export default BasketItems;
