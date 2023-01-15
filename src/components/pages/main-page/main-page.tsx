import { Helmet, HelmetProvider } from 'react-helmet-async';

import PiesCartWrapper from 'src/components/containers/pies-cart-wrapper/pies-cart-wrapper';
import PageLayout from 'src/components/layouts/page-layout/page-layout';
import Header from 'src/components/shared/header/header';
import './main-page.scss';

function MainPage() {
  return (
    <HelmetProvider>
      <PageLayout>
        <Helmet>
          <title>Главная страница</title>
        </Helmet>
        <Header className="main-page__header" />
        <PiesCartWrapper />
      </PageLayout>
    </HelmetProvider>
  );
}

export default MainPage;
