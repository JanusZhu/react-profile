import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <Link to="/react-profile">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/count">Count</Link>
      <Link to="/logPage">LogPage</Link>
    </div>
  );
};
