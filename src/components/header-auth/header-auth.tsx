import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../consts';

export function HeaderAuth(): JSX.Element {
  const email = useAppSelector((state) => state.user.user?.email);
  return (
    <>
      <Link to={AppRoute.Favorites}><span className="header__user-name user__name">{email}</span></Link>
      <span className="header__favorite-count">3</span>
    </>
  );
}
