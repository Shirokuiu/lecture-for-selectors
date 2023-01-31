import { createSlice } from '@reduxjs/toolkit';

import { SliceNameSpace } from 'src/store/constants';
import { calculatePie } from 'src/store/slices/basket-slice/helpers/calculate-pie';
import { BasketSliceInitialState } from 'src/store/slices/basket-slice/types';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

const initialState: BasketSliceInitialState = {
  pies: [],
};

export const basketSlice = createSlice({
  name: SliceNameSpace.BASKET,
  initialState,
  reducers: {
    addToBasket(state, { payload: pie }: { payload: MappedPie }) {
      state.pies = calculatePie(state.pies, pie);
    },
    updateItemCount(state, { payload: { id, count } }: { payload: { id: number; count: number } }) {
      const modifiedPie = state.pies.find((pie) => pie.id === id);

      if (modifiedPie) {
        modifiedPie.count = count;
        modifiedPie.totalPrice = modifiedPie.weight.selectedPrice * count;
      }
    },
    removeFromBasket(state, { payload: pieId }: { payload: number }) {
      state.pies = state.pies.filter(({ id }) => id !== pieId);
    },
  },
});

export const { actions: basketSliceActions } = basketSlice;
