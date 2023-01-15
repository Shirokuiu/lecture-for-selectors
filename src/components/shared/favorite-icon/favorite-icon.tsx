import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import { PropsWithCssClassName } from 'src/type/shared';
import './favorite-icon.scss';

function FavoriteIcon({ className = '', ...props }: PropsWithCssClassName) {
  return (
    <div {...props} className={`favorite-icon ${className}`.trim()}>
      <SvgSpriteIcon
        id={SvgSpriteIconId.Like}
        width={30}
        height={30}
        className="favorite-icon__icon"
      />
    </div>
  );
}

export default FavoriteIcon;
