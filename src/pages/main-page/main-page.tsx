import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { PlaceList } from '../../components/place-list/place-list';
import { LocationsItem } from '../../components/locations-item/locations-item';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { OffersDataType } from '../../types';
import { CitiesEnum } from '../../consts';
import { useAppSelector } from '../../hooks';

type MainProps = {
  offersData: OffersDataType[];
}

function MainPage({offersData}: MainProps): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const selectedOffers = offersData.filter((current) => current.city.name === city);
  return (
    <div className="page page--gray page--main">
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
            {selectedOffers.length !== 0 ? <PlaceList offersData={selectedOffers} city={selectedOffers !== undefined ? selectedOffers[0].city : null}/> : <MainEmpty/>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
