import { Link } from "react-router-dom";
import { LOGO } from "../config";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={LOGO} alt="logo" />
      </div>
      <ul className="menu">
        <li>search</li>
        <li><Link to ='offer'>offer</Link></li>
        <li><Link to ='help'>help</Link></li>
        <li><Link to ='contact'>contact</Link></li>
      </ul>
    </div>
  );
};

export default Header;
