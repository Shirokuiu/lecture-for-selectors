import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

export type IPieCart = {
  pie: MappedPie;
  onAddToBasket?: (pie: MappedPie) => void;
  onFavoriteChange?: (isFavorite: boolean) => void;
};
