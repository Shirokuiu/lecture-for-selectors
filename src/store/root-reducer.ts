import { combineReducers } from '@reduxjs/toolkit';

import { api } from 'src/services/api';
import { SliceNameSpace } from 'src/store/constants';
import { basketSlice } from 'src/store/slices/basket-slice/basket-slice';
import { favoritesSlice } from 'src/store/slices/favorites-slice/favorites-slice';
import { filtersSlice } from 'src/store/slices/filters-slice/filters-slice';
import { mainPageSlice } from 'src/store/slices/main-page-slice/main-page-slice';
import { mainSlice } from 'src/store/slices/main-slice/main-slice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [SliceNameSpace.MainPage]: mainPageSlice.reducer,
  [SliceNameSpace.MAIN]: mainSlice.reducer,
  [SliceNameSpace.BASKET]: basketSlice.reducer,
  [SliceNameSpace.FAVORITES]: favoritesSlice.reducer,
  [SliceNameSpace.FILTERS]: filtersSlice.reducer,
});
