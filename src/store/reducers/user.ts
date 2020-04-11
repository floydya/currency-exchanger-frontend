import { IUserState, UserActions, UserActionNames } from "../types/user";

const initialState: IUserState = {
  selectedCurrency: localStorage.getItem("currency") || "USD",
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

function userReducer(state = initialState, { type, payload }: UserActions) {
  switch (type) {
    case UserActionNames.SET_CURRENCY:
      localStorage.setItem("currency", payload);
      return Object.assign({}, state, { selectedCurrency: payload });
    case UserActionNames.ADD_FAVORITE:
      const favorites = [ ...state.favorites, payload ];
      localStorage.setItem("favorites", JSON.stringify(favorites));
      return Object.assign({}, state, { favorites });
    case UserActionNames.REMOVE_FAVORITE:
      const _favorites = state.favorites.filter((item) => item !== payload);
      localStorage.setItem("favorites", JSON.stringify(_favorites));
      return Object.assign({}, state, { favorites: _favorites });
    default:
      return state;
  }
}

export default userReducer;
