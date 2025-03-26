import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="App Logo" width="100px" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
