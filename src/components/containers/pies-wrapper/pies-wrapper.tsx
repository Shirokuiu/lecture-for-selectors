import Filter from 'src/components/shared/filter/filter';
import PiesCartList from 'src/components/shared/pies-cart-list/pies-cart-list';
import { PieFilling } from 'src/helpers/make-pies';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { DEFAULT_SELECTED_SORTING_VALUE } from 'src/store/slices/filters-slice/constants';
import {
  resetSelectedFilters,
  setFillingValues,
  setSortingItem,
} from 'src/store/slices/filters-slice/filters-slice';
import {
  getFillingItemsForFilters,
  getSelectedFillingValuesForFilters,
  getSelectedSortingValueForFilters,
  getSortingItemsForFilters,
} from 'src/store/slices/filters-slice/selectors';
import { FiltersSliceSorting } from 'src/store/slices/filters-slice/types';
import { getPies } from 'src/store/slices/main-slice/selectors';

function PiesWrapper() {
  const pies = useAppSelector(getPies);
  const fillingItems = useAppSelector(getFillingItemsForFilters);
  const sortingItems = useAppSelector(getSortingItemsForFilters);
  const selectedFillingValues = useAppSelector(getSelectedFillingValuesForFilters);
  const selectedSortingValue = useAppSelector(getSelectedSortingValueForFilters);
  const dispatch = useAppDispatch();

  const handleFilterChange = (evt: PieFilling[] | FiltersSliceSorting) => {
    if (Array.isArray(evt)) {
      dispatch(setFillingValues(evt));

      return;
    }

    dispatch(setSortingItem((evt as FiltersSliceSorting) ?? DEFAULT_SELECTED_SORTING_VALUE));
  };

  const handleFilterReset = () => {
    dispatch(resetSelectedFilters());
  };

  return (
    <div className="pies-cart-wrapper">
      <Filter
        fillingItems={fillingItems}
        sortingItems={sortingItems}
        selectedFillingValues={selectedFillingValues}
        selectedSortingValue={selectedSortingValue}
        onFilterChange={handleFilterChange}
        onFilterReset={handleFilterReset}
      />
      <PiesCartList pies={pies} />
    </div>
  );
}

export default PiesWrapper;
