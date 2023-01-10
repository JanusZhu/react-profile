import { useContext, useState } from "react";
import { AppContext } from "../App";
export const ChangeProfile = () => {
  const { name, setName } = useContext(AppContext);
  const [newName, setNewName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setName(newName);
        }}
      >
        Change Name
      </button>
    </div>
  );
};
