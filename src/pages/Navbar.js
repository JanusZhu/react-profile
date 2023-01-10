import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <Link to="/react-profile/">Home</Link>
      <Link to="/react-profile/profile">Profile</Link>
      <Link to="/react-profile/count">Count</Link>
      <Link to="/react-profile/logPage">LogPage</Link>
    </div>
  );
};
