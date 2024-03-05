type LocationsItemProps = {
  city: string;
  selectedCity: string;
  setCity: (city: string) => void;
}

export function LocationsItem({city, selectedCity, setCity}: LocationsItemProps):JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${selectedCity === city && 'tabs__item--active'}`} onClick={() => setCity(city)}>
        <span>{city}</span>
      </a>
    </li>
  );
}
