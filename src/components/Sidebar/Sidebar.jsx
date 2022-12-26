import { useState } from "react";
import "./Sidebar.scss";
import Navigation from "../Navigation/Navigation";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prevState) => (prevState = !prevState));
  };
  if (showMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
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
      {showMenu && <Navigation />}
    </>
  );
};

export default Sidebar;
