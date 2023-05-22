import React, { useEffect } from "react";
import { LOCALSTORAGE_KEY } from "../constants";
import { getLocalUser } from "../services/local-storage.service";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../features/userSlice";
import Login from "../components/main/Login";

function Auth({ children }) {
  const user = useSelector(selectUser);
  const localUser = getLocalUser(LOCALSTORAGE_KEY);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localUser) {
      dispatch(setUser(JSON.parse(localUser)));
      navigate("/home");
    }
    // eslint-disable-next-line
  }, []);

  return <>{user ? children : <Login />}</>;
}

export default Auth;
