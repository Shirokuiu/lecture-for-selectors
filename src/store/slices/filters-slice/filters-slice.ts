import { createSlice } from '@reduxjs/toolkit';

import { PieFilling } from 'src/helpers/make-pies';
import { SliceNameSpace } from 'src/store/constants';
import {
  DEFAULT_SELECTED_FILLING_VALUES,
  DEFAULT_SELECTED_SORTING_VALUE,
} from 'src/store/slices/filters-slice/constants';
import { makeFillingFilters } from 'src/store/slices/filters-slice/helpers/make-filling-filters';
import { makeSortingFilters } from 'src/store/slices/filters-slice/helpers/make-sorting-filters';
import {
  FiltersSliceInitialState,
  FiltersSliceSorting,
} from 'src/store/slices/filters-slice/types';

const initialState: FiltersSliceInitialState = {
  fillingItems: makeFillingFilters(),
  sortingItems: makeSortingFilters(),
  selectedFillingValues: DEFAULT_SELECTED_FILLING_VALUES,
  selectedSortingValue: DEFAULT_SELECTED_SORTING_VALUE,
};

export const filtersSlice = createSlice({
  name: SliceNameSpace.FILTERS,
  initialState,
  reducers: {
    setFillingValues(state, { payload: selectedFillingValues }: { payload: PieFilling[] }) {
      state.selectedFillingValues = selectedFillingValues;
    },
    setSortingItem(state, { payload: selectedSortingValue }: { payload: FiltersSliceSorting }) {
      state.selectedSortingValue = selectedSortingValue;
    },
    resetSelectedFilters(state) {
      state.selectedFillingValues = DEFAULT_SELECTED_FILLING_VALUES;
      state.selectedSortingValue = DEFAULT_SELECTED_SORTING_VALUE;
    },
  },
});

export const { actions: filtersSliceActions } = filtersSlice;
