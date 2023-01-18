import { SliceNameSpace } from 'src/store/constants';
import { State } from 'src/store/types/state';

export const getFavoritesCount = (state: State): number =>
  state[SliceNameSpace.FAVORITES].pies.length;
