import { FavoritesLocationsItems } from '../favorites-locations-items/favorites-locations-items';
import { OffersDataType } from '../../types';

type FavoritesListProps = {
  offersData: OffersDataType[];
}

export function FavoritesList({offersData}: FavoritesListProps): JSX.Element {

  const uniqueSetCities = new Set(offersData.map((curent) => curent.city.name));
  const uniqueArrayCities = Array.from(uniqueSetCities);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {uniqueArrayCities.map((current) => <FavoritesLocationsItems key={current} offersData={offersData.filter((item) => item.city.name === current)}/>)}
      </ul>
    </section>
  );
}
