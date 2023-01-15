import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import './post-tag.scss';

import { PropsWithCssClassName } from 'src/type/shared';

function PostTag({ className = '', ...props }: PropsWithCssClassName) {
  return (
    <div {...props} className={`post-tag ${className}`.trim()}>
      <SvgSpriteIcon id={SvgSpriteIconId.Leaf} width={25} height={25} />
    </div>
  );
}

export default PostTag;
