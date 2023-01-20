import { FilterFillingItem, FilterSortingItem } from 'src/components/shared/filter/types';
import { DEFAULT_SELECTED_SORTING_VALUE } from 'src/store/slices/filters-slice/constants';

export const isActiveFilter = (
  selectedFillingValues: FilterFillingItem[],
  selectedSortingValue?: FilterSortingItem | null,
): boolean =>
  selectedFillingValues.length !== 0 || selectedSortingValue !== DEFAULT_SELECTED_SORTING_VALUE;
