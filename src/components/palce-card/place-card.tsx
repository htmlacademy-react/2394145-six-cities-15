import { Link } from 'react-router-dom';
import { OffersDataType } from '../../types';
import { PremiumMark } from '../premium-mark/premium-mark';

type PlaceCardProps = {
  offersData: OffersDataType;
  setId?: (key: string) => void;
  type?: string;
}

function PlaceCard({offersData, setId, type}: PlaceCardProps): JSX.Element {

  return (

    <article className={type === 'nearby' ? 'near-places__card place-card' : 'cities__card place-card'} onMouseOver={() => setId?.(offersData.id)}>
      {offersData.isPremium ? <PremiumMark/> : null}
      <div className={type === 'nearby' ? 'near-places__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper'}>
        <Link to={`/offer/${offersData.id}`}>
          <img className="place-card__image" src={offersData.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offersData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offersData.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a>{offersData.title}</a>
        </h2>
        <p className="place-card__type">{offersData.type[0].toUpperCase() + offersData.type.slice(1)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

