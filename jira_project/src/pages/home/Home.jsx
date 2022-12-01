import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userLogin = useSelector(
    (state) => state.UserCyberBugsReducer.UserLogin
  );
  return <div></div>;
};

export default Home;
