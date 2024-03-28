import { useDispatch } from 'react-redux';
import { offersSlice } from '../../store/slices/offers';

type LocationsItemProps = {
  city: string;
  selectedCity: boolean;
}

export function LocationsItem({city, selectedCity}: LocationsItemProps):JSX.Element {
  const dispatch = useDispatch();
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${selectedCity && 'tabs__item--active'}`} onClick={() => dispatch(offersSlice.actions.setCity(city))}>
        <span>{city}</span>
      </a>
    </li>
  );
}
