import FavoriteIcon from 'src/components/shared/favorite-icon/favorite-icon';
import { useAppSelector } from 'src/hooks';
import { getFavoritesCount } from 'src/store/slices/favorites-slice/selectors';
import { PropsWithCssClassName } from 'src/type/shared';
import './favorites-badge.scss';

function FavoritesBadge({ className = '' }: PropsWithCssClassName) {
  const favoritesCount = useAppSelector(getFavoritesCount);

  return (
    <div className={`favorites-badge ${className}`.trim()}>
      <span className="favorites-badge__counter">{favoritesCount}</span>
      <FavoriteIcon />
    </div>
  );
}

export default FavoritesBadge;
