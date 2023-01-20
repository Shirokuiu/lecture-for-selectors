import { FiltersSliceSorting } from 'src/store/slices/filters-slice/types';

export const makeSortingFilters = (): FiltersSliceSorting[] => [
  FiltersSliceSorting.Price,
  FiltersSliceSorting.Rate,
];
