import { FavoritesCard } from '../favorites-card/favorites-card';
import { OffersDataType } from '../../types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

type FavoritesLocationsItemsProps = {
  offersData: OffersDataType[];
}


export function FavoritesLocationsItems({offersData}: FavoritesLocationsItemsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{offersData[0].city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offersData.map((current) => current.isFavorite && <FavoritesCard key={current.id} offersData={current}/>)}
      </div>
    </li>
  );
}


