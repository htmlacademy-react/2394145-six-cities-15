import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import { OfferPremium } from '../../components/offer-premium/offer-premium';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoadingStatus } from '../../consts';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';
import NotFoundPage from '../not-found-page/not-found-page';
import { useEffect } from 'react';
import { getOffer, getOfferComments, getOffersNearby } from '../../store/api-action';
import { Map } from '../../components/map/map';
import { OffersNearbyList } from '../../components/offers-nearby-list/offers-nearby-list';
import { OfferGalery } from '../../components/offer-galery/offer-galery';
import { OfferInsideItem } from '../../components/offer-inside-item/offer-inside-item';
import { OfferHost } from '../../components/offer-host/offer-host';
import { OfferRewiews } from '../../components/offer-rewiews/offer-rewiews';

function OfferPage(): JSX.Element | undefined {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOffer(id));
    dispatch(getOffersNearby(id));
    dispatch(getOfferComments(id));
  }, [dispatch, id]);

  const status = useAppSelector((state) => state.offer.status);
  const offer = useAppSelector((state) => state.offer.offer);
  const offersNearby = useAppSelector((state) => state.offer.nearby);
  const nearOffersPlusCurrent = [offer, ...offersNearby];
  const comments = useAppSelector((state) => state.comments.comments);


  if (offer === null && status === LoadingStatus.Loading) {
    return <LoadingSpinner/>;
  } if (offer !== null && status === LoadingStatus.Succes) {
    return (
      <div className="page">
        <Helmet>
          <title>6 cities: offer</title>
        </Helmet>
        <Header/>
        <main className="page__main page__main--offer">
          <section className="offer">
            <OfferGalery offer={offer}/>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium ? <OfferPremium/> : undefined}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offer?.title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button" >
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: `${offer.rating * 20}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer?.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {offer.type[0].toUpperCase() + offer.type.slice(1)}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {offer.bedrooms > 1 ? `${offer.bedrooms} Bedrooms` : `${offer.bedrooms} Bedroom`}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    {offer.maxAdults > 1 ? `Max ${offer.maxAdults} adults` : `Max ${offer.maxAdults} adult`}
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {offer.goods.map((current) => <OfferInsideItem key={current} goods={current}/>)}
                  </ul>
                </div>
                <OfferHost host={offer.host}/>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
                <OfferRewiews comments={comments} id={id}/>
              </div>
            </div>
            <Map className='offer__map' city={offer.city} points={nearOffersPlusCurrent} selectedPoint={id}/>
          </section>
          <OffersNearbyList offersNearby={offersNearby}/>
        </main>
      </div>
    );
  } if (offer === undefined && status === LoadingStatus.Succes) {
    return <NotFoundPage/>;
  }


}

export default OfferPage;
