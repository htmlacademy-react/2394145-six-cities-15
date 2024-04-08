import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { PlaceList } from '../../components/place-list/place-list';
import { LocationsItem } from '../../components/locations-item/locations-item';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { CitiesEnum, LoadingStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';
import { useEffect } from 'react';
import { getOffers } from '../../store/api-action';

function MainPage(): JSX.Element {
  const city = useAppSelector((state) => state.offers.city);
  const offers = useAppSelector((state) => state.offers.offers);
  const selectedOffers = offers.filter((current) => current.city.name === city);
  const loadingStatus = useAppSelector((state) => state.offers.loadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  return (
    <div className={`page page--gray page--main ${selectedOffers.length === 0 && loadingStatus === LoadingStatus.Succes ? 'page__main--index-empty' : null}`}>
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.keys(CitiesEnum).map((current) => <LocationsItem city={current} key={current} selectedCity={city === current}/>)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {loadingStatus === LoadingStatus.Loading ? <LoadingSpinner/> : null}
            {selectedOffers.length !== 0 && loadingStatus === LoadingStatus.Succes ? <PlaceList offersData={selectedOffers} city={selectedOffers[0].city}/> : null}
            {selectedOffers.length === 0 && loadingStatus === LoadingStatus.Succes ? <MainEmpty city={city}/> : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
