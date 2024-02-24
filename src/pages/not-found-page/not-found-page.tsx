import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import classes from '../../../public/css/not-found-page.module.css';
import { AppRoute } from '../../consts';


function NotFoundPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities. Not Found</title>
      </Helmet>
      <div className={classes.wrapper}>
        <div className={classes.main}>
          <h1>404 not found</h1>
          <button className={classes.button}><Link to={AppRoute.Main}>Home Page</Link></button>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;

