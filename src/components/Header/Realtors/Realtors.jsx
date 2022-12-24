import "./Realtors.scss";
import React from "react";
import { realtorsData } from "./RealtorsData";

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        {realtorsData.map((realtor) => {
          return (
            <React.Fragment key={realtor.key}>
              <img
                src={realtor.img}
                alt={realtor.name}
                className="realtors__img"
              />
              <div className="realtors__details">
                <h4 className="heading-4 heading-4--light">{realtor.name}</h4>
                <p className="realtors__sold">
                  {realtor.housesSold} houses sold
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Realtors;
