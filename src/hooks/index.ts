import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../types/state';
import { OffersDataType } from '../types';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export function useSortOffers(offers: OffersDataType[], type: string): OffersDataType[] {
  const sortOffers: OffersDataType[] = [...offers];
  switch(type) {
    case 'Price: low to high':
      return sortOffers.sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return sortOffers.sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return sortOffers.sort((a, b) => b.rating - a.rating);
    case 'Popular':
      return sortOffers;
    default:
      return sortOffers;
  }

}
