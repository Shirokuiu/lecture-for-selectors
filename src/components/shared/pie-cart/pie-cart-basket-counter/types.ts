import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

export type IPieCartBasketCounter = Pick<MappedPie, 'count'> & {
  disabled?: boolean;
  onCountChange?: (count: number) => void;
};
