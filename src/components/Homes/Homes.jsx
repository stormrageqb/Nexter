import "./Homes.scss";
import { homes } from "./HomeData";

const Homes = () => {
  return (
    <section className="homes">
      {homes.map((home) => (
        <div key={home.id} className="home">
          Home
        </div>
      ))}
      <div className="home"></div>
    </section>
  );
};

export default Homes;
