import { PieFilling } from 'src/helpers/make-pies';

export type FiltersSliceInitialState = {
  fillingItems: PieFilling[];
  sortingItems: FiltersSliceSorting[];
  selectedFillingValues: PieFilling[];
  selectedSortingValue: FiltersSliceSorting | null;
};

export enum FiltersSliceSorting {
  Price = 'price',
  Rate = 'rate',
}
