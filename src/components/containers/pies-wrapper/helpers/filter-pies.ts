import { sortPies } from 'src/components/containers/pies-wrapper/helpers/sort-pies';
import { FilterFillingItem, FilterSortingItem } from 'src/components/shared/filter/types';
import { PieFilling } from 'src/helpers/make-pies';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

export const filterPies = (
  pies: MappedPie[],
  selectedFilling: FilterFillingItem[],
  selectedSorting: FilterSortingItem | null,
): MappedPie[] => {
  if (!selectedFilling.length && !selectedSorting) {
    return pies;
  }

  const fillingValues: PieFilling[] = selectedFilling.map(({ value }) => value);

  return pies
    .filter(({ filling }) =>
      fillingValues.length
        ? fillingValues.some((fillingValue) => filling.includes(fillingValue))
        : true,
    )
    .sort((a, b) => sortPies(selectedSorting, a, b));
};
