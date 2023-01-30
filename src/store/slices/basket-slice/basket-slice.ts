import { createSlice } from '@reduxjs/toolkit';

import { MeasureOfWeight, PieFilling } from 'src/helpers/make-pies';
import { SliceNameSpace } from 'src/store/constants';
import { BasketSliceInitialState } from 'src/store/slices/basket-slice/types';

const initialState: BasketSliceInitialState = {
  pies: [
    {
      id: 8,
      count: 1,
      rate: 5,
      img: '/img/meat-piper.jpg',
      isLean: false,
      isFavorite: false,
      inStock: true,
      filling: [PieFilling.Meat, PieFilling.Piper],
      weight: {
        selectedPrice: 670,
        items: [
          {
            id: 1,
            count: 1000,
            measureOfWeight: MeasureOfWeight.Gram,
            price: 670,
            isChecked: true,
          },
          {
            id: 2,
            count: 1200,
            measureOfWeight: MeasureOfWeight.Gram,
            price: 870,
            isChecked: false,
          },
          {
            id: 3,
            count: 1400,
            measureOfWeight: MeasureOfWeight.Gram,
            price: 940,
            isChecked: false,
          },
        ],
      },
      totalPrice: 670,
    },
  ],
};

export const basketSlice = createSlice({
  name: SliceNameSpace.BASKET,
  initialState,
  reducers: {},
});
