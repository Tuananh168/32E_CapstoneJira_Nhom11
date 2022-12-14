import { USER_LOGIN } from "../../utils/setting/config";
import {
  GET_USER_SEARCH,
  LOGIN_ACTION,
} from "../constants/CyberBugs/CyberBugs";

let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  UserLogin: usLogin,
  UserSearch: [],
};

export const UserCyberBugsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      state.UserLogin = action.data;
    }
    case GET_USER_SEARCH: {
      state.UserSearch = action.listUserSearch;

      return {
        ...state,
      };
    }
    default:
      return { ...state };
  }
};
