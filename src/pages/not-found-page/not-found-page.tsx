import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


function NotFoundPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities. Not Found</title>
      </Helmet>
      <div className='not-found-wrapper'>
        <div className='not-found'>
          <h1>404 not found</h1>
          <button><Link to='/'>Home Page</Link></button>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;

