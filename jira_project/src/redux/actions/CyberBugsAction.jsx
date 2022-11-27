import { USER_SIGNIN_SAGA } from "../constants/CyberBugs/CyberBugs";

export const signinCyberBugs = (userLogin, passwordLogin) => {
  return {
    type: USER_SIGNIN_SAGA,
    user: {
      email: userLogin,
      passWord: passwordLogin,
    },
  };
};
