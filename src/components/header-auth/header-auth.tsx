import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../consts';

export function HeaderAuth(): JSX.Element {
  const email = useAppSelector((state) => state.user.user?.email);
  const favoritesOffers = useAppSelector((state) => state.favorite.offers);
  return (
    <>
      <Link to={AppRoute.Favorites}><span className="header__user-name user__name">{email}</span></Link>
      <span className="header__favorite-count">{favoritesOffers.length}</span>
    </>
  );
}
