import PieCart from 'src/components/shared/pie-cart/pie-cart';
import { IPiesCartList } from 'src/components/shared/pies-cart-list/types';
import { useAppDispatch } from 'src/hooks';
import { basketSliceActions } from 'src/store/slices/basket-slice/basket-slice';
import { favoritesSliceActions } from 'src/store/slices/favorites-slice/favorites-slice';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';
import 'src/components/shared/pies-cart-list/pies-cart-list.scss';

function PiesCartList({ pies }: IPiesCartList) {
  const dispatch = useAppDispatch();

  const handleAddToBasket = (pie: MappedPie) => {
    dispatch(basketSliceActions.addToBasket({ ...pie, id: pie.id + pie.weight.selectedPrice }));
  };

  const handleFavoriteChange = (isFavorite: boolean, pie: MappedPie) => {
    if (isFavorite) {
      dispatch(favoritesSliceActions.addToFavorite(pie));

      return;
    }

    dispatch(favoritesSliceActions.removeFromFavorite(pie.id));
  };

  return (
    <ul className="pies-cart-list">
      {pies.map((pie) => (
        <li key={pie.id} className="pies-cart-list__item">
          <PieCart
            pie={pie}
            onAddToBasket={handleAddToBasket}
            onFavoriteChange={(isFavorite) => handleFavoriteChange(isFavorite, pie)}
          />
        </li>
      ))}
    </ul>
  );
}

export default PiesCartList;
