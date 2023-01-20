import { PieFilling } from 'src/helpers/make-pies';
import { FiltersSliceSorting } from 'src/store/slices/filters-slice/types';

export type IFilter = {
  fillingItems: FilterFillingItem[];
  sortingItems: FilterSortingItem[];
  selectedFillingValues: FilterFillingItem[];
  selectedSortingValue?: FilterSortingItem | null;
  onFilterChange?: (filterChangeEvt: PieFilling[] | FiltersSliceSorting) => void;
  onFilterReset?: () => void;
};

export type FilterFillingItem = {
  value: PieFilling;
  label: string;
};

export type FilterSortingItem = {
  value: FiltersSliceSorting;
  label: string;
};
