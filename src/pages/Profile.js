import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "./ChangeProfile";
export const Profile = () => {
  const { name } = useContext(AppContext);
  return (
    <div>
      Profile. Name: {name}
      <ChangeProfile />
    </div>
  );
};
