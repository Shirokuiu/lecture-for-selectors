import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import { PropsWithCssClassName } from 'src/type/shared';
import 'src/components/shared/lean-tag/lean-tag.scss';

function LeanTag({ className = '', ...props }: PropsWithCssClassName) {
  return (
    <div {...props} className={`lean-tag ${className}`.trim()}>
      <SvgSpriteIcon id={SvgSpriteIconId.Leaf} width={25} height={25} />
    </div>
  );
}

export default LeanTag;
