export const Counts = {
  placesCount: 5
};

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

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg ='Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const RatingTitle: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

//export const RatingTitle: string[] = ['terribly', 'badly', 'not bad', 'good', 'perfect'];
