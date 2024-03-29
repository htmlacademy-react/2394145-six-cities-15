import { Comment } from '../../types';
import { Rewiew } from '../review/review';
import { ReviewsForm } from '../reviews-form/reviews-form';

type OfferRewiewsType = {
  comments: Comment[];
  id: string | undefined;
}

export function OfferRewiews({comments, id}: OfferRewiewsType): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((curent) => <Rewiew key={curent.id} rewiew={curent}/>)}
      </ul>
      <ReviewsForm offerId={id}/>
    </section>
  );
}
