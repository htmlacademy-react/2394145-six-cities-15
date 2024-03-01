import { useState } from 'react';
import { ReviewsFormStars } from '../reviews-form-stars/reviews-form-stars';
import { RatingTitle } from '../../consts';

export function ReviewsForm(): JSX.Element {
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

  function handleSetRating(element: React.ChangeEvent<HTMLInputElement>) {
    setRating(Number(element.target.value));
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingTitle.map((current, id) => <ReviewsFormStars value={RatingTitle.length - id} title={current} key={current} handleSetRating={handleSetRating}/>)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={(e) => setComment(e.target.value)}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={review.comment.length < 50 || review.rating < 1}>Submit</button>
      </div>
    </form>
  );
}
