import { Tooltip } from 'antd';
import { useState } from 'react';

import FavoriteIcon from 'src/components/shared/favorite-icon/favorite-icon';
import { FavoriteIconMod } from 'src/components/shared/favorite-icon/types';
import { getFavoriteTooltip } from 'src/components/shared/pie-cart/helpers/get-favorite-tooltip';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';
import { PropsWithCssClassName } from 'src/type/shared';

function PieCartFavoriteBtn({
  className = '',
  isFavorite,
}: PropsWithCssClassName<Pick<MappedPie, 'isFavorite'>>) {
  const [favorite, toggleIsFavorite] = useState<boolean>(isFavorite);

  const handleFavoriteClick = () => {
    toggleIsFavorite((prevState) => !prevState);
  };

  return (
    <button
      type="button"
      className={`btn-reset pie-cart-favorite-btn ${className}`.trim()}
      onClick={handleFavoriteClick}
    >
      <Tooltip title={getFavoriteTooltip(favorite)}>
        <FavoriteIcon mod={!favorite ? FavoriteIconMod.Faded : undefined} />
      </Tooltip>
    </button>
  );
}

export default PieCartFavoriteBtn;
