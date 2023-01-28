import { FilterSortingItem } from 'src/components/shared/filter/types';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

export const sortPies = (
  selectedSorting: FilterSortingItem | null,
  a: MappedPie,
  b: MappedPie,
): number => {
  if (selectedSorting) {
    return b.rate - a.rate;
  }

  return 0;
};
