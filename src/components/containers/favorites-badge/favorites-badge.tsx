import FavoriteIcon from 'src/components/shared/favorite-icon/favorite-icon';
import { PropsWithCssClassName } from 'src/type/shared';
import './favorites-badge.scss';

function FavoritesBadge({ className = '' }: PropsWithCssClassName) {
  return (
    <div className={`favorites-badge ${className}`.trim()}>
      <span className="favorites-badge__counter">0</span>
      <FavoriteIcon />
    </div>
  );
}

export default FavoritesBadge;
