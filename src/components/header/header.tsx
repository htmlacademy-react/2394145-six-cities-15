import { HeaderAuth } from '../header-auth/header-auth';
import { Logo } from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { Link } from 'react-router-dom';
import { logout } from '../../store/api-action';

function Header(): JSX.Element {
  const status = useAppSelector((state) => state.user.status);
  const dispatch = useAppDispatch();

  function initiateLogout() {
    dispatch(logout());
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {status === AuthorizationStatus.Auth ? <HeaderAuth/> : <span className="header__login">Sign in</span> }
                </Link>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link">
                  {status === AuthorizationStatus.Auth ? <span className="header__signout" onClick={initiateLogout}>Sign out</span> : null}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
