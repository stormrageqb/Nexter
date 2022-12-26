import "./Navigation.scss";

const Navigation = ({ showMenu }) => {
  return (
    <div className={showMenu ? "navigation open" : "navigation"}>
      {/* // <div className={`navigation ${!showMenu ? "open" : null}`}> */}
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Houses
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
