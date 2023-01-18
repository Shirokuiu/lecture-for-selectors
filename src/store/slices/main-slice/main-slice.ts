import { createSlice } from '@reduxjs/toolkit';

import { makePies } from 'src/helpers/make-pies';
import { SliceNameSpace } from 'src/store/constants';
import { mapPies } from 'src/store/slices/main-slice/helpers/map-pies';
import { MainSliceInitialState } from 'src/store/slices/main-slice/types';

const initialState: MainSliceInitialState = {
  pies: mapPies(makePies()),
};

export const mainSlice = createSlice({
  name: SliceNameSpace.MAIN,
  initialState,
  reducers: {},
});
