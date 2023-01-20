import { mapFilter } from 'src/components/containers/pies-wrapper/helpers/map-filter';
import { LabelBuilderContext } from 'src/components/containers/pies-wrapper/types';
import { FilterFillingItem, FilterSortingItem } from 'src/components/shared/filter/types';
import { PieFilling } from 'src/helpers/make-pies';
import { SliceNameSpace } from 'src/store/constants';
import { FiltersSliceSorting } from 'src/store/slices/filters-slice/types';
import { State } from 'src/store/types/state';

export const getFillingItems = (state: State): PieFilling[] =>
  state[SliceNameSpace.FILTERS].fillingItems;
export const getSortingItems = (state: State): FiltersSliceSorting[] =>
  state[SliceNameSpace.FILTERS].sortingItems;
export const getSelectedFillingValues = (state: State): PieFilling[] =>
  state[SliceNameSpace.FILTERS].selectedFillingValues;
export const getSelectedSortingValue = (state: State): FiltersSliceSorting | null =>
  state[SliceNameSpace.FILTERS].selectedSortingValue;

export const getFillingItemsForFilters = (state: State): FilterFillingItem[] =>
  getFillingItems(state).map((fillingItem) =>
    mapFilter(fillingItem, LabelBuilderContext.Filling),
  ) as FilterFillingItem[];

export const getSortingItemsForFilters = (state: State): FilterSortingItem[] =>
  getSortingItems(state).map((sortingItem) =>
    mapFilter(sortingItem, LabelBuilderContext.Sorting),
  ) as FilterSortingItem[];

export const getSelectedFillingValuesForFilters = (state: State): FilterFillingItem[] =>
  getSelectedFillingValues(state).map((selectedFillingItem) =>
    mapFilter(selectedFillingItem, LabelBuilderContext.Filling),
  ) as FilterFillingItem[];

export const getSelectedSortingValueForFilters = (state: State): FilterSortingItem | null => {
  const selectedSortingValue = getSelectedSortingValue(state);

  return selectedSortingValue
    ? (mapFilter(selectedSortingValue, LabelBuilderContext.Sorting) as FilterSortingItem)
    : null;
};
