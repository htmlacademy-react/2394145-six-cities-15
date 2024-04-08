import { SortingTypes } from '../../consts';
import { PlacesOption } from '../places-option/places-option';

type PlacesOptionsType = {
  setSortingType: (key: string) => void;
  sortingType: SortingTypes;
  setVisible: (key: boolean) => void;
}

export function PlacesOptions({setSortingType, sortingType, setVisible}: PlacesOptionsType): JSX.Element {
  return (
    <ul hidden className="places__options places__options--custom places__options--opened" >
      {Object.values(SortingTypes).map((current) => <PlacesOption key={current} setSortingType={setSortingType} sortingType={current} currentSortingType={sortingType} setVisible={setVisible}/>)}
    </ul>
  );
}
