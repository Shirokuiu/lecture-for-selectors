import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

export type IBasketPie = {
  pie: MappedPie;
  onRemove?: (id: number) => void;
  onCountChange?: ({ id, count }: { id: number; count: number }) => void;
};
