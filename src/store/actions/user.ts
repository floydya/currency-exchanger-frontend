import { UserActionNames, UserActions } from "../types/user";
import message from "antd/es/message";

const actions = {
  setCurrency: (payload: string): UserActions => ({
    type: UserActionNames.SET_CURRENCY,
    payload,
  }),
  addFavorite: (payload: string): UserActions => {
    message.success("Added to favorites");
    return {
      type: UserActionNames.ADD_FAVORITE,
      payload,
    };
  },
  removeFavorite: (payload: string): UserActions => {
    message.success("Removed from favorites");
    return {
      type: UserActionNames.REMOVE_FAVORITE,
      payload,
    };
  },
};

export default actions;
