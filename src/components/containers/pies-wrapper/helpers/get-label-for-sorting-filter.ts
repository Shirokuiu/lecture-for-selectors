import { FiltersSliceSorting } from 'src/store/slices/filters-slice/types';

const LabelMap = {
  [FiltersSliceSorting.Price]: 'по цене',
  [FiltersSliceSorting.Rate]: 'по рейтингу',
};

export const getLabelForSortingFilter = (sortingItem: FiltersSliceSorting): string =>
  LabelMap[sortingItem];
