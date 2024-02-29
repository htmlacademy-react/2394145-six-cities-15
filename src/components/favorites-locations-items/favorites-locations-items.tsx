import { OffersDataType } from '../../mocks/offers';
import { FavoritesCard } from '../favorites-card/favorites-card';

type FavoritesLocationsItemsProps = {
  offersData: OffersDataType[];
}


export function FavoritesLocationsItems({offersData}: FavoritesLocationsItemsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{offersData[0].city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offersData.map((current, id) => <FavoritesCard key={id} offersData={current}/>)}
      </div>
    </li>
  );
}


