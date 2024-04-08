import { Link, useNavigate } from 'react-router-dom';
import { PremiumMark } from '../premium-mark/premium-mark';
import { OffersDataType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteStatus } from '../../store/api-action';
import { AppRoute, AuthorizationStatus } from '../../consts';

type FavoritesCardProps = {
  offersData: OffersDataType;
}

export function FavoritesCard({offersData}: FavoritesCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.user.status);
  const navigate = useNavigate();

  function postFavoritesHandle() {
    if(isAuth === AuthorizationStatus.Auth) {
      dispatch(postFavoriteStatus({id: offersData.id, status: offersData.isFavorite}));
    } else {
      navigate(AppRoute.Login);
    }
  }

  return (
    <article className="favorites__card place-card">
      {offersData.isPremium ? <PremiumMark/> : undefined}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <img className="place-card__image" src={offersData.previewImage} width="150" height="110" alt="Place image"/>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offersData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={() => postFavoritesHandle()}>
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
        <Link to={`/offer/${offersData.id}`}>
          <h2 className="place-card__name">
            <a href="#">{offersData.title}</a>
          </h2>
        </Link>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

