import { Helmet, HelmetProvider } from 'react-helmet-async';

import PageLayout from 'src/components/layouts/page-layout/page-layout';
import Header from 'src/components/shared/header/header';

function MainPage() {
  return (
    <HelmetProvider>
      <PageLayout>
        <Helmet>
          <title>Главная страница</title>
        </Helmet>
        <Header />
      </PageLayout>
    </HelmetProvider>
  );
}

export default MainPage;
