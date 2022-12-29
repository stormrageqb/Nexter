import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.png" alt="logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src="/logo-bbc.png" alt="BBC logo" />
        <img src="/logo-forbes.png" alt="BBC logo" />
        <img src="/logo-techcrunch.png" alt="BBC logo" />
        <img src="/logo-bi.png" alt="BBC logo" />
      </div>
    </header>
  );
};

export default Header;
