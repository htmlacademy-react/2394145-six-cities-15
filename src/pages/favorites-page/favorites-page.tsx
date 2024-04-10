import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { useEffect } from 'react';
import { getFavoriteOffers } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FavoritesEmpty } from '../../components/favorites-empty/favorites-empty';
import { AppRoute, LoadingStatus } from '../../consts';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';
import { Link } from 'react-router-dom';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector((state) => state.favorite.loadingStatus);

  useEffect(() => {
    dispatch(getFavoriteOffers());
  }, [dispatch]);

  const offersData = useAppSelector((state) => state.favorite.offers);
  return (
    <div className={`page ${offersData.length < 1 && loadingStatus === LoadingStatus.Succes ? 'page--favorites-empty' : null}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header/>
      {loadingStatus === LoadingStatus.Loading && offersData.length < 1 ? <LoadingSpinner/> : null}
      {offersData.length < 1 && loadingStatus === LoadingStatus.Succes ? <FavoritesEmpty/> : <FavoritesList offersData={offersData}/>}
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
