import { SortingTypes } from '../../consts';

type PlacesOptionType = {
  setSortingType: (key: SortingTypes) => void;
  sortingType: SortingTypes;
  currentSortingType: SortingTypes;
  setVisible: (key: boolean) => void;
}

export function PlacesOption({setSortingType, sortingType, currentSortingType, setVisible}: PlacesOptionType): JSX.Element {

  function setSortingHandle(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const id = event.currentTarget.id as SortingTypes;
    setSortingType(id);
    setVisible(false);
  }

  return (
    <li className={`places__option ${sortingType === currentSortingType && 'places__option--active'}`} id={sortingType} tabIndex={0} onClick={(event) => setSortingHandle(event)}>{sortingType}</li>
  );
}
