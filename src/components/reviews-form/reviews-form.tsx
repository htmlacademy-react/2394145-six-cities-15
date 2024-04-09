import { FormEvent, useRef, useState } from 'react';
import { ReviewsFormStars } from '../reviews-form-stars/reviews-form-stars';
import { AuthorizationStatus, LoadingStatus, MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, ratingTitles } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postOfferComments } from '../../store/api-action';
import { commentsSlice } from '../../store/slices/comments';

type RewiewFormPropsType ={
  offerId: string | undefined;
}

export function ReviewsForm({offerId}: RewiewFormPropsType): JSX.Element | undefined {
  const dispatch = useAppDispatch();
  const statusAuth = useAppSelector((state) => state.user.status);
  const statusLoadingComment = useAppSelector((state) => state.comments.status);
  const isStatusLoading = statusLoadingComment === LoadingStatus.Loading;
  const isStatusSucces = statusLoadingComment === LoadingStatus.Succes;
  const formReview = useRef<HTMLFormElement>(null);
  const [review, setReview] = useState({
    comment: '',
    rating: 0
  });


  function setRating(value: number): void {
    setReview({
      ...review,
      rating: value
    });
    dispatch(commentsSlice.actions.setLoadingStatus());
  }

  function setComment(value: string): void {
    setReview({
      ...review,
      comment: value
    });
    dispatch(commentsSlice.actions.setLoadingStatus());
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postOfferComments({
      id: offerId,
      comment: review.comment,
      rating: review.rating
    }));
    if (statusLoadingComment === LoadingStatus.Succes) {
      setReview({
        comment: '',
        rating: 0
      });
    }
  };

  function handleSetRating(element: React.ChangeEvent<HTMLInputElement>) {
    setRating(Number(element.target.value));
  }

  if (formReview.current !== null && statusLoadingComment === LoadingStatus.Succes) {
    formReview.current.reset();
  }

  if (statusAuth === AuthorizationStatus.Auth) {
    return (
      <form className="reviews__form form" action="" method="post" onSubmit={handleSubmit} ref={formReview}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingTitles.map((current, id) => <ReviewsFormStars value={ratingTitles.length - id} title={current} key={current} handleSetRating={handleSetRating} disabled={isStatusLoading}/>)}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" disabled={isStatusLoading} placeholder="Tell how was your stay, what you like and what can be improved" onChange={(e) => setComment(e.target.value)}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isStatusLoading || isStatusSucces || review.comment.length < MIN_REVIEW_LENGTH || review.rating < 1 || review.comment.length > MAX_REVIEW_LENGTH}>{isStatusLoading ? '...Loading' : 'Submit'}</button>
        </div>
      </form>
    );
  }
}
