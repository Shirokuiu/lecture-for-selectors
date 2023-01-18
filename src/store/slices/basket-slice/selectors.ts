import { SliceNameSpace } from 'src/store/constants';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';
import { State } from 'src/store/types/state';

export const getBasketPies = (state: State): MappedPie[] => state[SliceNameSpace.BASKET].pies;
export const getBasketPiesCount = (state: State): number =>
  state[SliceNameSpace.BASKET].pies.length;
