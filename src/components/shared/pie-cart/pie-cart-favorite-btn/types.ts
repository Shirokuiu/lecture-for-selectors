import {PropsWithCssClassName} from 'src/type/shared';
import {MappedPie} from 'src/store/slices/main-slice/helpers/map-pies';

export type IPieCartFavoriteBtn = PropsWithCssClassName<Pick<MappedPie, 'isFavorite'>> & {
  onFavoriteChange?: (isFavorite: boolean) => void
}
