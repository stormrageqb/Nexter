import "./Feature.scss";
import { features } from "./FeatureData";

const Feature = () => {
  const featureList = features.map((feature) => (
    <div key={feature.id} className="feature">
      <svg className="feature__icon">
        <use href={feature.svg}></use>
      </svg>
      <h4 className="heading-4 heading-4--dark">{feature.heading}</h4>
      <p className="feature__text">{feature.text}</p>
    </div>
  ));
  return <>{featureList}</>;
};

export default Feature;
