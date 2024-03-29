type OfferInsideItemType = {
  goods: string;
}
export function OfferInsideItem({goods}: OfferInsideItemType): JSX.Element {
  return (
    <li className="offer__inside-item">
      {goods}
    </li>
  );
}
