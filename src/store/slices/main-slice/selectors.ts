import { SliceNameSpace } from 'src/store/constants';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';
import { State } from 'src/store/types/state';

export const getPies = (state: State): MappedPie[] => state[SliceNameSpace.MAIN].pies;
