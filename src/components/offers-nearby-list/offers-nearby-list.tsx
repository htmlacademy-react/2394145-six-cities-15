import { OffersDataType } from '../../types';
import PlaceCard from '../place-card/place-card';

type OffersNearbyListPrors = {
  offersNearby: OffersDataType[];
}

export function OffersNearbyList({offersNearby}: OffersNearbyListPrors): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offersNearby.map((current) => <PlaceCard key={current.id} offersData={current} type='nearby'/>)}
        </div>
      </section>
    </div>
  );
}
