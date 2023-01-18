import { IFavoriteIcon } from 'src/components/shared/favorite-icon/types';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import 'src/components/shared/favorite-icon/favorite-icon.scss';

function FavoriteIcon({ className = '', mod, ...props }: IFavoriteIcon) {
  return (
    <div {...props} className={`favorite-icon ${className}`.trim()}>
      <SvgSpriteIcon
        id={SvgSpriteIconId.Like}
        width={30}
        height={30}
        className={`favorite-icon__svg ${mod ? `favorite-icon__svg--${mod}` : ''}`.trim()}
      />
    </div>
  );
}

export default FavoriteIcon;
