import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { PlaceList } from '../../components/place-list/place-list';
import { useState } from 'react';
import { LocationsItem } from '../../components/locations-item/locations-item';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { OffersDataType } from '../../components/types/types';

type MainProps = {
  offersData: OffersDataType[];
  cities: string[];
}

function MainPage({offersData, cities}: MainProps): JSX.Element {
  const [city, setCity] = useState('Amsterdam');
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
              {cities.map((current) => <LocationsItem city={current} key={current} selectedCity={city} setCity={setCity}/>)}
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
