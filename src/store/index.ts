import { combineReducers, createStore, applyMiddleware, compose, AnyAction } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { currenciesReducer, userReducer } from "./reducers";
import { ICurrenciesState } from "./types/currencies";
import { IUserState } from "./types/user";

export interface IStore {
  currencies: ICurrenciesState;
  user: IUserState;
}

const rootReducer = combineReducers({
  currencies: currenciesReducer,
  user: userReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const thunkDispatch = (callable: any) => (store.dispatch as ThunkDispatch<IStore, void, AnyAction>)(callable)
export default store;
