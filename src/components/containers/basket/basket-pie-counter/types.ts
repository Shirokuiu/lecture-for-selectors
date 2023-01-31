import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

export type IBasketPieCounter = Pick<MappedPie, 'count'> & {
  onCountChange?: (count: number) => void;
};
