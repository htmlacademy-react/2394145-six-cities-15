
type PlacesOptionsType = {
  setSortingType: (key: string) => void;
}

export function PlacesOptions({setSortingType}: PlacesOptionsType): JSX.Element {
  return (
    <ul hidden className="places__options places__options--custom places__options--opened" >
      <li className="places__option places__option--active" id='Popular' tabIndex={0} onClick={(evt) => setSortingType(evt.target.id)}>Popular</li>
      <li className="places__option" id='Price: low to high' tabIndex={0} onClick={(evt) => setSortingType(evt.target.id)}>Price: low to high </li>
      <li className="places__option" id='Price: high to low' tabIndex={0} onClick={(evt) => setSortingType(evt.target.id)}>Price: high to low</li>
      <li className="places__option" id='Top rated first' tabIndex={0} onClick={(evt) => setSortingType(evt.target.id)}>Top rated first</li>
    </ul>
  );
}
