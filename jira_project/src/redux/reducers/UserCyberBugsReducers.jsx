import { USER_LOGIN } from "../../utils/setting/config";
import { LOGIN_ACTION } from "../constants/CyberBugs/CyberBugs";

let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  UserLogin: usLogin,
};

export const UserCyberBugsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      state.UserLogin = action.data;
    }
    default:
      return { ...state };
  }
};
