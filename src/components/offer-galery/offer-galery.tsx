import { OfferDataType } from '../../types';
import { OfferGaleryImage } from '../offer-galery-image/offer-galery-image';

type OfferGaleryType = {
  offer: OfferDataType;
}

export function OfferGalery({offer}: OfferGaleryType): JSX.Element {
  const slicedGalery = offer.images.slice(0, 6);
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {slicedGalery.map((current) => <OfferGaleryImage key={current} src={current}/>)}
      </div>
    </div>
  );
}
