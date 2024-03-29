import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import { OfferPremium } from '../../components/offer-premium/offer-premium';
import { ReviewsForm } from '../../components/reviews-form/reviews-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoadingStatus } from '../../consts';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';
import NotFoundPage from '../not-found-page/not-found-page';
import { useEffect } from 'react';
import { getOffer, getOfferComments, getOffersNearby } from '../../store/api-action';
import PlaceCard from '../../components/palce-card/place-card';
import { Rewiew } from '../../components/review/review';

function OfferPage(): JSX.Element | undefined {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOffer(id));
    dispatch(getOffersNearby(id));
    dispatch(getOfferComments(id));
  }, [dispatch, id]);

  const offers = useAppSelector((state) => state.offers.offers);
  const status = useAppSelector((state) => state.offers.loadingStatus);
  const offer = offers.find((item) => item.id === id);
  const offersNearby = useAppSelector((state) => state.offer.nearby);
  const comments = useAppSelector((state) => state.comments.comments);


  if (offer === undefined && status === LoadingStatus.Loading) {
    return <LoadingSpinner/>;
  } if (offer !== undefined && status === LoadingStatus.Succes) {
    return (
      <div className="page">
        <Helmet>
          <title>6 cities: offer</title>
        </Helmet>
        <Header/>
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/room.jpg" alt="Photo studio"/>
                </div>
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
                </div>
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio"/>
                </div>
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio"/>
                </div>
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio"/>
                </div>
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
                </div>
              </div>
            </div>
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
                    Apartment
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    3 Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max 4 adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    <li className="offer__inside-item">
                      Wi-Fi
                    </li>
                    <li className="offer__inside-item">
                      Washing machine
                    </li>
                    <li className="offer__inside-item">
                      Towels
                    </li>
                    <li className="offer__inside-item">
                      Heating
                    </li>
                    <li className="offer__inside-item">
                      Coffee machine
                    </li>
                    <li className="offer__inside-item">
                      Baby seat
                    </li>
                    <li className="offer__inside-item">
                      Kitchen
                    </li>
                    <li className="offer__inside-item">
                      Dishwasher
                    </li>
                    <li className="offer__inside-item">
                      Cabel TV
                    </li>
                    <li className="offer__inside-item">
                      Fridge
                    </li>
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="offer__user-name">
                      Angelina
                    </span>
                    <span className="offer__user-status">
                      Pro
                    </span>
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <p className="offer__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                  <ul className="reviews__list">
                    {comments.map((curent) => <Rewiew key={curent.id} rewiew={curent}/>)}
                  </ul>
                  <ReviewsForm offerId={id}/>
                </section>
              </div>
            </div>
            <section className="offer__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {offersNearby.map((current) => <PlaceCard key={current.id} offersData={current} type='nearby'/>)}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  } if (offer === undefined && status === LoadingStatus.Succes) {
    return <NotFoundPage/>;
  }


}

export default OfferPage;
