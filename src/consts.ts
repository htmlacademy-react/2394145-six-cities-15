export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Main = '/',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CitiesEnum {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg ='Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum LoadingStatus {
  Loading = 'Loading',
  Succes = 'Succes',
  Reject = 'Reject'
}

export enum SortingTypes {
  Popular ='Popular',
  Price_to_high = 'Price: low to high',
  Price_to_low = 'Price: high to low',
  Rated_first = 'Top rated first'
}

export const RatingTitle: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export const URL_MARKER_DEFAULT =
'../public/img/pin.svg';

export const URL_MARKER_CURRENT =
'../public/img/pin-active.svg';

export const DEFAULT_CITY = 'Paris';

export const MIN_REVIEW_LENGTH = 50;

export const MAX_NEARBY_COUNT = 3;
