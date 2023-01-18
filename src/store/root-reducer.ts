import { combineReducers } from '@reduxjs/toolkit';

import { api } from 'src/services/api';
import { SliceNameSpace } from 'src/store/constants';
import { basketSlice } from 'src/store/slices/basket-slice/basket-slice';
import { mainPageSlice } from 'src/store/slices/main-page-slice/main-page-slice';
import { mainSlice } from 'src/store/slices/main-slice/main-slice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [SliceNameSpace.MainPage]: mainPageSlice.reducer,
  [SliceNameSpace.MAIN]: mainSlice.reducer,
  [SliceNameSpace.BASKET]: basketSlice.reducer,
});
