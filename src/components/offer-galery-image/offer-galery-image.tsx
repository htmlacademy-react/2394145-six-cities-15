type OfferGaleryImageType = {
  src: string;
}

export function OfferGaleryImage({src}: OfferGaleryImageType): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={src} alt="Photo studio"/>
    </div>
  );
}
