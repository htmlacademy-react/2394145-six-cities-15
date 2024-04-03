import { useState } from 'react';
import { PlacesOptions } from '../places-options/places-options';

type PlacesSortingType = {
  setSortingType: (key: string) => void;
  sortingType: string;
}

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
      {visible ? <PlacesOptions setSortingType={setSortingType}/> : null}
    </form>
  );
}
