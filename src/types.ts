import { AuthorizationStatus, LoadingStatus } from './consts';

export type City = {
  name: string;
  location: Location;
}

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type OffersDataType = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    };

export type OfferInitialStateType = {
    offer: OffersDataType | null;
    nearby: OffersDataType[];
    status: LoadingStatus | undefined;
};

export type OffersInitialStateType = {
    city: string;
    offers: OffersDataType[];
    status: LoadingStatus | undefined;
    authorizationStatus: AuthorizationStatus;
  };

export type User = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
    email: string;
    token: string;
};

export type UserInitialStateType ={
  user: User | null;
  requestStatus: LoadingStatus | undefined;
  status: AuthorizationStatus;
}

export type LoginData = {
  email: string;
  password: string;
}

export type Comment = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

export type CommentsInitialState = {
  id: string;
  comments: Comment[];
  status: LoadingStatus | undefined;
}

export type CommentData = {
  id: string | undefined;
  comment: string;
  rating: number;
};
