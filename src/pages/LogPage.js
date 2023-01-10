import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login, logout } from "../redux/store";
export const LogPage = () => {
  const [newUserName, setNewUserName] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.userName);
  return (
    <div>
      <h1>Welcome! {username}</h1>
      <input onChange={(e) => setNewUserName(e.target.value)} />
      <button
        onClick={() => {
          if (newUserName) {
            dispatch(login({ userName: newUserName }));
          }
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};
