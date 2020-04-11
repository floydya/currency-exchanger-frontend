export interface IUserState {
  selectedCurrency: string;
  favorites: string[];
}

export enum UserActionNames {
  SET_CURRENCY="USER:SET_CURRENCY",
  ADD_FAVORITE="USER:ADD_FAVORITE",
  REMOVE_FAVORITE="USER:REMOVE_FAVORITE",
}

interface ISetCurrency {
  type: typeof UserActionNames.SET_CURRENCY;
  payload: string;
}

interface IAddFavorite {
  type: typeof UserActionNames.ADD_FAVORITE;
  payload: string;
}

interface IRemoveFavorite {
  type: typeof UserActionNames.REMOVE_FAVORITE;
  payload: string;
}

export type UserActions = ISetCurrency | IAddFavorite | IRemoveFavorite;
