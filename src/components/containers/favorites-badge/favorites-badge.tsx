import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import './favorites-badge.scss';

import { PropsWithCssClassName } from 'src/type/shared';

function FavoritesBadge({ className = '' }: PropsWithCssClassName) {
  return (
    <div className={`favorites-badge ${className}`.trim()}>
      <span className="favorites-badge__counter">0</span>
      <SvgSpriteIcon
        id={SvgSpriteIconId.Like}
        width={30}
        height={30}
        className="favorites-badge__icon"
      />
    </div>
  );
}

export default FavoritesBadge;
