import { OfferDataType } from '../../types';
import { OfferGaleryImage } from '../offer-galery-image/offer-galery-image';

type OfferGaleryType = {
  offer: OfferDataType;
}

export function OfferGalery({offer}: OfferGaleryType): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offer.images.map((current) => <OfferGaleryImage key={current} src={current}/>)}
      </div>
    </div>
  );
}
