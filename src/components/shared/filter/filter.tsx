import AppSelect from 'src/components/shared/app-select/app-select';
import { isActiveFilter } from 'src/components/shared/filter/helpers/is-active-filter';
import { IFilter } from 'src/components/shared/filter/types';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';
import './filter.scss';

function Filter({
  fillingItems,
  sortingItems,
  selectedFillingValues,
  selectedSortingValue,
  onFilterChange = () => undefined,
  onFilterReset = () => undefined,
}: IFilter) {
  return (
    <div className="filter">
      <p className="filter__title">СОРТИРОВКА:</p>
      <AppSelect
        className="filter__select-for-ingredients"
        mode="multiple"
        optionFilterProp="label"
        value={selectedFillingValues}
        placeholder="Выберите начинку"
        options={fillingItems}
        onChange={onFilterChange}
      />
      <AppSelect
        className="filter__select-for-numbers"
        value={selectedSortingValue}
        placeholder="Выберите значение"
        options={sortingItems}
        onChange={onFilterChange}
      />
      {isActiveFilter(selectedFillingValues, selectedSortingValue) && (
        <button type="button" className="filter__reset-btn" onClick={onFilterReset}>
          <span className="filter__reset-btn-text">СБРОСИТЬ ФИЛЬТР</span>
          <SvgSpriteIcon
            id={SvgSpriteIconId.CloseButton}
            width={20}
            height={20}
            className="filter__reset-btn-icon"
          />
        </button>
      )}
    </div>
  );
}

export default Filter;
