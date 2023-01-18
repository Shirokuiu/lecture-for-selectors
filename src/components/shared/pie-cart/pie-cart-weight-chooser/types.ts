import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

export type IPieCartWeightChooser = Pick<MappedPie, 'weights'> & {
  disabled?: boolean;
};
