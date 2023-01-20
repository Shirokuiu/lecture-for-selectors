import { getLabelForFillingFilter } from 'src/components/containers/pies-wrapper/helpers/get-label-for-filling-filter';
import { getLabelForSortingFilter } from 'src/components/containers/pies-wrapper/helpers/get-label-for-sorting-filter';
import { LabelBuilderContext } from 'src/components/containers/pies-wrapper/types';
import { PieFilling } from 'src/helpers/make-pies';
import { FiltersSliceSorting } from 'src/store/slices/filters-slice/types';

const labelBuilderFactory = (filterItem: PieFilling | FiltersSliceSorting) => ({
  [LabelBuilderContext.Filling]: getLabelForFillingFilter(filterItem as PieFilling),
  [LabelBuilderContext.Sorting]: getLabelForSortingFilter(filterItem as FiltersSliceSorting),
});

export const makeLabelForFilter = (
  context: LabelBuilderContext,
  filterItem: PieFilling | FiltersSliceSorting,
) => labelBuilderFactory(filterItem)[context];
