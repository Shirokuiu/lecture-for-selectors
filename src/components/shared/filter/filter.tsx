import AppSelect from 'src/components/shared/app-select/app-select';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import './filter.scss';

function Filter() {
  return (
    <div className="filter">
      <p className="filter__title">СОРТИРОВКА:</p>
      <AppSelect className="filter__select-for-ingredients" />
      <AppSelect className="filter__select-for-numbers" />
      <button type="button" className="filter__reset-btn">
        <span className="filter__reset-btn-text">СБРОСИТЬ ФИЛЬТР</span>
        <SvgSpriteIcon
          id={SvgSpriteIconId.CloseButton}
          width={20}
          height={20}
          className="filter__reset-btn-icon"
        />
      </button>
    </div>
  );
}

export default Filter;
