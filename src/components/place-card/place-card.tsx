import { Link, useNavigate } from 'react-router-dom';
import { OffersDataType } from '../../types';
import { PremiumMark } from '../premium-mark/premium-mark';
import { postFavoriteStatus } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useState } from 'react';
import { offersSlice } from '../../store/slices/offers';

type PlaceCardProps = {
  offersData: OffersDataType;
  setId?: (key: string) => void;
  type?: string;
}

function PlaceCard({offersData, setId, type}: PlaceCardProps): JSX.Element {
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(offersData.isFavorite);
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.user.status);
  const navigate = useNavigate();

  function postFavoritesHandle() {
    if(isAuth === AuthorizationStatus.Auth) {
      setFavoriteStatus(!favoriteStatus);
      dispatch(postFavoriteStatus({id: offersData.id, status: offersData.isFavorite}));
      dispatch(offersSlice.actions.refreshCard(offersData));
    } else {
      navigate(AppRoute.Login);
    }
  }

  return (
    <article className={type === 'nearby' ? 'near-places__card place-card' : 'cities__card place-card'} onMouseOver={() => setId?.(offersData.id)} onMouseOut={() => setId?.('')}>
      {offersData.isPremium ? <PremiumMark/> : null}
      <div className={type === 'nearby' ? 'near-places__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper'}>
        <img className="place-card__image" src={offersData.previewImage} width="260" height="200" alt="Place image"/>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offersData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${favoriteStatus && 'place-card__bookmark-button--active'} button`} type="button" onClick={() => postFavoritesHandle()}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offersData.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Link to={`/offer/${offersData.id}`}>
          <h2 className="place-card__name">
            {offersData.title}
          </h2>
        </Link>
        <p className="place-card__type">{offersData.type[0].toUpperCase() + offersData.type.slice(1)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
