import { createSlice } from '@reduxjs/toolkit';

import { SliceNameSpace } from 'src/store/constants';
import { FavoritesSliceInitialState } from 'src/store/slices/favorites-slice/types';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

const initialState: FavoritesSliceInitialState = {
  pies: [],
};

export const favoritesSlice = createSlice({
  name: SliceNameSpace.FAVORITES,
  initialState,
  reducers: {
    addToFavorite(state, { payload: pie }: { payload: MappedPie }) {
      state.pies.push(pie);
    },
    removeFromFavorite(state, { payload: pieId }: { payload: number }) {
      state.pies = state.pies.filter(({ id }) => pieId !== id);
    },
  },
});

export const { actions: favoritesSliceActions } = favoritesSlice;
