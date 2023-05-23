import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "../pages/login";


function Auth({ children }) {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.login?.currentUser);
  console.log(isLogin)


  useEffect(() => {
    // if (isLogin) {
    //   // dispatch(setUser(JSON.parse(localUser)));
    //   navigate("/cart");
    // }
  }, []);

  return <>{isLogin ? children : <Login/>}</>;
}

export default Auth;
