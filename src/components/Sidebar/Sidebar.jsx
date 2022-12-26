import { useState } from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prevState) => (prevState = !prevState));
  };
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        {!showMenu && (
          <svg onClick={toggleMenu} className="sidebar__icon">
            <use href="src/assets/img/sprite.svg#icon-menu"></use>
          </svg>
        )}

        {showMenu && (
          <svg onClick={toggleMenu} className="sidebar__icon">
            <use href="src/assets/img/sprite.svg#icon-x"></use>
          </svg>
        )}

        {/* <button className="nav-btn"></button> */}
      </div>
    </div>
  );
};

export default Sidebar;
