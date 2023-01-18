import { SliceNameSpace } from 'src/store/constants';
import { State } from 'src/store/types/state';

export const getPies = (state: State) => state[SliceNameSpace.MAIN].pies;
