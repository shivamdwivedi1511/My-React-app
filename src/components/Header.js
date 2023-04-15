import { LOGO } from "../config";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={LOGO} alt="logo" />
      </div>
      <ul className="menu">
        <li>search</li>
        <li>offer</li>
        <li>help</li>
        <li>cart</li>
      </ul>
    </div>
  );
};

export default Header;
