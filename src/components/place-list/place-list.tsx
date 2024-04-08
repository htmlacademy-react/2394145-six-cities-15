import { useState } from 'react';
import PlaceCard from '../palce-card/place-card';
import { Map } from '../map/map';
import { City, OffersDataType } from '../../types';
import { PlacesSorting } from '../places-sorting/places-sorting';
import { useSortOffers } from '../../hooks';
import { SortingTypes } from '../../consts';

type PlaceListProps = {
  city: City;
  offersData: OffersDataType[];
}

export function PlaceList ({offersData, city}: PlaceListProps): JSX.Element {
  const [id, setId] = useState('');
  const [sortingType, setSortingType] = useState(SortingTypes.Popular);
  const newData = useSortOffers(offersData, sortingType);

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{newData.length} place{newData.length > 1 && 's'} to stay in {city?.name}</b>
        <PlacesSorting setSortingType={setSortingType} sortingType={sortingType}/>
        <div className="cities__places-list places__list tabs__content" >
          {newData.map((curent) => <PlaceCard key={curent.id} offersData={curent} setId={setId} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <Map city={city} points={newData} selectedPoint={id}/>
      </div>
    </>
  );
}
