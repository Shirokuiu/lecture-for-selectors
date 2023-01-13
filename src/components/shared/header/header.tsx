import Basket from 'src/components/containers/basket/basket';
import FavoritesBadge from 'src/components/containers/favorites-badge/favorites-badge';
import CenterLayout from 'src/components/layouts/center-layout/center-layout';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <CenterLayout className="header__content">
        <FavoritesBadge className="header__favorites-badge" />
        <Basket />
      </CenterLayout>
    </header>
  );
}

export default Header;
