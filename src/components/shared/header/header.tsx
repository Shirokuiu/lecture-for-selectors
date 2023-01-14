import Basket from 'src/components/containers/basket/basket';
import FavoritesBadge from 'src/components/containers/favorites-badge/favorites-badge';
import CenterLayout from 'src/components/layouts/center-layout/center-layout';
import { PropsWithCssClassName } from 'src/type/shared';
import './header.scss';

function Header({ className = '' }: PropsWithCssClassName) {
  return (
    <header className={`header ${className}`.trim()}>
      <CenterLayout className="header__content">
        <FavoritesBadge className="header__favorites-badge" />
        <Basket />
      </CenterLayout>
    </header>
  );
}

export default Header;
