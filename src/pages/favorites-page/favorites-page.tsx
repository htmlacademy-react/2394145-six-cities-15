import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { OffersDataType } from '../../mocks/offers';

type FavoritesPageProps = {
  offersData: OffersDataType[];
}

function FavoritesPage({offersData}: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList offersData={offersData}/>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
