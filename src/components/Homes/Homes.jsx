import "./Homes.scss";
import { homes } from "./HomeData";

const Homes = () => {
  return (
    <section className="homes">
      {homes.map((home) => (
        <div key={home.id} className="home">
          <img src={home.img} alt={home.alt} className="home__img" />
          <svg className="home__like">
            <use href="src/assets/img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="home__name">{home.heading}</h5>
          <div className="home__location">
            <svg>
              <use href="src/assets/img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>{home.location}</p>
          </div>

          <div className="home__rooms">
            <svg>
              <use href="src/assets/img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>{home.rooms}</p>
          </div>

          <div className="home__area">
            <svg>
              <use href="src/assets/img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              {home.size}
              <sup>2</sup>
            </p>
          </div>

          <div className="home__price">
            <svg>
              <use href="src/assets/img/sprite.svg#icon-key"></use>
            </svg>
            <p>{home.price}</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
        </div>
      ))}
    </section>
  );
};

export default Homes;
