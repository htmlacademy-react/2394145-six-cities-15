import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { OfferDataType } from '../../types';
import { useState } from 'react';
import { postFavoriteStatus } from '../../store/api-action';
import { offerSlice } from '../../store/slices/offer';

type OfferBookmarkProps = {
  offer: OfferDataType;
}
export function OfferBookmark({offer}: OfferBookmarkProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.status);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [favoriteStatus, setFavoriteStatus] = useState(offer.isFavorite);


  function postFavoritesHandle() {
    if (authorizationStatus === AuthorizationStatus.NoAuth){
      navigate(AppRoute.Login);
    } else if (offer !== null){
      setFavoriteStatus(!favoriteStatus);
      dispatch(postFavoriteStatus({id: offer.id, status: offer.isFavorite}));
      dispatch(offerSlice.actions.refreshOffer());
    }
  }
  return (
    <button className={`offer__bookmark-button ${favoriteStatus && 'offer__bookmark-button--active'} button`} type="button" onClick={() => postFavoritesHandle()}>
      <svg className="offer__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
