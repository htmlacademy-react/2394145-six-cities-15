import { FormEvent, useState } from 'react';
import { ReviewsFormStars } from '../reviews-form-stars/reviews-form-stars';
import { AuthorizationStatus, MIN_REVIEW_LENGTH, RatingTitle } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOfferComments, postOfferComments } from '../../store/api-action';

type RewiewFormPropsType ={
  offerId: string | undefined;
}

export function ReviewsForm({offerId}: RewiewFormPropsType): JSX.Element | undefined {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.user.status);
  const [review, setReview] = useState({
    comment: '',
    rating: 0
  });

  function setRating(value: number): void {
    setReview({
      ...review,
      rating: value
    });
  }

  function setComment(value: string): void {
    setReview({
      ...review,
      comment: value
    });
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postOfferComments({
      id: offerId,
      comment: review.comment,
      rating: review.rating
    }));
    dispatch(getOfferComments(offerId));
  };

  function handleSetRating(element: React.ChangeEvent<HTMLInputElement>) {
    setRating(Number(element.target.value));
  }


  if (status === AuthorizationStatus.Auth) {
    return (
      <form className="reviews__form form" action="" method="post" onSubmit={handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {RatingTitle.map((current, id) => <ReviewsFormStars value={RatingTitle.length - id} title={current} key={current} handleSetRating={handleSetRating}/>)}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={(e) => setComment(e.target.value)}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={review.comment.length < MIN_REVIEW_LENGTH || review.rating < 1}>Submit</button>
        </div>
      </form>
    );
  }
}
