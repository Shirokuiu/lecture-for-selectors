import { makeLabelForFilter } from 'src/components/containers/pies-wrapper/helpers/make-label-for-filter';
import { LabelBuilderContext } from 'src/components/containers/pies-wrapper/types';
import { FilterFillingItem, FilterSortingItem } from 'src/components/shared/filter/types';
import { PieFilling } from 'src/helpers/make-pies';
import { FiltersSliceSorting } from 'src/store/slices/filters-slice/types';

export const mapFilter = (
  filterItem: PieFilling | FiltersSliceSorting,
  context: LabelBuilderContext,
): FilterFillingItem | FilterSortingItem => ({
  value: filterItem,
  label: makeLabelForFilter(context, filterItem),
});
