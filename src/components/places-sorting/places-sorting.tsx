import { useState } from 'react';
import { SortingTypes } from '../../consts';
import { PlacesOption } from '../places-option/places-option';

type PlacesSortingType = {
  setSortingType: (key: string) => void;
  sortingType: SortingTypes;
}
//{visible ? <PlacesOptions setSortingType={setSortingType} sortingType={sortingType} setVisible={setVisible}/> : null}
export function PlacesSorting({setSortingType, sortingType}: PlacesSortingType): JSX.Element {
  const [visible, setVisible] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setVisible(!visible)}>
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" ></use>
        </svg>
      </span>
      <ul hidden className={`places__options places__options--custom ${visible && 'places__options--opened'}`}>
        {visible ? Object.values(SortingTypes).map((current) => <PlacesOption key={current} setSortingType={setSortingType} sortingType={current} currentSortingType={sortingType} setVisible={setVisible}/>) : null}
      </ul>
    </form>
  );
}
